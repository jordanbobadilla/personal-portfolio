import React from "react"
import NavBar from "../components/navbar/page"
import Portrait from "../components/portrait/page"
import Footer from "../components/footer/page"
import BackButton from "../components/back-button/page"
import Link from "next/link"
import { Github, LucideVideo } from "lucide-react"

const DomiChatPage = () => {
  return (
    <section className="text-primary">
      <header className="p-8 fixed top-0 right-0 left-0 z-10 flex flex-row justify-between items-center backdrop-blur-0 bg-gradient-to-b from-blue-700/80 to-transparent">
        <BackButton />
        <div className="flex gap-4">
          <Link
            className="font-bold w-24 flex flex-row justify-center items-center gap-2 py-2 px-4 text-white text-md backdrop-blur-2 bg-blue-700 rounded-full hover:bg-blue-700/60 transition-colors duration-200 cursor-pointer group"
            href={"https://domichat.vercel.app/"}
            target="blank"
          >
            <LucideVideo className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />{" "}
            Live
          </Link>
          <Link
            className="font-bold w-26 flex flex-row justify-center items-center gap-2 py-2 px-4 text-white text-md backdrop-blur-2 bg-black rounded-full hover:bg-black/40 transition-colors duration-200 cursor-pointer group"
            href={"https://github.com/jordanbobadilla/domichat"}
            target="blank"
          >
            <Github className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />{" "}
            Github
          </Link>
        </div>
      </header>

      <div className="mx-8 mt-24">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text">
          DomiChat
        </h1>
        <p className="text-muted-foreground text-lg mb-6 italic">
          DomiChat is a Dominican AI assistant that allows users to ask
          questions and engage in conversations through both chat and voice,
          featuring authentic local accents.
        </p>

        <div className="h-[1px] my-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            Key Features
          </h4>
        </div>
        <ul className="list-inside text-primary font-medium text-lg mb-6">
          <li>- Create an account with email, Google, or Apple</li>
          <li>
            - Select from 4 Dominican accent voices: popi, wawawa, cibaeña,
            sureña
          </li>
          <li>- Chat with the app using text or voice input</li>
          <li>- Receive voice responses in the selected accent</li>
          <li>- Save and browse past chat history with context grouping</li>
          <li>- Customize your user profile with photo and preferences</li>
          <li>
            - Integrates a RAG system combining OpenAI API with a local
            Dominican dataset
          </li>
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
          Software Engineer (Web, Mobile) <br />
          <strong className="italic bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text">
            Tech Stack:
          </strong>{" "}
          TypeScript, Python, TailwindCSS, Next.js, Expo, OpenAI API, Node.js,
          Prisma
        </p>

        <div className="h-[1px] my-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            User Interface
          </h4>
        </div>
        <p className="text-primary font-medium text-lg mb-6">
          DomiChat features a sleek and culturally-inspired interface. Both
          mobile and web versions are responsive and engaging, offering users a
          seamless onboarding experience.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <Portrait imgUrl="/domichat-login.png" />
          <div>
            <h3 className="text-lg font-semibold my-8 mx-10">
              Onboarding & Login
            </h3>
            <p className="my-8 mx-10 font-medium text-lg italic">
              Users can log in with email, Google, or Apple accounts. The
              welcome screen includes a voice-based introduction where users
              select their preferred Dominican accent.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold my-8 mx-10">
              Chat & Voice Interaction
            </h3>
            <p className="my-8 mx-10 font-medium text-lg italic">
              The main interface allows real-time conversations with DomiChat
              through text or voice, with animated message bubbles and instant
              feedback.
            </p>
          </div>
          <Portrait imgUrl="/domichat-chat.png" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <Portrait imgUrl="/domichat-profile.png" />
          <div>
            <h3 className="text-lg font-semibold my-8 mx-10">
              Customizable Profiles
            </h3>
            <p className="my-8 mx-10 font-medium text-lg italic">
              Users can personalize their profiles with photos, nickname, and
              preferred accent settings. The design remains clean and functional
              across devices.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold my-8 mx-10">
              Chat History View
            </h3>
            <p className="my-8 mx-10 font-medium text-lg italic">
              Previous conversations are stored and categorized by topic or
              context, with intuitive navigation for reviewing past questions or
              interactions.
            </p>
          </div>
          <Portrait imgUrl="/domichat-history.png" />
        </div>

        <div className="h-[1px] m-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            Impact
          </h4>
        </div>
        <p className="text-primary font-medium text-lg mb-4">
          DomiChat provides accessible AI for the Dominican population by
          incorporating cultural nuances and voice diversity. It's currently
          used in education, daily assistance, and citizen services. The custom
          RAG system enhances accuracy for local questions, making the app a
          valuable digital companion in the country’s tech ecosystem.
        </p>
        <p className="text-primary font-medium text-lg">
          If widely adopted, DomiChat has the potential to become the first
          mainstream AI assistant tailored for a Caribbean nation. It could
          bridge the digital literacy gap by offering natural language
          interactions in local dialects, making advanced technology accessible
          to broader demographics. Schools could integrate it as a learning aid,
          government offices as a support tool, and professionals as a smart
          assistant in their workflows. Over time, DomiChat could inspire
          similar region-specific AI solutions across Latin America, positioning
          the Dominican Republic as a pioneer in culturally relevant artificial
          intelligence.
        </p>
      </div>
      <div className="h-[1px] m-8 bg-muted-foreground" />
      <Footer />
    </section>
  )
}

export default DomiChatPage
