import { getMessages, getTranslations } from "@/i18n";
import { locales } from "@/i18n/config";

import AboutUI from "@/components/sections/AboutUI";
import AnswersUI from "@/components/sections/AnswersUI";
import BestUI from "@/components/sections/BestUI";
import BlogsUI from "@/components/sections/BlogsUI";
import CategoryUI from "@/components/sections/CategoryUI";
import Features from "@/components/sections/Features";
import Herro from "@/components/sections/Herro";
import OpinionsUI from "@/components/sections/OpinionsUI";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = getTranslations(messages);
  return (
    <>
      <Herro
        locale={locale}
        messages={messages}
      />
      <Features
        locale={locale}
        messages={messages}
      />
      <AboutUI
        locale={locale}
        messages={messages}
        path="home"
      />
      <CategoryUI
        locale={locale}
        messages={messages}
        path="home"
      />
      <AnswersUI
        locale={locale}
        messages={messages}
        path="home"
      />
      <BestUI
        locale={locale}
        messages={messages}
        path="home"
      />
      <BlogsUI
        locale={locale}
        messages={messages}
        path="home"
      />
      <OpinionsUI
        locale={locale}
        messages={messages}
        path="home"
      />
    </>
  );
}
