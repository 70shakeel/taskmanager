"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800"
            >
              TaskManager
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                About
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-soft-blue"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">
                Open main menu
              </span>
              {isOpen ? (
                <XMarkIcon
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              ) : (
                <Bars3Icon
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
