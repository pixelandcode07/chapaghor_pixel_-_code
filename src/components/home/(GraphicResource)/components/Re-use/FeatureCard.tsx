export default function FeatureCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
//    <div className="rounded-xl bg-white px-3 py-2">
     <div className="flex w-full items-center px-3 py-2">
      <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-md bg-[#fff0e9] text-[#ff7043] md:h-[53px] md:w-[53px] xl:h-10 xl:w-10 1xl:h-[46px] 1xl:w-[46px] 3xl:h-[62px] 3xl:w-[62px]">
        {icon}
      </div>

      <div className="ml-2 leading-tight">
        <p className="text-[8px] font-normal text-gray-500 md:text-[15px] xl:text-[12px] 1xl:text-[14px] 3xl:text-[18px]">
          {title}
        </p>
      </div>
    </div>
  );
}