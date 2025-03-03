// Archivo: src/components/VariationList.tsx
"use client";

interface VariationListProps {
  data: AppTypes.OptimizedResponse;
  onRetry: () => void;
}

export default function VariationList({ data, onRetry }: VariationListProps) {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">
        Biografía optimizada para {data.platform} (Tono: {data.tone})
      </h2>
      <p className="mb-4">Biografía original: {data.originalBio}</p>
      {data.variations.map((variation, index) => (
        <div key={index} className="border rounded p-2 mb-4">
          <p>{variation}</p>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            onClick={() => navigator.clipboard.writeText(variation)}
          >
            Copiar
          </button>
        </div>
      ))}
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded"
        onClick={onRetry}
      >
        Intentar de nuevo
      </button>
    </div>
  );
}