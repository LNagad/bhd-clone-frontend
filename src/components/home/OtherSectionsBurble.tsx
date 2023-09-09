import Link from "next/link";

interface Props {
  children: React.ReactNode;
  text: string;
  link?: string;
}

const OtherSectionsBurble = ({ children, text, link }: Props) => {
  return (
    <Link
      href={link || "#"}
      className="canales__container__item w-[100%] xs:w-[30%] flex flex-col items-center"
    >
      <div
        className="canales__container__item__icon h-[70px] w-[70px] rounded-full bg-green-600 
        bg-opacity-20 flex justify-center items-center"
      >
        {children}
      </div>
      <p className="text-xs text-center">{text}</p>
    </Link>
  );
};

export default OtherSectionsBurble;
