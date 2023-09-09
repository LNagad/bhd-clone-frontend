import { SwiperFullScreen } from "@/ui";

export default function Home() {
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
        <div className="canales__container">
          <div className="canales__container__item"></div>
        </div>
      </section>
    </main>
  );
}
