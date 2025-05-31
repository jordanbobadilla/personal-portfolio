"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import NavBar from "./components/navbar/page"
import Loading from "./components/Loading"

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  const showNavbar = pathname === "/" || pathname === "/info"

  useEffect(() => {
    let timeout: NodeJS.Timeout

    setLoading(true)
    timeout = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <>
      {loading && <Loading />}
      {showNavbar && <NavBar />}
      <main className={showNavbar ? "pt-[80px]" : ""}>{children}</main>
    </>
  )
}
