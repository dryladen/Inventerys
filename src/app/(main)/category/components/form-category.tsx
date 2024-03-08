"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { api } from "~/trpc/react";
import React from "react";
import { Toaster, toast } from "sonner";
interface FormUserProps {
  categoryId?: string;
  icon: React.ReactNode;
}
export function FormCategory({ categoryId, icon }: FormUserProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const createCategory = api.category.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setEmail("");
      setIsOpen(false);
      toast.success("Category created");
      console.log("Category created");
    },
  });
  const getCategory = categoryId
    ? api.category.categoryById.useQuery({ id: categoryId }, { enabled: true })
    : null;
  useEffect(() => {
    if (getCategory?.data) {
      setName(getCategory.data.name || "");
    }
  }, [getCategory?.data]);
  const updateUser = api.category.update.useMutation({
    onSuccess: () => {
      router.refresh();
      setIsOpen(false);
      console.log("Category updated");
      toast.success("Category updated");
    },
  });
  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen((old) => !old)}>
        <DialogTrigger asChild>{icon}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {!categoryId ? "Create new category" : "Edit category"}
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (categoryId) {
                updateUser.mutate({ name: name, id: categoryId });
                console.log("Edit category");
              } else {
                createCategory.mutate({ name:name });
                console.log("create category");
              }
            }}
            className="flex flex-col gap-2"
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  className="col-span-3"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="secondary"
                type="submit"
                disabled={createCategory.isLoading}
                className="rounded-full"
              >
                {createCategory.isLoading ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
