export default function MobileLinks({
  links,
}: {
  links: string[];
}) {
  return (
    <ul className="flex flex-col gap-2 text-[12px] text-[#C4C4C4]">
      {links.map((link) => (
        <li key={link}>
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  );
}