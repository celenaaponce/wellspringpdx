import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  LifebuoyIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Our Services",
    icon: LifebuoyIcon,
    href: "#services",
  },
  {
    name: "Take Action",
    icon: ChatBubbleLeftRightIcon,
    href: "#help",
  },
  {
    name: "About Us",
    icon: UserGroupIcon,
    href: "#about",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLAnchorElement;
    if (target?.href?.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(target.getAttribute("href")!);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        onClick={handleClick}
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  // Function to scroll to the top smoothly
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          onClick={(e) =>
            scrollToTop(e as React.MouseEvent<HTMLAnchorElement, MouseEvent>)
          }
          color="blue-gray"
          className="text-lg font-bold cursor-pointer"
        >
          WellSpring Health
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex"></div>
        <IconButton
          {...({
            variant: "text",
            color: "gray",
            onClick: handleOpen,
            className: "ml-auto inline-block lg:hidden",
          } as any)}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}
