import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy load all route components for code splitting
const App = lazy(() => import("../App"));
const Trivia = lazy(() => import("../page/Trivia"));
const Playdist = lazy(() => import("../page/Playdist.jsx"));
const CreadorPromesa = lazy(() => import("../page/CreadorPromesa.jsx"));

// Simple loading fallback
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.5rem',
    color: '#ff69b4'
  }}>
    Cargando...
  </div>
);

export default function AppRoute() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/playdist" element={<Playdist />} />
        <Route path="/creador-promesa" element={<CreadorPromesa />} />
      </Routes>
    </Suspense>
  );
}
