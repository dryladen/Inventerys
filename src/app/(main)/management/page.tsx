// import { DataTable } from "../components/data-table";
import { api } from "~/trpc/server";
import { DataTable } from "../../_components/data-table";
import { columns } from "./column";
import { CreateUser } from "~/app/_components/create-user";
export default async function Page() {
  const data = await api.user.all.query();
  const formattedData = data.map((user) => ({
    ...user,
    emailVerified: user.emailVerified?.toISOString() || null,
  }));
  return (
    <>
      <CreateUser />
      <DataTable columns={columns} data={formattedData} />
    </>
  );
}
