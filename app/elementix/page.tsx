import React from "react"
import NavBar from "../components/navbar/page"
import Portrait from "../components/portrait/Portrait"
import Footer from "../components/footer/page"
import BackButton from "../components/back-button/page"
import Link from "next/link"
import { Github, LucideVideo } from "lucide-react"

const ElementixPage = () => {
  return (
    <section className="text-primary">
      <header className="p-8 fixed top-0 right-0 left-0 z-10 flex flex-row justify-between items-center backdrop-blur-0 bg-gradient-to-b from-green-700/80 to-transparent">
        <BackButton />
        <div className="flex gap-4">
          <Link
            className="font-bold w-24 flex flex-row justify-center items-center gap-2 py-2 px-4 text-white text-md backdrop-blur-2 bg-green-700 rounded-full hover:bg-green-700/60 transition-colors duration-200 cursor-pointer group"
            href={"https://elementix-rosy.vercel.app/"}
            target="blank"
          >
            <LucideVideo className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />{" "}
            Live
          </Link>
          <Link
            className="font-bold w-26 flex flex-row justify-center items-center gap-2 py-2 px-4 text-white text-md backdrop-blur-2 bg-black rounded-full hover:bg-black/40 transition-colors duration-200 cursor-pointer group"
            href={"https://github.com/jordanbobadilla/elementix"}
            target="blank"
          >
            <Github className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />{" "}
            Github
          </Link>
        </div>
      </header>

      <div className="mx-8 mt-24">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text">
          Elementix
        </h1>
        <p className="text-muted-foreground text-lg mb-6 italic">
          Elementix is a platform built to help agency owners manage operations,
          projects, and team growth through a powerful dashboard and role-based
          system.
        </p>

        <div className="h-[1px] my-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            Key Features
          </h4>
        </div>
        <ul className="list-inside text-primary font-medium text-lg mb-6">
          <li>- Create an account</li>
          <li>- Create agencies and sub-agencies</li>
          <li>- Register employees and assign them accounts</li>
          <li>- Manage roles and permissions with full flexibility</li>
          <li>- Track company growth with real-time data</li>
          <li>- Assign tasks and monitor team progress</li>
          <li>- Manage internal finances from your dashboard</li>
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
          Full Stack Web Developer <br />
          <strong className="italic bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text">
            Tech Stack:
          </strong>{" "}
          Next.js, TypeScript, Prisma, Shadcn, Bun, MySQL, TailwindCSS
        </p>

        <div className="h-[1px] my-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            User Interface
          </h4>
        </div>
        <p className="text-primary font-medium text-lg mb-6">
          Elementix uses a clean and modern interface tailored for agency
          management. The UI includes dashboards, role management panels,
          finance tracking cards, and project progress sections — all built to
          be responsive and intuitive.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <Portrait imgUrl="/elementix-dashboard.png" />
          <div>
            <h3 className="text-lg font-semibold my-8 mx-10">Main Dashboard</h3>
            <p className="my-8 mx-10 font-medium text-lg italic">
              View key business metrics, financials, and agency health from a
              centralized real-time dashboard designed for clarity and speed.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold my-8 mx-10">
              Team & Roles Panel
            </h3>
            <p className="my-8 mx-10 font-medium text-lg italic">
              Easily invite employees, assign them roles, and manage access
              permissions with a fully customizable system.
            </p>
          </div>
          <Portrait imgUrl="/elementix-roles.png" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <Portrait imgUrl="/elementix-tasks.png" />
          <div>
            <h3 className="text-lg font-semibold my-8 mx-10">Task Manager</h3>
            <p className="my-8 mx-10 font-medium text-lg italic">
              Assign tasks to individual team members, view progress, and track
              deadlines. Elementix makes team coordination simple and visual.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold my-8 mx-10">
              Finance Control
            </h3>
            <p className="my-8 mx-10 font-medium text-lg italic">
              Stay on top of your agency’s income, expenses, and overall
              financial status through a dedicated financial section in your
              admin panel.
            </p>
          </div>
          <Portrait imgUrl="/elementix-finance.png" />
        </div>

        <div className="h-[1px] m-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            Impact
          </h4>
        </div>
        <p className="text-primary font-medium text-lg mb-4">
          Elementix is designed to streamline agency management from the
          perspective of an owner. By integrating employee coordination,
          financial planning, and project oversight in one platform, it reduces
          the friction of daily operations.
        </p>
        <p className="text-primary font-medium text-lg">
          With continued development, Elementix could become the go-to solution
          for small-to-mid-sized creative and tech agencies in Latin America. It
          bridges the gap between powerful enterprise tools and clean,
          accessible design — all while empowering leaders to grow their
          businesses with confidence.
        </p>
      </div>
      <div className="h-[1px] m-8 bg-muted-foreground" />
      <Footer />
    </section>
  )
}

export default ElementixPage
