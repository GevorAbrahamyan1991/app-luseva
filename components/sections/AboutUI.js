import Image from "next/image";
import Container from "../Container";
import Title from "../Title";
import Description from "../Description";
import Link from "next/link";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiWhatsappLogo,
} from "react-icons/pi";

export default function AboutUI({ path, locale, messages }) {
  return (
    <Container boxTheme="py-12 bg-theme-rose-pink">
      <Title theme="text-center bg-theme-dark-gray py-4 rounded-lg">
        {messages.menu.about}
      </Title>
      {path === "home" && (
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-fit">
            <Image
              src="/remove/about.png"
              width={500}
              height={500}
              alt="Herro"
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-4">
            <Description>
              Մենք հանդիսանում ենք բացառապես տորթերի պատրաստման և դիզայնի
              մասնագիտացված հարթակ Հայաստանում։ Մեր պրոֆեսիոնալ մոտեցումը և
              ստեղծագործ թիմը թույլ են տալիս ապահովել տոնական տորթերի
              անհավանական տեսականի՝ օգտագործելով միայն թարմ և բարձրակարգ
              բաղադրիչներ։ Մենք առաջարկում ենք գեղագիտական և համային բացառիկ
              լուծումներ Ձեր կյանքի կարևորագույն իրադարձությունների համար՝ սկսած
              նրբագեղ հարսանեկան ձևավորումներից մինչև վառ մանկական
              երևակայություններ։ LusEva Cakes-ը երաշխավորում է որակ,
              ճշգրտություն և անմոռանալի քաղցրություն՝ բավարարելով մեր
              հաճախորդների ամենաբարձր և նրբաճաշակ պահանջները։
            </Description>
            <div>
              <Title>{messages.buttons.find_us}</Title>
              <div className="flex gap-4 mt-4">
                <Link
                  href=""
                  className="bg-theme-blush-pink hover:bg-theme-dark-gray p-4 rounded-lg transition-all duration-300"
                >
                  <PiInstagramLogo className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white hover:text-theme-rose-pink transition-all duration-300" />
                </Link>
                <Link
                  href=""
                  className="bg-theme-blush-pink hover:bg-theme-dark-gray p-4 rounded-lg transition-all duration-300"
                >
                  <PiFacebookLogo className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white hover:text-theme-rose-pink transition-all duration-300" />
                </Link>

                <Link
                  href=""
                  className="bg-theme-blush-pink hover:bg-theme-dark-gray p-4 rounded-lg transition-all duration-300"
                >
                  <PiWhatsappLogo className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white hover:text-theme-rose-pink transition-all duration-300" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <Link
                href=""
                className="bg-theme-blush-pink hover:bg-theme-dark-gray transition-all duration-300 rounded-lg py-2 text-center"
              >
                <Title>{messages.buttons.call_us_now}</Title>
              </Link>
              <Link
                href=""
                className="bg-theme-blush-pink hover:bg-theme-dark-gray transition-all duration-300 rounded-lg py-2 text-center"
              >
                <Title>{messages.buttons.email_us_now}</Title>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
