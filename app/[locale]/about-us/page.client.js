import AboutUI from "@/components/sections/AboutUI";

export default function PageClient({ messages, locale }) {
  return (
    <AboutUI
      path="about"
      locale={locale}
      messages={messages}
    />
  );
}
