import React from "react"
import Portrait from "../components/portrait/page"
import Footer from "../components/footer/page"
import BackButton from "../components/back-button/page"

const OneEarnerReferralsPage = () => {
  return (
    <section className="text-primary">
      <header className="p-8 fixed top-0 right-0 left-0 z-10 flex flex-row justify-between items-center backdrop-blur-0 bg-gradient-to-b from-red-900/80 to-transparent">
        <BackButton />
      </header>

      <div className="mx-8 mt-24">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text">
          OneEarner Referrals
        </h1>
        <p className="text-muted-foreground text-lg mb-6 italic">
          OneEarner Referrals is Uber's official driver referral program
          designed to incentivize existing drivers to invite new drivers to the
          platform. The program offers monetary rewards to both the referrer and
          the referee upon the completion of specific milestones.
        </p>

        <div className="h-[1px] my-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            Key Features
          </h4>
        </div>
        <ul className="list-inside text-primary mb-6 font-medium text-lg">
          <li>- Referral sharing via native Android features.</li>
          <li>- Country-specific reward offers (e.g., $300 after 60 trips).</li>
          <li>- Progress tracking for referred drivers.</li>
          <li>- Secure integration with Uber's backend systems.</li>
        </ul>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            Role & Tech Stack
          </h4>
        </div>
        <p className="text-primary mb-6 font-medium text-lg">
          <strong className="italic bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text">
            Role:
          </strong>{" "}
          Android Developer
          <br />
          <strong className="italic bg-gradient-to-b from-white via-gray-200 to-gray-700 text-transparent bg-clip-text">
            Stack:
          </strong>{" "}
          Java, Kotlin, RxJava, Motif, XML
        </p>

        <div className="h-[1px] my-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            User Interface
          </h4>
        </div>
        <p className="text-primary text-lg mb-6">
          The referral feature is seamlessly integrated into the Uber Driver
          app, allowing drivers to easily share their unique referral codes
          through various channels such as SMS, email, and social media. The app
          provides real-time updates on the referral status, ensuring
          transparency and engagement.
        </p>

        <Portrait imgUrl="/oer3.png" />
        <p className="my-8 mx-10 font-medium text-lg italic">
          Screenshot of the Referrals Home Page. You can view your status, your
          current offer based on your city/country or send an invite.
        </p>

        <Portrait imgUrl="/oer2.png" />
        <p className="my-8 mx-10 font-medium text-lg italic">
          Screenshot of the referral invitation screen within the Uber Driver
          app.
        </p>

        <Portrait imgUrl="/oer1.png" />
        <p className="my-8 mx-10 font-medium text-lg italic">
          Progress tracking interface showing the status of referred drivers.
          Classified between active and past invitations.
        </p>

        <div className="h-[1px] m-8 bg-muted-foreground" />

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h4 className="text-muted-foreground uppercase text-[12px] font-semibold">
            Impact
          </h4>
        </div>
        <p className="text-primary text-lg mb-6">
          The OneEarner Referrals program had a profound impact on both Uber’s
          driver growth strategy and user engagement. By enabling existing
          drivers to act as ambassadors, the program scaled organically,
          leveraging word-of-mouth and community-driven trust. This created a
          self-sustaining growth loop where motivated drivers became recruiters,
          incentivized by real earnings.
        </p>

        <p className="text-primary text-lg mb-6">
          In high-demand markets like New York, Miami, and Los Angeles, referral
          bonuses of up to $500 led to significant spikes in driver sign-ups
          during targeted campaigns. The app’s ability to localize offers per
          region allowed Uber to fine-tune acquisition strategies and reward
          structures based on driver availability and city-specific growth
          goals.
        </p>

        <p className="text-primary text-lg mb-6">
          From a product perspective, the referral system reduced onboarding
          costs by decreasing the need for traditional marketing campaigns. New
          drivers often signed up through friends and family, making the process
          feel more personal and trustworthy. Additionally, tracking referrals
          in-app helped reduce fraud, improved transparency, and created a sense
          of accountability in both parties involved.
        </p>

        <p className="text-primary text-lg mb-6">
          On the technical side, implementing real-time updates through backend
          APIs and synchronizing referral progress across devices (web, mobile)
          was a significant accomplishment. It ensured that users had access to
          accurate and timely data, which helped build trust and encouraged
          continued engagement.
        </p>

        <p className="text-primary text-lg mb-6">
          Overall, the OneEarner Referrals project was not just a feature—it was
          a strategic engine that helped Uber expand efficiently while rewarding
          its most loyal drivers. As an Android Developer, being part of this
          initiative meant building technology that directly supported Uber’s
          mission of creating economic opportunities through mobility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-muted-foreground mb-6">
          <div>
            <h3 className="text-3xl font-bold text-primary">+1.2M</h3>
            <p>Referrals sent globally</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">60%</h3>
            <p>Lower acquisition cost</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">+18%</h3>
            <p>Driver retention boost</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] m-8 bg-muted-foreground" />
      <Footer />
    </section>
  )
}

export default OneEarnerReferralsPage
