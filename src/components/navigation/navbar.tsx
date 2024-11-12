import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Navbar() {
    return (
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
        <div className="flex items-center space-x-4">
          <Button variant="secondary" className="bg-purple-700 text-white hover:bg-purple-600">Get Started</Button>
          <Button variant="outline" className="text-white border-purple-700/50 hover:bg-white hover:text-purple-900">
            Login
          </Button>
        </div>
      </div>
    </nav>
  )
}
