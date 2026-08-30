import Image from 'next/image';
import Link from 'next/link';

export default function SupportBanner() {
  return (
    <div
      className="
        w-full
        rounded-[12px]
        3xl:rounded-[16px]
        flex
        flex-col
        md:flex-row
        items-center
        // px-[20px]
        // md:px-[40px]
        // xl:px-[50px]
        // 3xl:px-[80px]
        // py-[30px]
        // md:py-[35px]
        // xl:py-[40px]
        // 3xl:py-[60px]
        relative
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/product-banners/support-folder.jpg')",
      }}
    >
      {/* 
        এই Wrapper-টিতে pl (padding-left) ব্যবহার করা হয়েছে 
        যাতে ব্যাকগ্রাউন্ড ইমেজের বাম পাশের ফোল্ডারটি পরিষ্কার দেখা যায় 
        এবং টেক্সট ফোল্ডারের ওপর উঠে না যায়।
      */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          w-full
          relative
          z-10
        //   pl-[90px]
        //   md:pl-[140px]
        //   xl:pl-[200px]
        //   3xl:pl-[350px]
        "
      >
        {/* Text Content */}
        <div className="text-left mb-[20px] md:mb-0">
          <p
            className="
              text-[#A0A4AB]
              text-[12px]
              md:text-[14px]
              3xl:text-[20px]
              font-medium
              mb-[4px]
              3xl:mb-[8px]
              leading-none
            "
          >
            Can't Find What You Need?
          </p>
          <h2
            className="
              text-[#FF6B00]
              text-[20px]
              md:text-[26px]
              xl:text-[32px]
              3xl:text-[46px]
              font-bold
              mb-[8px]
              3xl:mb-[12px]
              leading-none
            "
          >
            We're Here To Help You!
          </h2>
          <p
            className="
              text-[#EAEAEC]
              text-[12px]
              md:text-[14px]
              3xl:text-[20px]
              leading-[1.4]
              max-w-[250px]
              md:max-w-[350px]
              xl:max-w-[400px]
              3xl:max-w-[500px]
            "
          >
            Chat with our team on WhatsApp for custom templates and designs.
          </p>
        </div>

        {/* Button */}
        <div className="flex-shrink-0 self-start md:self-center">
          <Link
            href="#"
            className="
              bg-white
              text-[#1B2130]
              px-[20px]
              py-[10px]
              md:px-[24px]
              md:py-[12px]
              3xl:px-[36px]
              3xl:py-[18px]
              rounded-full
              flex
              items-center
              gap-[8px]
              3xl:gap-[12px]
              hover:bg-gray-100
              transition-colors
            "
          >
            {/* বাটনের ভেতরের হোয়াটসঅ্যাপ আইকনটি (svg) আগের মতোই থাকবে */}
            <Image
              src="/combo/whatsapp-icon.svg"
              alt="WhatsApp"
              width={24}
              height={24}
              className="
                w-[16px]
                h-[16px]
                3xl:w-[28px]
                3xl:h-[28px]
                object-contain
              "
            />
            <span
              className="
                text-[14px]
                md:text-[16px]
                3xl:text-[24px]
                font-semibold
                leading-none
              "
            >
              Chat On WhatsApp
            </span>
            <span className="text-[16px] 3xl:text-[24px] leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}