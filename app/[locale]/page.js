import { getMessages, getTranslations } from "@/i18n";
import { locales } from "@/i18n/config";

import Herro from "@/components/sections/Herro";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = getTranslations(messages);
  return (
    <>
      <Herro locale={locale} messages={messages} />
    </>
  );
}
