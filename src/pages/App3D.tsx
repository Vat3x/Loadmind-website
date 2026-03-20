import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function App3D() {
  return (
    <>
      <iframe
        src="https://3dloadplanning.netlify.app/"
        title="LoadMind 3D Planner"
        className="fixed inset-0 h-full w-full border-0"
        allow="clipboard-read; clipboard-write"
      />
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-gray-900/80 backdrop-blur-sm px-3 py-2 text-sm text-white/80 transition-all hover:bg-gray-900 hover:text-white shadow-lg"
      >
        <ArrowLeft className="h-4 w-4" />
        LoadMind
      </Link>
    </>
  );
}
