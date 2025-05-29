import { ArrowRight } from "lucide-react"
import Image from "next/image"
import React from "react"

type Props = {
  title: string
  subtitle: string
  description: string
  imgUrl: string
  background: string
}

const Project = ({
  title,
  subtitle,
  description,
  imgUrl,
  background,
}: Props) => {
  return (
    <section
      className={`mx-8 mt-8 h-auto border border-neutral-800 rounded-2xl text-primary`}
    >
      <div
        className={`m-1 p-8 h-[98%] border border-neutral-600 hover:border-neutral-400 cursor-pointer rounded-2xl backdrop-blur-xl ${background} flex flex-col`}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">{title}</h2>
          <ArrowRight />
        </div>
        <p className="mt-4 font-medium">
          {subtitle}{" "}
          <span className="italic bg-gradient-to-b from-white via-white to-gray-300 text-transparent bg-clip-text">
            - {description}
          </span>
        </p>
        <Image
          src={imgUrl}
          alt="project image"
          width={"300"}
          height={"300"}
          className="mt-16 w-auto h-min"
        />
      </div>
    </section>
  )
}

export default Project
