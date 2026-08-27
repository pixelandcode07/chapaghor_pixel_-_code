import { ReactNode } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function TabletAccordion({
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
    <div className="overflow-hidden rounded-[9px] border border-[#6C7075] bg-[#101822]">
      <button
        type="button"
        onClick={onClick}
        className="flex min-h-[61px] w-full items-center justify-between px-5 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="w-6">{icon}</span>
          <span className="text-[16px]">{title}</span>
        </span>

        {open ? <FaMinus /> : <FaPlus />}
      </button>

      {open && (
        <div className="border-t border-[#4A4F55] px-5 pb-4 pt-3">
          {children}
        </div>
      )}
    </div>
  );
}