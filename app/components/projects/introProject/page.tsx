import { PlusIcon } from "lucide-react"
import React from "react"

const IntroProject = () => {
  return (
    <section className="mx-8 h-96 border border-neutral-800 border-b-0 rounded-2xl text-primary">
      <div className="m-1 h-[98%] border border-neutral-600 border-b-0 rounded-2xl backdrop-blur-xl bg-gradient-to-b from-white/5 to-transparent">
        <div className="p-4 bg-gradient-to-r from-gray-600 via-slate-50 to-gray-600 backdrop-blur-40 rounded-t-xl flex justify-between items-center">
          <div className="flex flex-row gap-3">
            <div className="w-3 h-3 bg-red-400 rounded-full drop-shadow-md"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full drop-shadow-md"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full drop-shadow-md"></div>
          </div>
          <div>
            <PlusIcon className=" text-gray-400" />
          </div>
        </div>
        <div className="m-8">
          <h2 className="text-4xl font-bold">
            I solve problems and materialize{" "}
            <span className="italic bg-gradient-to-b from-white via-white to-gray-700 text-transparent bg-clip-text">
              dreams.
            </span>
          </h2>
          <p className="mt-8 font-medium">
            Based in Santo Domingo, Dominican Republic
          </p>
          <p className="text-muted-foreground font-medium">Formerly at Uber</p>
        </div>
      </div>
    </section>
  )
}

export default IntroProject
