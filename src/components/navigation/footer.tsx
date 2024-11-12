import React from 'react'
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="container mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-purple-200 hover:text-white">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-purple-200 hover:text-white">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-purple-200 hover:text-white">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <p className="text-purple-200">
            © 2024 CodeCraft. All rights reserved.
          </p>
        </div>
      </footer>
  )
}
