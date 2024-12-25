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

type Props = {
  isWork: boolean
}

const NavBar = ({ isWork }: Props) => {
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
        {isWork ? (
          <div className="border border-neutral-500 rounded-full flex items-center justify-between p-2 backdrop-blur-2xl backdrop-contrast-50 backdrop-saturate-50 bg-gray-700/20 hover:bg-gray-500/20 cursor-pointer">
            <Link
              href={"/"}
              className="px-6 py-2 mr-1 font-semibold backdrop-blur-2 bg-white/10 rounded-full hover:bg-white/30 hover:rounded-full text-sm"
            >
              Work
            </Link>
            <Link
              href={"/info"}
              className="px-6 py-2 font-semibold hover:bg-gradient-to-l hover:from-white/10 hover:to-transparent hover:rounded-full text-sm"
            >
              Info
            </Link>
          </div>
        ) : (
          <div className="border border-neutral-500 rounded-full flex items-center justify-between p-2 backdrop-blur-2xl backdrop-contrast-50 backdrop-saturate-50 bg-gray-700/20 hover:bg-gray-500/20 cursor-pointer">
            <Link
              href={"/"}
              className="px-6 py-2 font-semibold hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent hover:rounded-full text-sm"
            >
              Work
            </Link>
            <Link
              href={"/info"}
              className="px-6 py-2 mr-1 font-semibold backdrop-blur-2 bg-white/10 rounded-full hover:bg-white/30 hover:rounded-full text-sm"
            >
              Info
            </Link>
          </div>
        )}
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
