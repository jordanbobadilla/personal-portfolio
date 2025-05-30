import React from "react"

const AboutMe = () => {
  return (
    <section className="mt-16 mx-8 text-primary">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
          About me
        </h4>
      </div>
      <h1 className="text-6xl mt-4 font-medium">
        I'm passionate about solving problems and make{" "}
        <span className="bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text italic font-semibold">
          people's lives easier
        </span>
      </h1>
    </section>
  )
}

export default AboutMe
