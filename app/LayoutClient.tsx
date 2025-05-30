"use client"

import { usePathname } from "next/navigation"
import NavBar from "./components/navbar/page"

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const showNavbar = pathname === "/" || pathname === "/info"

  return (
    <>
      {showNavbar && <NavBar />}
      <main className={showNavbar ? "pt-[80px]" : ""}>{children}</main>
    </>
  )
}
