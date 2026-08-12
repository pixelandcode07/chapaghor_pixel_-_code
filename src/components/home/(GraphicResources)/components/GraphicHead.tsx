import { BadgeCheck, PencilLine, Printer, CloudDownload } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: 'Premium',
    subtitle: 'Quality',
  },
  {
    icon: PencilLine,
    title: 'Easy To',
    subtitle: 'Edit',
  },
  {
    icon: Printer,
    title: 'Print',
    subtitle: 'Ready',
  },
  {
    icon: CloudDownload,
    title: 'Premium',
    subtitle: 'Downloads',
  },
];

export default function GraphicResources() {
  return (
    <section>
      <div
        className="
flex justify-between gap-[80px]
        ">
        {/* Left Content */}
        <div className="min-w-0 flex-1">
          <p
            className="
              m-0 mb-[3px]
              font-[Arial,Helvetica,sans-serif]
              text-[14px]
              leading-[17px]
              font-normal
              text-[#777777]

              max-[767px]:text-[13px]
              max-[767px]:leading-[16px]

              max-[390px]:text-[12px]
            ">
            PROFESSIONAL QUALITY
          </p>

          <h2
            className="
              m-0
              font-[Arial,Helvetica,sans-serif]
              text-[36px]
              leading-[38px]
              font-bold
              tracking-[-1.1px]
              text-[#080808]

              max-[1100px]:text-[32px]

              max-[900px]:text-[29px]
              max-[900px]:leading-[32px]

              max-[767px]:text-[clamp(27px,8vw,34px)]
              max-[767px]:leading-[34px]
              max-[767px]:tracking-[-0.8px]

              max-[390px]:text-[27px]
              max-[390px]:leading-[30px]
            ">
            GRAPHIC{' '}
            <span className="font-normal text-[#ff6733]">RESOURCES</span>
          </h2>

          <p
            className="
              m-0 mt-[5px]
              font-[Arial,Helvetica,sans-serif]
              text-[14px]
              leading-[15px]
              font-normal
              text-[#8a8a8a]

              max-[900px]:text-[12px]

              max-[767px]:mt-[7px]
              max-[767px]:text-[13px]
              max-[767px]:leading-[17px]

              max-[390px]:text-[12px]
              max-[390px]:leading-[15px]
            ">
            High quality editable templates and mockups to
            <br className="max-[767px]:hidden" />
            make your brand look professional.
          </p>
        </div>

        {/* Right Features */}
        <div
          className="
            flex
            w-[583px]
            min-h-[78px]
            shrink-0
            items-center
            justify-between
            rounded-[13px]
            bg-white
            px-[20px]
            py-[20px]

            shadow-[0_5px_10px_rgba(35,54,73,0.06),0_2px_4px_rgba(35,54,73,0.04)]

            max-[1100px]:w-[540px]

            max-[900px]:w-[500px]

            max-[767px]:grid
            max-[767px]:w-full
            max-[767px]:min-h-0
            max-[767px]:grid-cols-2
            max-[767px]:gap-x-[8px]
            max-[767px]:gap-y-[14px]
            max-[767px]:rounded-[12px]
            max-[767px]:px-[12px]
            max-[767px]:py-[14px]

            max-[390px]:gap-x-[5px]
            max-[390px]:gap-y-[12px]
            max-[390px]:px-[10px]
            max-[390px]:py-[12px]
          ">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                className="
                  flex
                  min-w-[105px]
                  items-center
                  gap-[10px]

                  max-[900px]:min-w-0
                  max-[900px]:gap-[7px]

                  max-[767px]:gap-[8px]

                  max-[390px]:gap-[7px]
                "
                key={index}>
                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[7px]
                    bg-[#fff0e9]
                    text-[#ff6230]

                    max-[900px]:h-[38px]
                    max-[900px]:w-[38px]

                    max-[767px]:h-[40px]
                    max-[767px]:w-[40px]

                    max-[390px]:h-[36px]
                    max-[390px]:w-[36px]
                  ">
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="
                      max-[390px]:h-[19px]
                      max-[390px]:w-[19px]
                    "
                  />
                </div>

                <div
                  className="
                    flex
                    flex-col
                    font-[Arial,Helvetica,sans-serif]
                    text-[12px]
                    leading-[17px]
                    font-normal
                    text-[#111111]

                    max-[767px]:text-[11px]
                    max-[767px]:leading-[15px]

                    max-[390px]:text-[10px]
                    max-[390px]:leading-[14px]
                  ">
                  <span className="whitespace-nowrap">{feature.title}</span>

                  <span className="whitespace-nowrap">{feature.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
