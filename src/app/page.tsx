// Archivo: src/app/page.tsx
"use client";

import { useState } from "react";
import BioForm from "@/components/BioForm";
import Loading from "@/components/Loading";
import VariationList from "@/components/VariationList";

declare namespace AppTypes {
  interface OptimizedResponse {
    platform: string;
    tone: string;
    originalBio: string;
    variations: string[];
  }
}

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [optimizedData, setOptimizedData] =
    useState<AppTypes.OptimizedResponse | null>(null);

  const handleOptimize = async (bio: string, platform: string, tone: string) => {
    setLoading(true);
    setOptimizedData(null);
    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bio, platform, tone }),
      });

      if (!res.ok) {
        throw new Error("Error al realizar la solicitud");
      }

      const data = await res.json();
      const parsedData = JSON.parse(data) as AppTypes.OptimizedResponse;
      setOptimizedData(parsedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setOptimizedData(null);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      {loading && <Loading />}
      {!loading && !optimizedData && <BioForm onOptimize={handleOptimize} />}
      {!loading && optimizedData && (
        <VariationList data={optimizedData} onRetry={handleRetry} />
      )}
    </main>
  );
}