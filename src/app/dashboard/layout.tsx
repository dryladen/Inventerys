import { cookies } from "next/headers";
import Providers from "../_components/provider";
import { Sidebar } from "../_components/side-bar";
import { Navbar } from "../_components/navbar";
import { Search } from "../_components/search";
import { UserNav } from "../_components/user-nav";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="min-h-screen">
        <div className="flex h-16 items-center px-4">
          <h1 className="pl-3 text-4xl font-bold text-teal-500">Inventerys</h1>
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
        <div className="grid h-full lg:grid-cols-6">
          <Sidebar className="h-full" />
          <div className="min-h-screen col-span-3 rounded-tl-3xl bg-slate-200 p-5 lg:col-span-5">
            {children}
          </div>
        </div>
      </div>
    </Providers>
  );
}
