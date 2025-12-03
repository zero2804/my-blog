import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-base-background shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-base-title">Блог</Link>
        <nav className="hidden md:flex gap-4">
          <Link
            href="/posts"
            className="relative text-blue after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full"
          >
            Статьи
          </Link>

          <a
            href="/#contact"
            className="relative text-blue after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full"
          >
            Контакты
          </a>
        </nav>
        <button className="md:hidden px-2 py-1 border rounded">Меню</button>
      </div>
    </header>
  );
}