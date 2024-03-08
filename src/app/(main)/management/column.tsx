"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Copy,
  FileText,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
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
import { FormUser } from "~/app/_components/form-user";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

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
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.index + 1}</div>;
    },
  },
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
  {
    id: "detail",
    header: () => <div className="pl-6">Details</div>,
    cell: ({ row }) => {
      const user = row.original;
      const router = useRouter();
      const deleteUser = api.user.delete.useMutation({
        onSuccess: () => {
          router.refresh();
          toast.success("User deleted");
        },
      });
      return (
        <>
          <div className="flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <FileText className="h-4 w-4 " />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Detail</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(user.id)}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy User ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View User Details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <FormUser
                user_id={user.id}
                icon={<Pencil className="h-4 w-4 cursor-pointer" />}
              />
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <Trash2 className="h-4 w-4 cursor-pointer text-red-500" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      deleteUser.mutate({ id: user.id });
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </>
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
