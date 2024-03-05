// import { DataTable } from "../components/data-table";
import { api } from "~/trpc/server";
import { Users, columns } from "./column";
import { DataTable } from "../../_components/data-table";
// async function getData(): Promise<Users[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       no: 1,
//       status: "Available",
//       name: "m@example.com",
//       warehouse: "Cas Warehouse",
//       lastModified: "20/05/2023",
//     },
//     {
//       id: "489e1d42",
//       no: 2,
//       status: "Unavailable",
//       name: "example@gmail.com",
//       warehouse: "Red Warehouse",
//       lastModified: "19/05/2023",
//     },
//     {
//       id: "489e1d43",
//       no: 3,
//       status: "Unavailable",
//       name: "ciki@gmail.com",
//       warehouse: "Cas Warehouse",
//       lastModified: "21/05/2023",
//     },
//     // ...
//   ];
// }
export default async function Page() {
  const data  = await api.user.all.query();
  const formattedData = data.map(user => ({ ...user, emailVerified: user.emailVerified?.toISOString() || null }));
  return (
    <>
      <DataTable columns={columns} data={formattedData} />
    </>
  );
}
