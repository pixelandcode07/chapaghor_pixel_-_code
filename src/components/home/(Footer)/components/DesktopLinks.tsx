import { ArrowIcon } from "@/components/custom/icons";

export default function DesktopLinks({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="border-r border-white/15 xl:pl-[15px] 3xl:px-[32px] py-[28px]">
      <h4 className="text-[20px] font-medium">
        {title}
      </h4>

      <ul className="mt-[26px] flex flex-col xl:gap-[10px] 3xl:gap-[12px]">
        {links.map((link) => (
          <li
            key={link}
            className="flex items-center xl:gap-[4px] 3xl:gap-[8px]"
          >
            <ArrowIcon />

            <a
              href="#"
              className="text-[15px] font-medium text-[#A19A9A] transition-colors hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}