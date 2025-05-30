"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const groupedExamples = [
  {
    groupName: "Built-in Hooks",
    items: [
      { title: "useCallback Example", href: "/use-callback" },
      { title: "useMemo Example", href: "/use-memo" },
      { title: "🔁 useRef vs useState (compare)", href: "/use-ref-vs-state" },
    ],
  },
  {
    groupName: "Custom Hooks",
    items: [
      { title: "Custom Hook: useCounter", href: "/use-counter" },
      { title: "Custom Hook: useDebounce", href: "/use-debounce" },
    ],
  },
];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
  }),
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-700 mb-2">
            🧪 React Hook Examples
          </h1>
          <p className="text-gray-500 text-lg">
            ตัวอย่างการใช้งาน{" "}
            <span className="font-medium text-blue-600">React Hooks</span> ทั้ง
            built-in และ custom hook
          </p>
        </header>

        {groupedExamples.map(({ groupName, items }) => (
          <section
            key={groupName}
            className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-5 border-b border-gray-300 pb-2">
              {groupName}
            </h2>

            <ul className="grid gap-6 sm:grid-cols-2">
              {items.map((ex, i) => (
                <motion.li
                  key={ex.href}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={listVariants}>
                  <Link
                    href={ex.href}
                    className="block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 group">
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">
                      {ex.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">ดูตัวอย่าง</p>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

