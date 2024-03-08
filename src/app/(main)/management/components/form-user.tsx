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
import { toast } from "sonner";
interface FormUserProps {
  user_id?: string;
  icon: React.ReactNode;
}
export function FormUser({ user_id, icon }: FormUserProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const createUser = api.user.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setEmail("");
      setIsOpen(false);
      toast.success("User created");
      console.log("User created");
    },
  });
  const getUser = user_id
    ? api.user.userById.useQuery({ id: user_id }, { enabled: true })
    : null;
  useEffect(() => {
    if (getUser?.data) {
      setName(getUser.data.name || "");
      setEmail(getUser.data.email || "");
    }
  }, [getUser?.data]);
  const updateUser = api.user.update.useMutation({
    onSuccess: () => {
      router.refresh();
      setIsOpen(false);
      console.log("User updated");
      toast.success("User updated");
    },
  });
  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen((old) => !old)}>
        <DialogTrigger asChild>{icon}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {!user_id ? "Create new Member" : "Edit Member"}
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (user_id) {
                updateUser.mutate({ userName: name, id: user_id });
                console.log("Edit user");
              } else {
                createUser.mutate({ name, email });
                console.log("create user");
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
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={email}
                  className="col-span-3"
                  onChange={(e) => setEmail(e.target.value)}
                  {...(user_id && { disabled: true })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="secondary"
                type="submit"
                disabled={createUser.isLoading}
                className="rounded-full"
              >
                {createUser.isLoading ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
