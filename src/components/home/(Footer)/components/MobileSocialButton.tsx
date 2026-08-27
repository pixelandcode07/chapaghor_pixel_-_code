import { ReactNode } from "react";

export default function MobileSocialButton({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <a
      href="#"
      className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#3D4651]"
    >
      {children}
    </a>
  );
}