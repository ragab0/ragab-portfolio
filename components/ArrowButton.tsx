import Link from "next/link";

export default function ArrowButton({ href = "#about", label = "About" }) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2"
      aria-label={label}
    >
      <div className="flex flex-col items-center">
        {/* Mouse/Pill Shape */}
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 group-hover:border-primary flex justify-center p-1 transition-colors duration-300">
          {/* Scrolling Dot */}
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-scroll-dot"></div>
        </div>

        {/* Animated Arrow Head */}
        <div className="mt-2 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 text-primary/60 group-hover:text-primary transition-all duration-300 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
