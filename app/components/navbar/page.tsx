import Link from "next/link"
import React from "react"

const NavBar = () => {
  return (
    <header className="bg-transparent m-8 flex flex-row justify-between items-center text-primary">
      <div>
        <h2 className="text-xl font-bold">Jordan Bobadilla</h2>
        <h4 className="text-muted-foreground">Software Engineer</h4>
      </div>
      <div className="border border-neutral-700 rounded-full flex items-center justify-between p-2 backdrop-blur-2 bg-white/10 hover:bg-white/20 cursor-pointer">
        <Link
          href={"/"}
          className="px-6 py-2 mr-1 font-semibold focus:backdrop-blur-2 focus:bg-white/10 focus:rounded-full hover:bg-white/30 hover:rounded-full text-sm"
        >
          Work
        </Link>
        <Link
          href={"/info"}
          className="px-6 py-2 font-semibold hover:bg-white/10 hover:rounded-full text-sm"
        >
          Info
        </Link>
      </div>
    </header>
  )
}

export default NavBar
