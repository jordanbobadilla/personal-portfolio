import React from "react"

const Experience = () => {
  return (
    <section className="mt-16 mx-8 text-primary">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
          Experience
        </h4>
      </div>
      <h1 className="text-3xl mt-8 mb-4 font-medium">Uber</h1>
      <h2 className="text-xl font-medium ">Software Engineer I</h2>
      <p className="text-muted-foreground font-medium">08/22 - 03/24</p>
      <p className="text-muted-foreground mt-4 mb-8">
        During my time on the Earner Success team I’ve been working closely with
        the Growth Levers Team to deliver a macro project called One Earner
        Referrals for the Uber Driver App.
      </p>
      <h2 className="text-xl font-medium mt-8">Boost Fellow</h2>
      <p className="text-muted-foreground font-medium">01/22 - 08/22</p>
      <p className="text-muted-foreground mt-4 mb-8">
        Selected into a 6-month software engineering apprenticeship program
        where I got the chance to collaborate with the Earner Success Team and
        deploy amazing features as an Android Software Engineer.
      </p>
      <h2 className="text-xl font-medium mt-8">Level Up Fellow</h2>
      <p className="text-muted-foreground font-medium">10/20 - 01/22</p>
      <p className="text-muted-foreground mt-4 mb-8">
        Selected into intensive software engineering training program covering
        software development, object oriented programming, responsive
        frameworks, data structures and algorithms.
      </p>
    </section>
  )
}

export default Experience
