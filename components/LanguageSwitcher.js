"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames } from "@/i18n/config";
import { useState } from "react";
import { PiGlobe } from "react-icons/pi";

export function LanguageSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (locale) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
    setIsOpen(false);

    // Set cookie for future requests
    document.cookie = `locale=${locale}; path=/; max-age=31536000`;
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded="true"
          aria-haspopup="true"
        >
          {/* {localeNames[currentLocale]}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg> */}
          <PiGlobe className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white hover:text-theme-rose-pink transition-all duration-300" />
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute right-0 z-20 mt-2 w-fit origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-theme-dark-gray"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => switchLocale(locale)}
                  className={`${
                    currentLocale === locale
                      ? "bg-theme-light-gray"
                      : "text-gray-700 dark:text-gray-300"
                  } block w-full px-4 py-2 text-left   cursor-pointer lang-based-font-link !text-sm`}
                  role="menuitem"
                >
                  {localeNames[locale]}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
