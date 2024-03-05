"use client";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "~/components/ui/dropdown-menu";

interface NavProps {
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    url: string;
    sublinks?: {
      title: string;
      url: string;
      label?: string;
    }[];
    variant: "default" | "ghost" | "select";
  }[];
}

export function Nav({ links }: NavProps) {
  const pathname = usePathname();
  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          link.sublinks ? (
            link.sublinks.map((_sublink, index) => (
              // Error: `MenuSubTrigger` must be used within `MenuContent`
              <Link
                key={index}
                href={_sublink.url}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "justify-start",
                  }),
                  {
                    "rounded-l-none border-l-4 border-l-teal-500 text-right text-teal-500 hover:bg-teal-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50":
                      _sublink.url === pathname,
                  },
                )}
              >
                <link.icon className="mr-4 h-6 w-6" />
                {_sublink.title}
                {_sublink.label && (
                  <span
                    className={cn(
                      "ml-auto",
                      link.variant === "default" &&
                        "text-background dark:text-white",
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </Link>
            ))
          ) : (
            <Link
              key={index}
              href={link.url}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "justify-start",
                }),
                {
                  "rounded-l-none border-l-4 border-l-teal-500 text-right text-teal-500 hover:bg-teal-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50":
                    link.url === pathname,
                },
              )}
            >
              <link.icon className="mr-4 h-6 w-6" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white",
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          ),
        )}
        ,
      </nav>
    </div>
  );
}
