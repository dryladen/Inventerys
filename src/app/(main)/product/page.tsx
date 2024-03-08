import {
  ChevronRight,
} from "lucide-react";
import { Product, columns } from "./components/column";
import { DataTable } from "../../_components/data-table";
async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      no: 1,
      status: "Available",
      name: "m@example.com",
      warehouse: "Cas Warehouse",
      lastModified: "20/05/2023",
    },
    {
      id: "489e1d42",
      no: 2,
      status: "Unavailable",
      name: "example@gmail.com",
      warehouse: "Red Warehouse",
      lastModified: "19/05/2023",
    },
    {
      id: "489e1d43",
      no: 3,
      status: "Unavailable",
      name: "ciki@gmail.com",
      warehouse: "Cas Warehouse",
      lastModified: "21/05/2023",
    },
    // ...
  ];
}
export default async function Page() {
  const data = await getData();

  return (
    <>
      <div className="mb-5 flex h-10 w-full items-center space-x-4 rounded-2xl bg-white px-6 font-semibold text-slate-500">
        <span>Master Data</span>
        <ChevronRight size={16} />
        <span className="text-teal-500">Product List</span>
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
}
