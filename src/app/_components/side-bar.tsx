"use client";
import { cn } from "~/lib/utils";
import { Nav } from "./nav";
import {
  ArrowRightLeft,
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
      <div className="space-y-4 p-y-4">
        <div className="px-2 py-2">
          <div className="space-y-2">
            <Nav
              links={[
                {
                  title: "Dashboard",
                  icon: LayoutDashboard,
                  variant: "select",
                  url: "/"
                },
                {
                  title: "Warehouse",
                  icon: Warehouse,
                  variant: "ghost",
                  url: "/warehouse"
                },
                {
                  title: "Product List",
                  icon: List,
                  variant: "ghost",
                  url: "/product"
                },
                {
                  title: "Inventory List",
                  icon: ListChecks,
                  variant: "ghost",
                  url: "/inventory"
                },
                {
                  title: "Master Data",
                  icon: ListChecks,
                  variant: "ghost",
                  url: "/inventory",
                  sublinks: [
                    {
                      title: "Product",
                      url: "/product"
                    },
                    {
                      title: "Inventory",
                      url: "/inventory"
                    }
                  ]
                },

                {
                  title: "Stock Opname",
                  icon: ScanBarcode,
                  variant: "ghost",
                  url: "/opname"
                },
                {
                  title: "Manage Member",
                  icon: Users,
                  variant: "ghost",
                  url: "/management"
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
