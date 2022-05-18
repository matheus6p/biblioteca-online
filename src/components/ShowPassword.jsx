import { Eye, EyeClosed } from "phosphor-react";
import React from "react";

export default function ShowPassword({ showPassword, setShowPassword }) {
  return (
    <button
      className="absolute right-4 top-1 outline-none"
      type="button"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? (
        <Eye size={32} className="text-zinc-500" />
      ) : (
        <EyeClosed size={32} className="text-zinc-600" />
      )}
    </button>
  );
}
