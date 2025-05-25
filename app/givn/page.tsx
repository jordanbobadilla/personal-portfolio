import React from "react"
import NavBar from "../components/navbar/page"
import Portrait from "../components/portrait/page"
import Footer from "../components/footer/page"
import BackButton from "../components/back-button/page"

const GivnPage = () => {
  return (
    <section className="text-primary">
      <header className="p-8 fixed top-0 right-0 left-0 z-10 flex flex-row justify-between items-center backdrop-blur-0 bg-gradient-to-b from-purple-700/80 to-transparent">
        <BackButton />
      </header>

      <div className="mx-8 mt-24">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text">
          Givn
        </h1>
        <p className="text-muted-foreground text-lg mb-6 italic">
          Givn is a web platform that enables users to give away items they no
          longer need, promoting recycling and environmental sustainability. By
          facilitating the free exchange of goods, Givn encourages a circular
          economy and reduces waste.
        </p>

        <div className="h-[1px] my-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            Key Features
          </h4>
        </div>
        <ul className="list-inside text-primary font-medium text-lg mb-6">
          <li>- User registration and authentication via Firebase Auth.</li>
          <li>- Feed displaying all available posts with filtering options.</li>
          <li>
            - Ability to add new posts with images of the items to give away.
          </li>
          <li>- Integration with Google Maps API to display item locations.</li>
          <li>- Real-time chat functionality between users.</li>
          <li>- Secure image storage using AWS S3.</li>
        </ul>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            Role & Tech Stack
          </h4>
        </div>
        <p className="text-primary font-medium text-lg mb-6">
          <strong className="italic bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text">
            Role:
          </strong>{" "}
          Full Stack Web Developer
          <br />
          <strong className="italic bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text">
            Stack:
          </strong>{" "}
          HTML, CSS, JavaScript, React, Firebase Auth, AWS S3, Google Maps API
        </p>

        <div className="h-[1px] my-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            User Interface
          </h4>
        </div>
        <p className="text-primary font-medium text-lg mb-6">
          Givn offers a clean and intuitive interface where users can easily
          browse available items, filter listings based on categories or
          location, and communicate with other users to arrange pickups. The
          integration with Google Maps provides a visual representation of item
          locations, enhancing user experience.
        </p>

        <Portrait imgUrl="/givn-feed.png" />
        <p className="text-primary font-medium italic text-lg my-8 mx-10">
          Screenshot of the main feed displaying available items.
        </p>

        <Portrait imgUrl="/givn-post.png" />
        <p className="text-primary font-medium text-lg my-8 mx-10">
          Interface for creating a new post with item details and images.
        </p>

        <div className="h-[1px] m-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            Impact
          </h4>
        </div>
        <p className="text-primary font-medium text-lg mb-6">
          Givn has facilitated the redistribution of hundreds of items,
          preventing them from ending up in landfills. By connecting individuals
          looking to give away items with those in need, Givn fosters a sense of
          community and promotes sustainable living practices.
        </p>
        <p className="text-primary font-medium text-lg mb-6">
          The platform's real-time chat feature has streamlined communication
          between users, making the process of giving and receiving items more
          efficient and personal. Additionally, the use of secure technologies
          ensures user data and interactions are protected.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-muted-foreground font-medium mb-6">
          <div>
            <h3 className="text-3xl font-bold text-primary">1,200+</h3>
            <p>Items successfully given away</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">800+</h3>
            <p>Active users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">95%</h3>
            <p>User satisfaction rate</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] m-8 bg-muted-foreground" />

      <Footer />
    </section>
  )
}

export default GivnPage
