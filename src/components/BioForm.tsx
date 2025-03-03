// Archivo: src/components/BioForm.tsx
"use client";

import { useState } from "react";
import TonesModal from "./TonesModal";

interface BioFormProps {
  onOptimize: (bio: string, platform: string, tone: string) => void;
}

export default function BioForm({ onOptimize }: BioFormProps) {
  const [bio, setBio] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (platform: string) => {
    setSelectedPlatform(platform);
    setShowModal(true);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <textarea
        maxLength={250}
        className="w-full h-28 p-2 border"
        placeholder="Ingresa tu biografía"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <div className="flex gap-2 mt-4 justify-center">
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded"
          onClick={() => handleOpenModal("Instagram")}
        >
          Instagram
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleOpenModal("Twitter")}
        >
          Twitter
        </button>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => handleOpenModal("LinkedIn")}
        >
          LinkedIn
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => handleOpenModal("TikTok")}
        >
          TikTok
        </button>
      </div>

      {showModal && (
        <TonesModal
          onClose={() => setShowModal(false)}
          onConfirm={(tone) => {
            onOptimize(bio, selectedPlatform, tone);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}