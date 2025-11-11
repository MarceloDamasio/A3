import React from 'react';
import { User, LogOut, Settings, X } from 'lucide-react';

interface ProfilePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export function ProfilePopup({ isOpen, onClose, onLogout }: ProfilePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-end">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl m-4 w-80 animate-fade-in">
        <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 dark:from-blue-600 dark:to-blue-700 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <User className="w- h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Teste</h3>
                <p className="text-cyan-100 dark:text-blue-200 text-sm">teste@email.com</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <button
            onClick={onLogout}
            className="w-full flex items-center p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Sair da conta</span>
          </button>
        </div>
      </div>
    </div>
  );
}