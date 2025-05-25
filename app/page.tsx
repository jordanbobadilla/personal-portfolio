import Link from "next/link"
import Footer from "./components/footer/page"
import NavBar from "./components/navbar/page"
import IntroProject from "./components/projects/introProject/page"
import Project from "./components/projects/project/page"

export default function Home() {
  return (
    <main>
      <NavBar isWork={true} />
      <IntroProject />
      <Link href={"/one-earner-referrals"}>
        <Project
          title="One Earner Referral"
          subtitle="Uber, '23"
          description="Invite friends to make money on their own time"
          imgUrl="/oer3.png"
          background="bg-gradient-to-r from-red-900 via-red-500 to-red-900"
        />
      </Link>
      <Link href={"/givn"}>
        <Project
          title="Givn"
          subtitle="Pursuit, '21"
          description="Save the planet one item at a time."
          imgUrl="/givn.png"
          background="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700"
        />
      </Link>
      <div className="h-[1px] mx-8 mt-32 mb-8 bg-muted-foreground" />
      <Footer />
    </main>
  )
}
