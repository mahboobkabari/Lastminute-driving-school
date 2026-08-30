import Link from "next/link";
import React from "react";
import { ArrowRight } from "./Icon";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "dark" | "light" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon = true,
  type = "button",
  disabled = false,
  onClick,
  ariaLabel,
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-black tracking-tight transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none select-none rounded-full";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 min-h-9 gap-1.5",
    md: "text-sm px-6 py-3.5 min-h-12 gap-2",
    lg: "text-base px-8 py-4 min-h-14 gap-2.5 shadow-lg",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#d71920] text-white hover:bg-[#b51218] hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-red-900/25",
    dark:
      "bg-[#071a33] text-white hover:bg-[#0d2a4f] hover:-translate-y-0.5 active:translate-y-0 border border-white/15 shadow-md shadow-slate-900/20",
    light:
      "bg-white text-[#071a33] hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-slate-900/10",
    outline:
      "bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "bg-transparent text-[#102033] hover:bg-slate-100 hover:text-[#d71920]",
  }[variant];

  const isWhiteText = variant === "primary" || variant === "dark" || variant === "outline";
  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          style={isWhiteText ? { color: "#ffffff" } : undefined}
          className={combinedClasses}
          aria-label={ariaLabel}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        >
          <span style={isWhiteText ? { color: "#ffffff" } : undefined}>{children}</span>
          {icon && <ArrowRight className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />}
        </a>
      );
    }
    return (
      <Link
        href={href}
        style={isWhiteText ? { color: "#ffffff" } : undefined}
        className={combinedClasses}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <span style={isWhiteText ? { color: "#ffffff" } : undefined}>{children}</span>
        {icon && <ArrowRight className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />}
      </Link>
    );
  }

  return (
    <button
      type={type}
      style={isWhiteText ? { color: "#ffffff" } : undefined}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span style={isWhiteText ? { color: "#ffffff" } : undefined}>{children}</span>
      {icon && <ArrowRight className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />}
    </button>
  );
}
