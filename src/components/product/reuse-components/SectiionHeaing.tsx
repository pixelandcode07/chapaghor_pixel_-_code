type SectionHeadingProps = {
  title: string;
  viewAllText?: string;
  onViewAll?: () => void;
};

export default function SectionHeading({
  title,
  viewAllText = 'View All',
  onViewAll,
}: SectionHeadingProps) {
  return (
    <div className="w-full">
      {/* Heading Row */}
      <div className="flex items-center justify-between gap-4">
        {/* Left Heading */}
        <h2 className="font-light text-[24px] leading-[100%] md:text-[30px]">
          {title}
        </h2>

        {/* Right Button */}
        <button
          onClick={onViewAll}
          className="
          font-light text-[20px] leading-[100%] md:text-[25px]
          text-[#FD7034]
    
          ">
          {viewAllText}
        </button>
      </div>

      {/* Bottom Border */}
      <div className="mt-3 w-full border-b-[1.36px] border-[#0000001A]" />
    </div>
  );
}
