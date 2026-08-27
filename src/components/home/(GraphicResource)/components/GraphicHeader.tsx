import Image from 'next/image';
import FeatureCard from './Re-use/FeatureCard';
import {
  DownloadCloudIcon,
  EditIcon,
  PremiumQltyIcon,
  PrintIcon,
} from '@/components/custom/icons';

export default function GraphicHeader() {
  return (
    <div className=" w-full xl:flex  justify-between gap-5 xl:gap-0">
      {/* Heading */}
      <div className="flex justify-between ">
        <div className="w-full md:w-[70%] xl:w-full space-y-0">
          <p className="text-[10px] md:text-[17px] xl:text-[15px] 1xl:text-[18px] 3xl:text-[23px] font-light uppercase tracking-[0.5px] text-[#757575] leading-none mb-3">
            Professional Quality
          </p>

          <h1 className="text-[19px] md:text-[38px] xl:text-[34px] 1xl:text-[39px] 3xl:text-[52px] font-medium leading-none mb-3 tracking-[0.5px] text-[#202020]">
            GRAPHIC <span className="text-[#FD7034]">RESOURCES</span>
          </h1>

          <p className="text-[10px] md:text-[16px] xl:text-[14px] 1xl:text-[16px] 3xl:text-[22px] font-light leading-none mb-3 text-[#757575] tracking-[0.5px]">
            High quality editable templates and mockups to <br />
            make your brand look professional.
          </p>
        </div>
        <div className="xl:hidden">
          <Image
            width={150}
            height={150}
            src="/graphic-resource/heading-image.png"
            alt="Card"
            className="object-contain"
          />
        </div>
      </div>

      {/* Feature Cards */}
      <div
        className="grid w-full xl:w-[45%] 1xl:w-[50%] grid-cols-4 overflow-hidden bg-white rounded-xl xl:px-6.5 1xl:px-7.5 mt-4 md:mt-4 lg:mt-8.5 xl:mt-0 md:h-36.5 xl:h-18.75 1xl:h-22 3xl:h-28.5
       shadow-[3.14px_4.19px_7.86px_0px_#0000000D]">
        <FeatureCard
          icon={
            <PremiumQltyIcon className="size-3.5 md:size-7 xl:size-5.5 1xl:size-6.5 3xl:size-8.5" />
          }
          title="Premium Quality"
        />

        <FeatureCard
          icon={
            <EditIcon className="size-3.5 md:size-7 xl:size-5.5 1xl:size-6.5 3xl:size-8.5" />
          }
          title="Easy To Edit"
        />

        <FeatureCard
          icon={
            <PrintIcon className="size-3.5 md:size-7 xl:size-5.5 1xl:size-6.5 3xl:size-8.5" />
          }
          title="Print Ready"
        />

        <FeatureCard
          icon={
            <DownloadCloudIcon className="size-3.5 md:size-7 xl:size-5.5 1xl:size-6.5 3xl:size-8.5" />
          }
          title="Premium Downloads"
        />
      </div>
    </div>
  );
}
