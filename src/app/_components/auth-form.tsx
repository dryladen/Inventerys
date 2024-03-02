"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Icons } from "./icons";
import { signIn, signOut } from "next-auth/react";
import { Navigation } from "lucide-react";
import { useRouter } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const loginWithGoogle = async () => {
    setIsLoading(true);
    const response = await signIn("google",{callbackUrl: '/admin',redirect: false});
    console.log(response);
    if (response?.ok) {
      router.push("/admin");
    }
  };
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button disabled={isLoading} onClick={loginWithGoogle}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Sign In with Google
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background text-muted-foreground px-2">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => signIn("discord")}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => signOut()}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          ""
        )}
        {"Sign Out"}
      </Button>
    </div>
  );
}
