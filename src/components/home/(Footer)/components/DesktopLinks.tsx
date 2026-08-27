import { ArrowIcon } from "@/components/custom/icons";

export default function DesktopLinks({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="border-r border-white/15 px-[32px] py-[28px]">
      <h4 className="text-[20px] font-medium">
        {title}
      </h4>

      <ul className="mt-[26px] flex flex-col gap-[12px]">
        {links.map((link) => (
          <li
            key={link}
            className="flex items-center gap-[8px]"
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