import Link from "next/link.js";

const DesktopMenu = ({ navigation }) => {
  return (
    <div
      className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-center lg:gap-x-12"
      aria-label="menu-list"
    >
      {navigation.map((item) => (
        <Link
          href={item.href}
          key={`desktop-menu-item-${item.name}`}
          className="text-gray-400 hover:text-gray-100 font-semibold no-underline transition-all"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenu;
