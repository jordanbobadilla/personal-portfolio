import React from "react"
import NavBar from "../components/navbar/page"
import AboutMe from "../components/about-me/page"
import Portrait from "../components/portrait/page"
import { SeparatorHorizontal } from "lucide-react"
import Experience from "../components/experience/page"
import Footer from "../components/footer/page"

const InfoPage = () => {
  return (
    <section className="text-primary">
      <NavBar isWork={false} />
      <AboutMe />
      <Portrait imgUrl="/jordan1.JPG" />
      <h2 className="my-8 mx-10 font-medium text-lg">
        This is my story - alongside some great shots from all over my journey
        so far.
      </h2>
      <Portrait imgUrl="/jordan2.JPG" />
      <h2 className="my-8 mx-10 font-medium text-lg">
        My background in Software Engineering
      </h2>
      <p className="text-muted-foreground mx-10">
        In August of 2020, during the pandemic era, I received an email from
        Uber. They were seeking drivers in NYC that were willing to change
        carreers and dive into Software Engineering.
      </p>
      <p className="text-muted-foreground mx-10 mt-8">
        I couldn't believe it at first since this was a dream of mine for a long
        time. It was like an opportunity that came from the heaven. Uber made a
        Partnership with Pursuit, a one-year intensive program designed
        specifically to help adults from underserved backgrounds launch careers
        in technology.
      </p>
      <Portrait imgUrl="/pursuit2.JPG" />
      <h2 className="my-8 mx-10 font-medium text-lg">The Pursuit era</h2>
      <p className="text-muted-foreground mx-10">
        Life at Pursuit was one of the best periods of my life. I learned how to
        develop full stack web applications using: HTML, CSS, Javascript, React,
        Redux, Firebase for Authentication, SQL, NextJS, Tailwind and Boostrap.
      </p>
      <p className="text-muted-foreground mx-10 mt-8">
        Also, I learned how to be a great professional, a leader, a team member,
        a visionary, and most important, to{" "}
        <span className="italic">fail forward.</span>
      </p>
      <Portrait imgUrl="/pursuit3.JPG" />
      <h2 className="my-8 mx-10 font-medium text-lg">Time to graduate</h2>
      <p className="text-muted-foreground mx-10">
        At the end of my journey at Pursuit, I was able to decipher any data
        structure and algorithm problem that I came across. I felt imparable and
        I was ready to go to the next step: The interview with Uber.
      </p>
      <Portrait imgUrl="/nyc.JPG" />
      <h2 className="my-8 mx-10 font-medium text-lg">
        Uber Intership Experience
      </h2>
      <p className="text-muted-foreground mx-10">
        During my time as an intern at Uber, I embarked on an incredible journey
        that was as challenging as it was rewarding. I had the privilege of
        being part of the Earner Success team, a group dedicated to improving
        the experiences of Uber drivers—known as "earners." Our mission was to
        make their lives easier and their work more profitable, and I was eager
        to contribute in any way I could.
      </p>
      <p className="text-muted-foreground mx-10 mt-8">
        From day one, I knew I was in for an intense learning experience. Uber
        had partnered with Big Nerd Ranch, a well-known institution for mobile
        development training, to teach me the ins and outs of Android
        development. The Big Nerd Ranch courses were rigorous, but they provided
        a solid foundation in Android fundamentals, from understanding the
        architecture to building responsive user interfaces.
      </p>
      <Portrait imgUrl="/uber2.JPG" />
      <p className="text-muted-foreground mx-10 mt-8">
        In addition to the formal training, I supplemented my learning with
        Udemy courses. These online classes allowed me to explore specific areas
        of Android development at my own pace. Whether it was mastering Kotlin
        or diving deep into Android’s lifecycle, Udemy became my go-to resource
        for filling in gaps and reinforcing what I had learned through Big Nerd
        Ranch.
      </p>
      <p className="text-muted-foreground mx-10 mt-8">
        The internship wasn’t just about coding, though. It was also about
        learning to collaborate in a fast-paced, high-stakes environment. The
        team was incredibly supportive, always ready to offer guidance and
        feedback. I learned the importance of communication, teamwork, and
        agility—skills that are just as critical as technical knowledge in the
        tech industry.
      </p>
      <Portrait imgUrl="/uber1.JPG" />
      <h2 className="my-8 mx-10 font-medium text-lg">Full Time at Uber</h2>
      <p className="text-muted-foreground mx-10">
        Six months after completing my internship at Uber, I was thrilled to
        receive an offer to join the company as a full-time employee. The
        transition from intern to employee felt like a natural progression, but
        it also came with new challenges and opportunities. I was excited to
        continue working with the Earner Success team, knowing that I could
        further contribute to the projects I had grown passionate about.
      </p>
      <p className="text-muted-foreground mx-10 mt-8">
        In addition to my core work with the Earner Success team, I was given
        the opportunity to assist the Growth Levers team on a macro project
        called One Earner Referrals. This project was particularly exciting
        because it focused on expanding Uber’s driver network through a referral
        system, which had the potential to significantly impact the company's
        growth. My role involved collaborating with different teams to ensure
        that the referral process was seamless and effective. It was a
        challenging but rewarding experience, and it gave me insight into how
        large-scale projects are managed within a company like Uber.
      </p>
      <Portrait imgUrl="/uber3.JPG" />
      <p className="text-muted-foreground mx-10 mt-8">
        Alongside the One Earner Referrals project, I also worked on two other
        key initiatives: the Learning Center and Partner Onboarding. The
        Learning Center was designed to provide Uber drivers with the resources
        and training they needed to succeed. My role was to help create a
        user-friendly interface that would make it easy for drivers to access
        the information they needed, whether they were new to Uber or
        experienced drivers looking to enhance their skills.
      </p>
      <p className="text-muted-foreground mx-10 mt-8">
        The Partner Onboarding project was another critical initiative. This
        project aimed to streamline the process for new drivers joining Uber,
        making it as smooth and efficient as possible. I worked on developing
        features that simplified the onboarding process, ensuring that new
        partners could get on the road quickly and with all the necessary tools
        and knowledge.
      </p>
      <p className="text-muted-foreground mx-10 mt-8">
        My journey from intern to full-time employee at Uber was marked by
        growth, learning, and the satisfaction of contributing to meaningful
        projects. I’m grateful for the opportunities I’ve had to work with such
        talented and dedicated teams, and I’m excited to continue this journey,
        helping to shape the future of Technology like I did at Uber.
      </p>
      <h2 className="mt-8 mx-10 font-medium text-lg">
        Thanks for stopping by!
      </h2>
      <img
        src="/signature.png"
        alt="Jordan Bobadilla's signature"
        width={"96"}
        height={"96"}
        className="ml-6"
      />
      <div className="h-[1px] m-8 bg-muted-foreground" />
      <Experience />
      <div className="h-[1px] m-8 bg-muted-foreground" />
      <Footer />
    </section>
  )
}

export default InfoPage
