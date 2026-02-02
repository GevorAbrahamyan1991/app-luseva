import Image from "next/image";
import Container from "../Container";
import Title from "../Title";
import Description from "../Description";
import Link from "next/link";

export default function Herro({ locale, messages }) {
  return (
    <Container boxTheme="xl:h-[calc(100vh-76px)] max-xl:py-12 bg-theme-pale-pink py-8">
      <div className="flex max-xl:flex-col justify-between items-center gap-8">
        <div className="w-full xl:w-1/2 xl:h-[calc(100vh-180px)] flex flex-col max-xl:gap-y-8 justify-between">
          <div className="bg-theme-blush-pink rounded-lg w-full px-2 py-4">
            <Title as={"h1"} theme="text-center">
              Արվեստ, որը կարելի է համտեսել
            </Title>
          </div>
          <div>
            <Description theme="text-black text-xl">
              <ul>
                <li>Հեղինակային դիզայն</li>
                <li>Հարսանեկան տորթեր</li>
                <li>Մանկական և տոնական</li>
                <li>Կորպորատիվ պատվերներ</li>
                <li>Անհատական մոտեցում</li>
                <li>Անվտանգ առաքում</li>
              </ul>
              <div className="text-base mt-8">
                Մենք հանդիսանում ենք բացառապես տորթերի պատրաստման և դիզայնի
                մասնագիտացված հարթակ Հայաստանում։ Մեր պրոֆեսիոնալ մոտեցումը և
                ստեղծագործ թիմը թույլ են տալիս ապահովել տոնական տորթերի
                անհավանական տեսականի՝ օգտագործելով միայն թարմ և բարձրակարգ
                բաղադրիչներ։ Մենք առաջարկում ենք գեղագիտական և համային բացառիկ
                լուծումներ Ձեր կյանքի կարևորագույն իրադարձությունների համար՝
                սկսած նրբագեղ հարսանեկան ձևավորումներից մինչև վառ մանկական
                երևակայություններ։ LusEva Cakes-ը երաշխավորում է որակ,
                ճշգրտություն և անմոռանալի քաղցրություն՝ բավարարելով մեր
                հաճախորդների ամենաբարձր և նրբաճաշակ պահանջները։
              </div>
            </Description>
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
        <div className="w-full xl:w-1/2 xl:h-[calc(100vh-180px)] rounded-lg overflow-hidden">
          <Image
            src="/remove/herro.png"
            width={500}
            height={500}
            alt="Herro"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
