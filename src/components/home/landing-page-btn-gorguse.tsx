import { GorguseBtnIcon } from "../custom/icons";

interface ActionButtonProps {
  title: string;
  cardWidth?: string;
  iconCardWidth?: string;
  buttonBg?: string;
  titleColor?: string;
  arrowBg?: string;
  arrowColor?: string;
  className?: string;
}

export default function ActionButton({
  title,
  cardWidth = "",
  iconCardWidth = "",
  buttonBg = "bg-[#FF4900]",
  titleColor = "text-white",
  arrowBg = "bg-white",
  arrowColor = "text-black",
  className = "",
}: ActionButtonProps) {
  return (
    <div className={`flex shrink-0 items-center overflow-hidden rounded-[2px] rounded-br-[5px] shadow-sm md:rounded-[5px] md:rounded-br-[11px] lg:rounded-[8px] lg:rounded-br-[16px] xl:rounded-[8px] xl:rounded-br-[17px] ${cardWidth} ${buttonBg} ${className}`}>
      <span className={`whitespace-nowrap pl-2.5 text-[8px] font-medium md:pl-4 md:text-[16px] lg:pl-5 xl:pl-6 xl:text-[14px] 1xl:text-[18px] 3xl:text-[25px] ${titleColor}`}>
        {title}
      </span>

      <button className={`ml-auto mr-1 flex  shrink-0 items-center justify-center rounded-[1px] rounded-br-[4px] md:mr-2  md:rounded-[3px] md:rounded-br-[9px] lg:rounded-[4px] lg:rounded-br-[11px] xl:rounded-[4px] xl:rounded-br-[13px] xl:px-0  ${iconCardWidth} ${arrowBg} ${arrowColor}`}>
        <GorguseBtnIcon className="w-4 h-1.25 md:w-4 md:h-2.25 lg:w-5 lg:h-3.25 xl:w-4 xl:h-2.25 3xl:w-5 3xl:h-5" />
        
      </button>
    </div>
  );
}