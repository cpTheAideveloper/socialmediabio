// Archivo: src/components/Loading.tsx
"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></span>
    </div>
  );
}