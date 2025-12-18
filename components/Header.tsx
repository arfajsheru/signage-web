"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="
  sticky top-0 z-30
  w-full bg-background
  
"
      >
        <div className="px-16 py-4 flex items-center justify-between">
          {/* Brand */}
          <h1 className="text-xl font-bold tracking-wide text-foreground font-title">
            Sheru Group
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-md">
              {navItems.map(({ label, href }) => {
                const isActive = pathname === href;

                return (
                  <li key={label} className="relative">
                    <Link
                      href={href}
                      className={`
                        px-1 py-1 font-medium transition-colors
                        ${
                          isActive
                            ? "text-primary"
                            : "text-foreground/70 hover:text-foreground"
                        }
                      `}
                    >
                      {label}
                    </Link>

                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded-full" />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}

          {/* Desktop CTA */}
          <div className="hidden md:block ml-6">
            <Link
              href="/contact"
              className="
      inline-flex items-center justify-center
      px-4 py-2 text-md font-medium 
      rounded-md
      bg-primary text-primary-foreground
      transition-opacity hover:opacity-90
    "
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-72 bg-background z-50 border-r border-border"
            >
              <div className="px-6 py-6 flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-lg font-bold text-foreground font-title">
                    Sheru Group
                  </h2>

                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="text-foreground"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Drawer Navigation */}
                <ul className="flex flex-col gap-6 font-heading text-md">
                  {navItems.map(({ label, href }) => {
                    const isActive = pathname === href;

                    return (
                      <li key={label}>
                        <Link
                          href={href}
                          onClick={() => setOpen(false)}
                          className={`
                            block font-medium transition-colors
                            ${
                              isActive
                                ? "text-primary"
                                : "text-foreground/80 hover:text-foreground"
                            }
                          `}
                        >
                          {label}
                        </Link>

                        {isActive && (
                          <span className="block mt-1 h-0.5 w-8 bg-primary rounded-full" />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
