import { LucideIcon } from "lucide-react";

interface DashSummaryProps {
  summary: {
    sum: string;
    label: string;
    icon: LucideIcon;
    color?: string;
  }[];
}

export function DashSummary({ summary }: DashSummaryProps) {
  return (
    <div className="flex gap-3 lg:gap-5">
      {summary.map((data, index) => (
        <div
          key={index}
          className=" flex w-[277px] items-center space-x-4 rounded-2xl bg-white p-4"
        >
          <div className="rounded-full bg-slate-200 p-3 text-gray-600">
            {<data.icon size={28} color={data.color} />}
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-gray-500">{data.sum}</h1>
            <p className="text-[12px] text-gray-500">{data.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
