"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RegistrationDialog from "@/app/registration-dialog";
import LoginDialog from "@/app/login-dialog";
import { AlignRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  return (
    <Sheet>
      <nav className="container mx-auto px-4 py-4 lg:px-7">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-bold">
            Code Craft
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-purple-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-purple-200">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-purple-200">
              Contact
            </Link>
          </div>

          <ActionButton type="desktop" />

          <SheetTrigger className="md:hidden">
            <Button variant="outline" className="w-10 h-10">
              <AlignRight color="white" size={24} />
            </Button>
          </SheetTrigger>
        </div>
      </nav>
      <SheetContent
        side={"top"}
        className="max-w-[100vw] md:hidden flex flex-col gap-7"
      >
        <div className="flex flex-col text-center gap-5 font-semibold text-lg md:hidden items-center">
          <Link
            href="/"
            className="text-white text-center hover:text-purple-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white text-center hover:text-purple-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white text-center hover:text-purple-200"
          >
            Contact
          </Link>
        </div>
        <ActionButton type="mobile" />
      </SheetContent>
    </Sheet>
  );
}

function ActionButton({ type = "mobile" }: { type?: "desktop" | "mobile" }) {
  const { data: session } = useSession();
  const router = useRouter()

  if (!session || !session.user) {
    return (
      <div
        className={cn(
          "items-center",
          type === "mobile"
            ? "md:hidden flex flex-col gap-6"
            : "hidden md:flex space-x-4"
        )}
      >
        <RegistrationDialog
          props={{
            variant: "secondary",
            className: cn(
              "bg-purple-700 text-white hover:bg-purple-600",
              type === "mobile" ? "w-28" : ""
            ),
            title: "Get Started",
          }}
        />
        <LoginDialog
          props={{
            variant: "outline",
            className: cn(
              "text-white border-purple-700/50 hover:bg-white hover:text-purple-900",
              type === "mobile" ? "w-28" : ""
            ),
            title: "Login",
          }}
        />
      </div>
    );
  }

  return (
    <Button
      onClick={() => router.push("/dashboard/ticket")}
      variant={"secondary"}
      className={cn(
        "bg-purple-700 text-white hover:bg-purple-600",
        type === "mobile" ? "w-28" : ""
      )}
    >
      View Ticket
    </Button>
  );
}
