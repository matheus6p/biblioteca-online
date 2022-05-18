import { Moon, SunDim } from "phosphor-react";
import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute top-0 right-0 outline-none">
      {theme === "light" ? (
        <button type="button" onClick={() => setTheme("dark")}>
          <Moon size={32} className="text-slate-900" />
        </button>
      ) : (
        <button type="button" onClick={() => setTheme("light")}>
          <SunDim size={32} className="text-slate-100" />
        </button>
      )}
    </div>
  );
}
