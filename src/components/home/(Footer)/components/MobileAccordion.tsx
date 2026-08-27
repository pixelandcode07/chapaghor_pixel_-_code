import { ReactNode } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MobileAccordion({
  title,
  icon,
  open,
  onClick,
  children,
}: {
  title: string;
  icon: ReactNode;
  open: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[8px] border border-[#30363D] bg-[#121B25]">
      <button
        type="button"
        onClick={onClick}
        className="flex min-h-[41px] w-full items-center justify-between px-3.5 text-left"
      >
        <span className="flex items-center gap-2.5">
          <span className="w-[16px]">{icon}</span>
          <span className="text-[12px]">{title}</span>
        </span>

        {open ? <FaMinus /> : <FaPlus />}
      </button>

      {open && (
        <div className="border-t border-[#30363D] px-3.5 pb-3 pt-2.5">
          {children}
        </div>
      )}
    </div>
  );
}