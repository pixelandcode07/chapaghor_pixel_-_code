export default function FeatureCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center px-1 py-2 xl:flex-row xl:items-center xl:justify-start xl:px-0 xl:py-2">
      <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-md bg-[#FFECE5] text-[#ff7043] md:h-[53px] md:w-[53px] xl:h-10 xl:w-10
       1xl:h-[46px] 1xl:w-[46px] 3xl:h-[62px] 3xl:w-[62px]">
        {icon}
      </div>

      <div className="mt-1 text-center xl:ml-3 xl:mt-0 xl:text-left px-4 md:px-12 xl:px-0">
        <p className="text-[8px] font-normal text-black md:text-[15px] xl:text-[12px] 1xl:text-[14px] 3xl:text-[18px] tracking-[0.5px]">
          {title}
        </p>
      </div>
    </div>
  );
}