"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Package,
  FolderKanban,
  Info,
  ShoppingBag,
  Phone,
  SendHorizonal,
} from "lucide-react";
import { ButtonGradienat } from "./ui/buttons";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Products", href: "/products", icon: Package },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "About", href: "/about", icon: Info },
  { label: "Shop", href: "/shop", icon: ShoppingBag },
  { label: "Contact", href: "/contact", icon: Phone },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="
          fixed left-0 top-4 right-0 w-[90%] mx-auto z-50
        transparent
         border rounded-full
      
         backdrop-blur-xs
        "
      >
        <div className="px-4 md:px-16 py-4 md:py-2  flex items-center justify-between">
          {/* BRAND */}
          <h1 className="text-xl font-bold tracking-wide font-title text-foreground">
            Sheru Group
          </h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map(({ label, href }) => {
                const isActive = pathname === href;

                return (
                  <li key={label} className="relative">
                    <Link
                      href={href}
                      className={`
                        text-sm font-medium transition-all
                        ${
                          isActive
                            ? "text-primary"
                            : "text-foreground hover:opacity-80"
                        }
                      `}
                    >
                      {label}
                    </Link>

                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <ButtonGradienat
              text="Get Quotation"
              icon={<SendHorizonal size={16} />}
            />
          </div>

          {/* MOBILE MENU BUTTON */}
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
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 border z-40"
            />

            {/* DRAWER */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="
                fixed top-0 left-0 h-full w-72
                bg-background z-50
                border-r border-border
              "
            >
              <div className="p-6 flex flex-col h-full">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-lg font-bold font-title text-foreground">
                    Sheru Group
                  </h2>
                  <button onClick={() => setOpen(false)}>
                    <X className="text-foreground" size={22} />
                  </button>
                </div>

                {/* NAV */}
                <ul className="flex flex-col gap-4">
                  {navItems.map(({ label, href, icon: Icon }) => {
                    const isActive = pathname === href;

                    return (
                      <li key={label}>
                        <Link
                          href={href}
                          onClick={() => setOpen(false)}
                          className={`
                            flex items-center gap-3
                            px-3 py-2 rounded-md
                            text-sm font-medium
                            ${
                              isActive
                                ? "text-primary"
                                : "text-foreground opacity-90"
                            }
                          `}
                        >
                          <Icon size={18} />
                          <span>{label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-6">
                  <ButtonGradienat
                    text="Get Quotation"
                    icon={<SendHorizonal size={16} />}
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
