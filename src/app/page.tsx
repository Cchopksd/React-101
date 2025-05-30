import Link from "next/link";

const examples = [
  { title: "useCallback Example", href: "/use-callback" },
  { title: "useMemo Example", href: "/use-memo" },
  { title: "Custom Hook: useCounter", href: "/use-counter" },
  { title: "Custom Hook: useDebounce", href: "/use-debounce" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-700 mb-2">
            🧪 React Hook Examples
          </h1>
          <p className="text-gray-500 text-lg">
            ตัวอย่างการใช้งาน Hooks แบบ practical พร้อม custom hooks
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2">
          {examples.map((ex) => (
            <li key={ex.href}>
              <Link
                href={ex.href}
                className="block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 group">
                <h2 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">
                  {ex.title}
                </h2>
                <p className="text-sm text-gray-400 mt-1">ดูตัวอย่าง</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

