import { PiCheck } from "react-icons/pi";
import Container from "../Container";
import Title from "../Title";
import { data } from "@/data/remove/why";
import Description from "../Description";

export default async function Features({ locale, messages }) {
  console.log("Data", data);
  return (
    <Container boxTheme="py-12 bg-theme-blush-pink">
      <Title theme="text-center bg-theme-dark-gray py-4 rounded-lg">
        {messages.menu.features}
      </Title>
      <div className="mt-12 grid grid-cols-3 gap-4">
        {data.map((item, index) => {
          return (
            <div key={index} className="bg-theme-light-gray p-2 rounded-lg">
              <div className="flex items-center gap-4">
                <div>
                  <PiCheck size={30} />
                </div>
                <div>
                  <Title>{item.title}</Title>
                </div>
              </div>
              <div>
                <Description>{item.description}</Description>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
