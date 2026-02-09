import { getMessages } from "@/i18n";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return {
    title: messages.metadata.titleContact,
    description: messages.metadata.descriptionContact,
  };
}

export default async function Page({ params }) {
  const { locale } = await params;

  const messages = await getMessages(locale);

  const PageClient = (await import("./page.client")).default;
  return (
    <PageClient
      locale={locale}
      messages={messages}
    />
  );
}
