import Image from "next/image"
import NavBar from "./components/navbar/page"
import IntroProject from "./components/projects/introProject/page"

export default function Home() {
  return (
    <main className=" ">
      <NavBar />
      <IntroProject />
    </main>
  )
}
