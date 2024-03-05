"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, FileText, MoreHorizontal } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "./column-header";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Users = {
  id: string;
  password: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  name: string | null;
  email: string | null;
  emailVerified: string | null;
  image: string | null;
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "no",
    header: ()=><div className="text-center">No</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.index + 1}</div>;
    },
  },

  // {
  //   accessorKey: "password",
  //   header: "Password",
  // },
  // {
  //   accessorKey: "createdAt",
  //   header: "Created At",
  // },
  // {
  //   accessorKey: "updatedAt",
  //   header: "Updated At",
  // },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const user = row.original;
      return (
        <>
          <div className="flex items-center space-x-2">
            <Image
              src={`${user.image}`}
              alt="Image"
              width={32}
              height={32}
              className="rounded-full text-center"
            />
            <p>{`${user.name}`}</p>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="E-mail" />
    ),
  },
  // {
  //   accessorKey: "emailVerified",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Email Verified" />
  //   ),
  // },
  {
    id: "detail",
    header: "Details",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <FileText className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Detail</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy User ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View User Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },

  // {
  //   accessorKey: "name",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Name" />
  //   ),
  // },
  // {
  //   accessorKey: "status",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Status" />
  //   ),
  // },
  // {
  //   accessorKey: "warehouse",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Warehouse" />
  //   ),
  // },
  // {
  //   accessorKey: "lastModified",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Last Modified" />
  //   ),
  // },
  // // {
  // //   accessorKey: "amount",
  // //   header: () => <div className="text-right">Amount</div>,
  // //   cell: ({ row }) => {
  // //     const amount = parseFloat(row.getValue("amount"));
  // //     const formatted = new Intl.NumberFormat("en-US", {
  // //       style: "currency",
  // //       currency: "USD",
  // //     }).format(amount);

  // //     return <div className="text-right font-medium">{formatted}</div>;
  // //   },
  // // },
  // {
  //   id: "detail",
  //   header: "Details",
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <FileText className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Detail</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
