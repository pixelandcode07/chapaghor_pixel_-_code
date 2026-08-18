import { FaArrowRight } from "react-icons/fa";

interface ActionButtonProps {
  title: string;
  cardWidth?: string;
  buttonBg?: string;
  titleColor?: string;
  arrowBg?: string;
  arrowColor?: string;
  className?: string;
}

export default function ActionButton({
  title,
  cardWidth = "",
  buttonBg = "bg-[#FF4900]",
  titleColor = "text-white",
  arrowBg = "bg-white",
  arrowColor = "text-black",
  className = "",
}: ActionButtonProps) {
  return (
    <div className={`flex shrink-0 items-center overflow-hidden rounded-[6px] rounded-br-[12px] shadow-sm md:rounded-[7px] md:rounded-br-[14px] lg:rounded-[8px] lg:rounded-br-[16px] xl:rounded-[8px] xl:rounded-br-[17px] ${cardWidth} ${buttonBg} ${className}`}>
      <span className={`whitespace-nowrap px-2.5 text-[10px] font-medium md:px-4 md:text-[12px] lg:px-5 xl:px-6 xl:text-[14px] 1xl:text-[16px] 3xl:text-[20px] ${titleColor}`}>
        {title}
      </span>

      <button className={`ml-auto mr-1.5 flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[3px] rounded-br-[9px] md:mr-2 md:h-[44px] md:w-[44px] md:rounded-[4px] md:rounded-br-[11px] lg:h-[52px] lg:w-[52px] lg:rounded-[4px] lg:rounded-br-[13px] xl:h-[64px] xl:w-[64px] xl:rounded-[4px] xl:rounded-br-[13px] xl:px-5 3xl:h-[72px] 3xl:w-[72px] ${arrowBg} ${arrowColor}`}>
        <FaArrowRight className="size-3.5 md:size-4 lg:size-4.5 xl:size-5 3xl:size-6" />
      </button>
    </div>
  );
}