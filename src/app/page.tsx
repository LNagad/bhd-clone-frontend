import { OtherSectionsBurble, SearchInput } from "@/components";
import { Colors } from "@/enums";
import { SwiperFullScreen } from "@/ui";
import {
  faCalculator,
  faMoneyBill,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const canales = [
    {
      icon: <FontAwesomeIcon icon={faPhone} size="2x" color={Colors.primary} />,
      text: "Canales de Contacto",
      link: "/canales-contacto",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faMoneyBill} size="2x" color={Colors.primary} />
      ),
      text: "Canales de Remesas",
      link: "/canales-remesas",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faCalculator} size="2x" color={Colors.primary} />
      ),
      text: "Calculadora",
      link: "/calculadora",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col">
      <SwiperFullScreen />

      <section className="canales relative w-full h-56">
        <div
          className="canales__search__input w-full flex justify-center absolute 
          top-0 left-0 transform -translate-y-11 z-50"
        >
          <SearchInput />
        </div>
        <div className="canales__container mt-10 flex justify-center flex-wrap gap-x-16 gap-y-8">
          {canales.map((canal, index) => (
            <OtherSectionsBurble key={canal.link} text={canal.text}>
              {canal.icon}
            </OtherSectionsBurble>
          ))}
        </div>
      </section>

      <section className="recomendaciones"></section>
      <section className="noticias"></section>
    </main>
  );
}
