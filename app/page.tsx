import Link from "next/link"
import Footer from "./components/footer/page"
import NavBar from "./components/navbar/page"
import IntroProject from "./components/projects/introProject/page"
import Project from "./components/projects/project/Project"

export default function Home() {
  return (
    <main className="scroll-smooth will-change-auto">
      <IntroProject />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-start lg:gap-8 px-4">
        <div className="lg:mt-16">
          <Link href={"/one-earner-referrals"}>
            <Project
              title="One Earner Referral"
              subtitle="Uber, '23"
              description="Invite friends to make money on their own time"
              imgUrl="/oer3.png"
              background="bg-gradient-to-r from-red-900 via-red-500 to-red-900"
            />
          </Link>
        </div>
        <div className="space-y-4">
          <Link href={"/domi-chat"}>
            <Project
              title="DomiChat"
              subtitle="Showcase Proyect, '25"
              description="Your Dominican AI Assistant"
              imgUrl="/domichat-chat.png"
              background="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700"
            />
          </Link>
          <Link href={"/elementix"}>
            <Project
              title="Elementix"
              subtitle="Showcase Proyect, '24"
              description="Run your Agency in One Place."
              imgUrl="/elementix-home.png"
              background="bg-gradient-to-r from-green-700 via-green-500 to-green-700"
            />
          </Link>
          <Link href={"/givn"}>
            <Project
              title="Givn"
              subtitle="Pursuit, '21"
              description="Save the planet one item at a time."
              imgUrl="/givn-feed.png"
              background="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700"
            />
          </Link>
        </div>
      </div>
      <div className="h-[1px] mx-8 mt-16 mb-8 bg-muted-foreground" />
      <Footer />
    </main>
  )
}
