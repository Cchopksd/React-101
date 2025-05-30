import RefForm from "./components/RefForm";
import NoRefForm from "./components/NoRefForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        useRef vs useState (TSX version)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <RefForm />
        <NoRefForm />
      </div>
    </main>
  );
}

