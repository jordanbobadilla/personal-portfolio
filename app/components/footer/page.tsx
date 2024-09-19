import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="px-8 text-primary">
      <div className="flex flex-row justify-between items-center">
        <Image
          src={"/jb-logo.jpg"}
          alt="jordan bobadilla's logo"
          width={120}
          height={120}
        />
        <div className="flex flex-row gap-16">
          <div className="flex flex-col gap-8">
            <h4 className="text-[12px] text-muted-foreground">Main</h4>
            <Link href={"/"} className="font-bold text-md">
              Work
            </Link>
            <Link href={"/info"} className="font-bold text-md">
              Info
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-[12px] text-muted-foreground">Contact</h4>
            <Link
              href={"https://www.linkedin.com/in/jordanbobadilla/"}
              target="blank"
              className="font-bold text-md flex flex-row"
            >
              LinkedIn <ArrowUpRight />
            </Link>
            <Link
              href={
                "https://docs.google.com/document/d/1IcJL3NfXonix7zWfSzQfc-gVNV7lop0B1AfY0pwWrYI/edit?usp=sharing"
              }
              target="blank"
              className="font-bold text-md flex flex-row"
            >
              Resume <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
      <h2 className="mt-12 font-semibold">
        © 2024 Jordan Bobadilla. All Rights Reserved.
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        Made with love and 2-liter of Soda (I love soda).
      </p>
    </footer>
  )
}

export default Footer
