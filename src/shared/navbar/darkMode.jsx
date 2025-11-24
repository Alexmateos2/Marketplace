import { useCallback, useState, useRef } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkMode({ className = "", duration = 400, ...props }) {
  const buttonRef = useRef(null);

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useState(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    const newTheme = !isDark;
    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme ? "dark" : "light");
      });

      await transition.ready;

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } else {
      setIsDark(newTheme);
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", newTheme ? "dark" : "light");
    }
  }, [isDark, duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-colors ${
        isDark ? "hover:bg-gray-700" : "hover:bg-gray-200"
      } ${className}`}
      aria-label="Toggle theme"
      {...props}
    >
      {isDark ? <Sun size={22} /> : <Moon size={22} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
