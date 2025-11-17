import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Sidebar } from './components/Sidebar';
import { IMCInput } from './components/IMCInput';
import { IMCResult } from './components/IMCResult';
import { TabNavigation } from './components/TabNavigation';
import { IMCHistory } from './components/IMCHistory';
import { NutritionPage } from './components/NutritionPage';
import { ExercisePage } from './components/ExercisePage';
import { ProfilePopup } from './components/ProfilePopup';
import { LoginPage } from './components/LoginPage';
import { calculateIMC } from './utils/imcCalculator';
import { IMCResult as IMCResultType, IMCHistoryEntry } from './types/imc';
import { Activity, User } from 'lucide-react';

// 👉 IMPORTAÇÃO DO WEEKLY KANBAN
import { WeeklyKanban } from './components/WeeklyKanban';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 👉 ADICIONADA A PÁGINA AGENDA
  const [activePage, setActivePage] = useState<'calculator' | 'nutrition' | 'exercises' | 'agenda'>('calculator');

  const [activeTab, setActiveTab] = useState<'calculator' | 'history'>('calculator');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<IMCResultType | null>(null);
  const [history, setHistory] = useState<IMCHistoryEntry[]>([]);
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://backend:3000/api/message")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("Erro ao conectar com backend"));
  }, []);

  const isValid = weight.trim() !== '' && height.trim() !== '' &&
                  parseFloat(weight) > 0 && parseFloat(height) > 0;

  const handleCalculate = () => {
    if (isValid) {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
      const imcResult = calculateIMC(weightNum, heightNum);
      setResult(imcResult);

      const historyEntry: IMCHistoryEntry = {
        id: Date.now().toString(),
        weight: weightNum,
        height: heightNum,
        result: imcResult,
        date: new Date()
      };
      setHistory(prev => [historyEntry, ...prev]);
    }
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  const handleClearHistory = () => setHistory([]);
  const handleDeleteEntry = (id: string) => setHistory(prev => prev.filter(entry => entry.id !== id));

  const handleLogout = () => {
    setShowProfilePopup(false);
    setIsLoggedIn(false);
    setWeight('');
    setHeight('');
    setResult(null);
    setHistory([]);
  };

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      
      {/* SIDEBAR */}
      <Sidebar
        activePage={activePage}
        onPageChange={setActivePage}
        historyCount={history.length}
      />

      <div className="ml-64 min-h-screen">

        {/* HEADER */}
        <div className="flex justify-end p-4">
          <ThemeToggle />
          <button
            onClick={() => setShowProfilePopup(true)}
            className="flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
          >
            <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="container mx-auto px-8 py-8 max-w-6xl">

          {/* 👉 AGENDA (WEEKLY KANBAN) */}
          {activePage === 'agenda' && (
            <WeeklyKanban />
          )}

          {/* 👉 CALCULADORA */}
          {activePage === 'calculator' && (
            <>
              <header className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Activity className="w-12 h-12 text-cyan-500 dark:text-blue-400 mr-3" />
                  <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Calculadora IMC</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                  Descubra seu Índice de Massa Corporal e veja sua classificação de forma visual e divertida!
                </p>
              </header>

              <TabNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
                historyCount={history.length}
              />

              {activeTab === 'calculator' ? (
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <IMCInput
                      weight={weight}
                      height={height}
                      onWeightChange={setWeight}
                      onHeightChange={setHeight}
                      onCalculate={handleCalculate}
                      isValid={isValid}
                    />

                    {result && (
                      <button
                        onClick={handleReset}
                        className="w-full py-3 px-6 bg-gray-500 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200"
                      >
                        Calcular Novamente
                      </button>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <IMCResult result={result} />
                  </div>
                </div>
              ) : (
                <IMCHistory
                  history={history}
                  onClearHistory={handleClearHistory}
                  onDeleteEntry={handleDeleteEntry}
                />
              )}
            </>
          )}

          {/* 👉 NUTRIÇÃO */}
          {activePage === 'nutrition' && (
            <>
              <header className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Activity className="w-12 h-12 text-cyan-500 dark:text-blue-400 mr-3" />
                  <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Alimentação Personalizada</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                  Recomendações nutricionais baseadas no seu IMC atual para uma vida mais saudável!
                </p>
              </header>

              <NutritionPage currentIMC={result} />
            </>
          )}

          {/* 👉 EXERCÍCIOS */}
          {activePage === 'exercises' && (
            <>
              <header className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Activity className="w-12 h-12 text-cyan-500 dark:text-blue-400 mr-3" />
                  <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Exercícios Personalizados</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                  Plano de exercícios baseado no seu IMC atual para alcançar seus objetivos de saúde!
                </p>
              </header>

              <ExercisePage currentIMC={result} />
            </>
          )}

        </div>
      </div>

      {/* POPUP DE PERFIL */}
      <ProfilePopup
        isOpen={showProfilePopup}
        onClose={() => setShowProfilePopup(false)}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default App;
