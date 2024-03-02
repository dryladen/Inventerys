"use client";
import { cn } from "~/lib/utils";
import { Nav } from "./nav";
import {
  Archive,
  FilePenLineIcon,
  LayoutDashboard,
  List,
  ListChecks,
  ScanBarcode,
  Trash2,
  Users,
  Warehouse,
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-2 py-2">
          <div className="space-y-2">
            <Nav
              links={[
                {
                  title: "Dashboard",
                  icon: LayoutDashboard,
                  variant: "select",
                },
                {
                  title: "Warehouse",
                  icon: Warehouse,
                  variant: "ghost",
                },
                {
                  title: "Product",
                  icon: List,
                  variant: "ghost",
                },
                {
                  title: "Inventory List",
                  icon: ListChecks,
                  variant: "ghost",
                },
                {
                  title: "Stock Opname",
                  icon: ScanBarcode,
                  variant: "ghost",
                },
                {
                  title: "Edit Warehouse",
                  icon: FilePenLineIcon,
                  variant: "ghost",
                },
                {
                  title: "Manage Member",
                  icon: Users,
                  variant: "ghost"
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
