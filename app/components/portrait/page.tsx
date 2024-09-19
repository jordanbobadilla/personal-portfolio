import Image from "next/image"
import React from "react"

type Props = {
  imgUrl: string
}

const Portrait = ({ imgUrl }: Props) => {
  return (
    <section
      className={`mx-8 mt-8 h-auto border border-neutral-800 rounded-2xl text-primary`}
    >
      <div
        className={`m-1 h-[98%] border border-neutral-600 rounded-2xl backdrop-blur-xl flex flex-col`}
      >
        <Image
          src={imgUrl}
          alt="portrait image"
          width={"300"}
          height={"300"}
          className="w-auto h-min rounded-2xl"
        />
      </div>
    </section>
  )
}

export default Portrait
