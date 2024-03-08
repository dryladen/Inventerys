import { ChevronRight, ListPlus } from "lucide-react";
import { columns } from "./components/column";
import { DataTable } from "../../_components/data-table";
import { FormCategory } from "./components/form-category";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/server";

export default async function Page() {
  const data = await api.category.all.query();
  const formattedData = data.map((category) => ({
    ...category,
  }));
  return (
    <>
      <div className="mb-5 flex h-10 w-full items-center space-x-4 rounded-2xl bg-white px-6 font-semibold text-slate-500">
        <span>Master Data</span>
        <ChevronRight size={16} />
        <span className="text-teal-500">Category List</span>
      </div>
      <DataTable
        columns={columns}
        data={formattedData}
        buttonComponent={
          <FormCategory
            icon={
              <Button variant="outline" className="ml-2">
                <ListPlus className="mr-2 h-4 w-4 cursor-pointer " />
                Add Category
              </Button>
            }
          />
        }
      />
    </>
  );
}
