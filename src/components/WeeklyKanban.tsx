import { useState } from "react";
import { Plus, Trash2, CalendarDays } from "lucide-react";

interface WeeklyKanbanProps {}

const weekDays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export function WeeklyKanban({}: WeeklyKanbanProps) {
  const [tasks, setTasks] = useState<Record<string, string[]>>(() => {
    const initial: Record<string, string[]> = {};
    weekDays.forEach((d) => (initial[d] = []));
    return initial;
  });

  const [inputs, setInputs] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    weekDays.forEach((d) => (initial[d] = ""));
    return initial;
  });

  const addTask = (day: string) => {
    if (!inputs[day].trim()) return;
    setTasks({
      ...tasks,
      [day]: [...tasks[day], inputs[day]],
    });
    setInputs({ ...inputs, [day]: "" });
  };

  const removeTask = (day: string, index: number) => {
    const updated = [...tasks[day]];
    updated.splice(index, 1);
    setTasks({ ...tasks, [day]: updated });
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 
      dark:from-blue-600 dark:to-blue-700 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3">
          <CalendarDays className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Agenda Semanal</h2>
            <p className="opacity-90 text-sm">Organize suas tarefas de Domingo a Sábado</p>
          </div>
        </div>
      </div>

      {/* Grid dos dias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {weekDays.map((day) => (
          <div
            key={day}
            className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg 
            border border-gray-100 dark:border-gray-700 flex flex-col"
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              {day}
            </h3>

            {/* Lista de tarefas */}
            <div className="space-y-3 flex-1">
              {tasks[day].length === 0 && (
                <p className="text-gray-400 dark:text-gray-500 text-sm">
                  Nenhuma tarefa ainda.
                </p>
              )}

              {tasks[day].map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-cyan-50 dark:bg-blue-900
                  rounded-lg border border-cyan-200 dark:border-blue-700"
                >
                  <span className="text-gray-700 dark:text-gray-200 text-sm flex-1">
                    {task}
                  </span>

                  <button
                    onClick={() => removeTask(day, index)}
                    className="text-red-500 hover:text-red-700 ml-3"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Campo adicionar */}
            <div className="mt-4 flex items-center gap-2">
              <input
                type="text"
                value={inputs[day]}
                onChange={(e) =>
                  setInputs({ ...inputs, [day]: e.target.value })
                }
                placeholder="Adicionar tarefa..."
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 
                dark:border-gray-600 bg-gray-50 dark:bg-gray-900 
                text-gray-800 dark:text-gray-200 text-sm focus:ring-2 
                focus:ring-cyan-400 dark:focus:ring-blue-500 outline-none"
              />

              <button
                onClick={() => addTask(day)}
                className="p-2 bg-cyan-500 hover:bg-cyan-600 
                dark:bg-blue-600 dark:hover:bg-blue-700 
                text-white rounded-lg"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
