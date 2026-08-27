import { ReactNode } from "react";

export default function TabletSocialButton({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <a
      href="#"
      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#3D4651]"
    >
      {children}
    </a>
  );
}