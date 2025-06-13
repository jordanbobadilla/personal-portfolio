"use client"
import Image from "next/image"
import React from "react"

type PortraitProps = {
  imgUrl: string
  alt?: string
  priority?: boolean
}

const Portrait: React.FC<PortraitProps> = ({
  imgUrl,
  alt = "Project image",
  priority = false,
}) => {
  return (
    <section
      className={`mx-8 mt-8 h-auto border border-neutral-800 rounded-2xl text-primary`}
    >
      <div
        className={`m-1 h-[98%] border border-neutral-600 rounded-2xl backdrop-blur-xl flex flex-col`}
      >
        <Image
          src={imgUrl}
          alt={alt}
          width={300}
          height={300}
          className="w-auto h-min rounded-2xl object-cover transition-transform duration-300 ease-in-out will-change-transform"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJod...yIvPjwvc3ZnPg=="
          loading={priority ? "eager" : "lazy"}
          priority={priority}
        />
      </div>
    </section>
  )
}

export default Portrait
