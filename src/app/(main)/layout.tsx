import "~/styles/globals.css";

import Providers from "../_components/provider";
import { Search } from "../_components/search";
import { UserNav } from "../_components/user-nav";
import { Sidebar } from "../_components/side-bar";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Inventerys",
  description: "Sistem Informasi Inventaris",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <TRPCReactProvider>
          <Providers>
            <Toaster position="top-center" expand={false} visibleToasts={1} />
            <div className="min-h-screen">
              <div className="flex h-16 items-center px-4">
                <h1 className="pl-3 text-4xl font-bold text-teal-500">
                  Inventerys
                </h1>
                <div className="ml-auto flex items-center space-x-4">
                  <Search />
                  <UserNav />
                </div>
              </div>
              <div className="grid h-full lg:grid-cols-6">
                <Sidebar className="h-full min-w-56" />
                <div className="col-span-3 min-h-screen rounded-tl-3xl bg-slate-200 p-5 lg:col-span-5">
                  {children}
                </div>
              </div>
            </div>
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
