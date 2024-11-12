"use client"

import * as React from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegistrationDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] p-0 gap-0">
        <div className="grid sm:grid-cols-[1fr,350px]">
          {/* Form Section */}
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Registration</DialogTitle>
            </DialogHeader>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="firstname">Firstname</Label>
                <Input
                  id="firstname"
                  placeholder="Enter your first name"
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  id="lastname"
                  placeholder="Enter your last name"
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="border-gray-200"
                />
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the terms & conditions
                </label>
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Register
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
                  Login
                </Link>
              </div>
            </form>
          </div>

          <div className="bg-purple-700 p-6 text-white relative hidden sm:block">
            <Button
              variant="ghost"
              className="absolute right-4 top-4 text-white hover:bg-purple-600 h-auto p-1.5"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="space-y-4 pt-8">
              <p className="text-lg">
                purchase your tickets as soon as possible.
              </p>
              <p>
                {"Once tickets are sold out, there won't be any available."}
              </p>
              <p>
                {"So, don't wait! Buy your tickets now and secure your seat."}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}