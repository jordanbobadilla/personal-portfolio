import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react"

const BackButton = () => {
  return (
    <Link
      href={"/"}
      className=" w-24 flex flex-row justify-center items-center gap-2 p-2 text-white text-md backdrop-blur-2 bg-white/10 rounded-full hover:bg-white/15 transition-colors duration-200 cursor-pointer group"
    >
      <ArrowLeft className=" w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />{" "}
      Back
    </Link>
  )
}

export default BackButton
