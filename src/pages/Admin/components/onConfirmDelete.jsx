import { useState } from 'react';
import { AlertCircle, Trash2, X } from 'lucide-react';

export function useConfirmDelete() {
  const [isOpen, setIsOpen] = useState(false);
  const [resolvePromise, setResolvePromise] = useState(null);
  const [itemName, setItemName] = useState('');

  const confirm = (name = 'este elemento') => {
    return new Promise((resolve) => {
      setResolvePromise(() => resolve);
      setItemName(name);
      setIsOpen(true);
    });
  };

  const handleConfirm = () => {
    setIsOpen(false);
    resolvePromise?.(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
    resolvePromise?.(false);
  };

  const Modal = () => (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-200"
          onClick={handleCancel}
        />
      )}

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg max-w-sm w-full mx-4 pointer-events-auto transform transition-all duration-200 border border-border-light dark:border-border-dark ${
            isOpen ? 'scale-100' : 'scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border-light dark:border-border-dark ">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-lg font-semibold text-content-light dark:text-content-dark">
                Confirmar eliminación
              </h2>
            </div>
            <button
              onClick={handleCancel}
              className="p-1 hover:bg-background-light dark:hover:bg-background-dark rounded-lg transition-colors text-subtle-light dark:text-subtle-dark"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-3">
            <p className="text-content-light dark:text-content-dark text-sm leading-relaxed">
              ¿Estás seguro de que deseas eliminar <span className="font-bold text-subtle-light dark:text-subtle-dark">{itemName}</span>?
            </p>
            <p className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
              ⚠️ Esta acción no se puede deshacer.
            </p>
          </div>

          {/* Footer */}
          <div className="flex gap-3 p-6 border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/50">
            <button
              onClick={handleCancel}
              className="flex-1 px-4 py-2.5 text-content-light dark:text-content-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark font-medium text-sm transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 px-4 py-2.5 text-white bg-red-600 hover:bg-red-700 dark:hover:bg-red-700 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return { confirm, Modal };
}