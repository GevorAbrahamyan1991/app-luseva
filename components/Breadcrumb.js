import { getTranslations } from "@/i18n";
import Link from "next/link";
import Title from "./Title";

export default function Breadcrumb({ messages, backgroundImage, urls = [] }) {
  const t = getTranslations(messages);

  const bgStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <section
      className="after:bg-theme-dark-gray/80 relative flex h-32 items-center justify-center after:absolute after:inset-0 after:z-10 sm:h-56"
      style={bgStyle}
    >
      <nav
        aria-label="Breadcrumb"
        className="relative z-20 p-4"
      >
        <ol className="m-0 flex list-none flex-wrap items-center p-0">
          {/* Home Link */}
          <li className="flex items-center">
            <Link
              href="/"
              className="group relative"
            >
              <Title theme="text-theme-lightest-rose hover:text-theme-rose-pink transition-all duration-300">
                {t("menu.home")}
                <span className="bg-theme-rose-pink absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
              </Title>
            </Link>
          </li>

          {urls.map((item, index) => {
            const isLast = index === urls.length - 1;
            return (
              <li
                key={index}
                className="flex items-center"
              >
                {/* Separator - Hidden from screen readers */}
                <span
                  className="text-theme-pinkish-white mx-2 text-2xl select-none"
                  aria-hidden="true"
                >
                  /
                </span>

                {isLast ? (
                  <Title theme="text-theme-pinkish-white">
                    <span aria-current="page">{item.label}</span>
                  </Title>
                ) : (
                  <Link
                    href={item.url}
                    className="group relative"
                  >
                    <Title theme="text-theme-lightest-rose hover:text-theme-rose-pink transition-all duration-300">
                      {item.label}
                      <span className="bg-theme-rose-pink absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
                    </Title>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </section>
  );
}
