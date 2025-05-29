"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const NavBar = () => {
  const pathname = usePathname()
  const isWork = pathname === "/"

  return (
    <header className="p-8 fixed top-0 right-0 left-0 z-10 flex flex-row justify-between items-center backdrop-blur-0 bg-gradient-to-b from-background via-background/30 to-transparent text-primary">
      <div className="flex items-center gap-3">
        <Image
          src={"/jb-logo.jpg"}
          alt="jordan bobadilla's logo"
          width={40}
          height={40}
        />
        <div>
          <h2 className="text-xl font-semibold">Jordan Bobadilla</h2>
          <h4 className="text-muted-foreground text-[12px]">
            Software Engineer
          </h4>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative group flex items-center border border-neutral-500 rounded-full bg-gray-700/20 p-1 w-[200px] mx-auto">
          <motion.div
            className="absolute top-1 left-1 w-1/2 h-[calc(100%-0.5rem)] rounded-full z-0 bg-white/10 group-hover:bg-white/20
             before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white/30 before:blur-lg before:opacity-40 before:z-[-1]"
            animate={{ x: isWork ? "0%" : "90%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />

          <Link
            href="/"
            className={`relative z-10 w-1/2 text-center px-6 py-2 font-semibold text-sm
            
            ${
              isWork
                ? "text-primary"
                : "text-muted-foreground hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent hover:rounded-full hover:text-primary"
            }`}
          >
            Work
          </Link>
          <Link
            href="/info"
            className={`relative z-10 w-1/2 text-center px-6 py-2 mr-1 font-semibold text-sm
            backdrop-blur-2 
            ${
              !isWork
                ? "text-primary"
                : "text-muted-foreground hover:bg-gradient-to-l hover:from-white/10 hover:to-transparent hover:rounded-full hover:text-primary"
            }`}
          >
            Info
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-12 h-12 border border-neutral-500 rounded-full text-3xl pb-1 backdrop-blur-2xl backdrop-contrast-50 backdrop-saturate-50 bg-gray-700/20 hover:bg-gray-500/20 cursor-pointer">
            @
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-8 mt-4 p-2 border border-neutral-500 rounded-2xl backdrop-blur-2xl backdrop-contrast-50 backdrop-saturate-50 bg-gray-700/20">
            <DropdownMenuItem className="hover:bg-gray-500/20 hover:rounded-xl cursor-pointer">
              <Link
                href={"https://www.linkedin.com/in/jordanbobadilla/"}
                target="blank"
                className="font-bold text-md flex flex-row items-center justify-center gap-8"
              >
                LinkedIn <ArrowUpRight />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-500/20 hover:rounded-xl cursor-pointer">
              <Link
                href={
                  "https://docs.google.com/document/d/1IcJL3NfXonix7zWfSzQfc-gVNV7lop0B1AfY0pwWrYI/edit?usp=sharing"
                }
                target="blank"
                className="font-bold text-md flex flex-row items-center justify-center gap-8"
              >
                Resume <ArrowUpRight />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default NavBar
