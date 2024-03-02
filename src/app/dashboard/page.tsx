import {
  FileInput,
  FileOutput,
  LayoutDashboard,
  LayoutList,
  LogIn,
  LogOut,
  Settings,
  StretchHorizontal,
  Warehouse,
  Wrench,
} from "lucide-react";
import { DashSummary } from "./components/dash-summary";
export default function Dashboard() {
  return (
    <>
      <DashSummary
        summary={[
          { sum: "1295", label: "Total Item", icon: LayoutList },
          {
            sum: "3",
            label: "Warehouse",
            icon: Warehouse,
          },{
            sum: "4",
            label: "Item Checked In",
            icon: LogIn,
            color: "#1C2CBC"
          },{
            sum : "4",
            label: "Item Checked Out",
            icon: LogOut,
            color: "#1CBC9A"
          },{
            sum: "46",
            label: "On Service",
            icon: Wrench,
            color: "#BC1C26"
          }
        ]}
      />
      
    </>
  );
}
