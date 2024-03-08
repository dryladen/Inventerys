"use client";
import { cn } from "~/lib/utils";
import { Nav } from "./nav";
import {
  ArrowRightLeft,
  ChevronRight,
  Component,
  Database,
  LayoutDashboard,
  List,
  ListChecks,
  ScanBarcode,
  Users,
  Warehouse,
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="p-y-4 space-y-4">
        <div className="px-2 py-2">
          <div className="space-y-2">
            <Nav
              links={[
                {
                  title: "Dashboard",
                  icon: LayoutDashboard,
                  variant: "select",
                  url: "/dashboard",
                },
                {
                  title: "Warehouse",
                  icon: Warehouse,
                  variant: "ghost",
                  url: "/warehouse",
                },
                {
                  title: "Master Data",
                  icon: Database,
                  variant: "ghost",
                  url: "",
                  endIcon: ChevronRight,
                  sublinks: [
                    {
                      title: "Product",
                      url: "/product",
                      icon: List,
                    },
                    {
                      title: "Category",
                      url: "/category",
                      icon: Component,
                    },
                  ],
                },

                {
                  title: "Stock Opname",
                  icon: ScanBarcode,
                  variant: "ghost",
                  url: "/opname",
                },
                {
                  title: "Manage Member",
                  icon: Users,
                  variant: "ghost",
                  url: "/management",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
