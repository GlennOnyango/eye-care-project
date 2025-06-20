import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const LinkItem = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/who-we-are",
    label: "Who We Are",
  },
  {
    href: "/support-us",
    label: "Support Us",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-layout shadow-sm">
      <div className="md:hidden flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-black">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-primary w-48">
            <DropdownMenuSeparator className="text-white" />

            {LinkItem.map((item) => (
              <DropdownMenuItem key={item.href}>
                <Link href={item.href}>
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Logo on the left */}
      <div className="font-bold text-xl text-primary">LOGO</div>
      {/* Navigation in the center */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="flex gap-8">
          {LinkItem.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link href={item.href} className="text-black">
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {/* Donate button on the right */}
      <Link href="/donate">
        <button className="bg-primary text-white px-6 py-2 rounded-sm font-semibold shadow hover:bg-primary/90 transition-colors">
          Donate
        </button>
      </Link>
    </nav>
  );
}
