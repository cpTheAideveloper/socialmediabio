// Archivo: src/components/TonesModal.tsx
"use client";

import { useState } from "react";

interface TonesModalProps {
  onClose: () => void;
  onConfirm: (tone: string) => void;
}

export default function TonesModal({ onClose, onConfirm }: TonesModalProps) {
  const [selectedTone, setSelectedTone] = useState("");

  const tones = ["Profesional", "Divertido", "Creativo", "Minimalista"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-4">Selecciona el tono</h2>
        {tones.map((t) => (
          <label key={t} className="block mb-2">
            <input
              type="radio"
              name="tone"
              value={t}
              onChange={(e) => setSelectedTone(e.target.value)}
            />
            <span className="ml-2">{t}</span>
          </label>
        ))}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 bg-gray-400 rounded text-white"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-green-600 rounded text-white"
            onClick={() => onConfirm(selectedTone)}
          >
            Optimizar
          </button>
        </div>
      </div>
    </div>
  );
}