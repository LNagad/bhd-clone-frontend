import Link from "next/link";

interface Props {
  children: React.ReactNode;
  text: string;
  link?: string;
}

const OtherSectionsBurble = ({ children, text, link }: Props) => {
  
  const wrappedText = text.replace(" ", " <br> ");

  return (
    <Link
      href={link || "#"}
      className="canales__container__item w-[100%] xs:w-[30%] sm:w-auto flex flex-col items-center gap-y-4"
    >
      <div
        className="canales__container__item__icon h-[70px] w-[70px] sm:h-[90px] w-[90px] rounded-full bg-green-600 
        bg-opacity-20 flex justify-center items-center"
      >
        {children}
      </div>
      <p
        className="text-xs sm:text-sm opacity-90 break-all text-center whitespace-nowrap sm:whitespace-normal"
        dangerouslySetInnerHTML={{ __html: wrappedText }}
      />
    </Link>
  );
};

export default OtherSectionsBurble;
