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
  buttonBg="bg-[linear-gradient(90deg,#FF4900_0%,#FF6501_100%)]",
  titleColor = "text-white",
  arrowBg = "bg-white",
  arrowColor="text-white",
  className = "",
}: ActionButtonProps) {
  return (
   <div
  className={`flex shrink-0 items-center overflow-hidden rounded-[2px] rounded-br-[5px]
    md:rounded-[5px] md:rounded-br-[11px]
    lg:rounded-[8px] lg:rounded-br-[16px]
    xl:rounded-[8px] xl:rounded-br-[17px]
    3xl:py-[10px]
    ${cardWidth} ${buttonBg} ${className}`}
>
  <span
    className={`whitespace-nowrap text-[6px] font-medium
      md:pl-4 md:text-[16px]
      lg:pl-5
      xl:pl-6 xl:text-[14px]
      1xl:text-[18px]
      3xl:pl-[39px] 3xl:text-[20px]
      ${titleColor}`}
  >
    {title}
  </span>

  <button
    className={`flex shrink-0 items-center justify-center
      rounded-[1px] rounded-br-[4px]
      mr-[4px]
      ml-[10px]
      w-[16px] h-[15px]
      md:ml-auto md:mr-2 md:h-[41px] md:w-[41px]
      md:rounded-[3px] md:rounded-br-[9px]
      lg:h-[43px] lg:w-[43px]
      lg:rounded-[4px] lg:rounded-br-[11px]
      xl:ml-auto xl:mr-3.75 xl:h-[41px] xl:w-[41px]
      xl:rounded-[4px] xl:rounded-br-[13px]
      1xl:h-[46px] 1xl:w-[46px]
      3xl:h-[64px] 3xl:w-[64px]
      ${iconCardWidth} ${arrowBg} ${arrowColor}`}
  >
    <GorguseBtnIcon className="w-4 h-1.25 md:w-4 md:h-2.25 lg:w-5 lg:h-3.25 xl:w-4 xl:h-2.25 3xl:w-5 3xl:h-5" />
  </button>
</div>
  );
}