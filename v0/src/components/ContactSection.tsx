import ViewMoreBtn from "./ViewMoreBtn";
import IdeaIcon from "../assets/idea.png";
import MotivationIcon from "../assets/motivation.png";
import StateICon from "../assets/state.png";
import CertImg from "../assets/cs50.png";
import { useState } from "react";
import Feature from "./Feature";
import { CERTS } from "../constants/Projects";
import tw from "twin.macro";
import {
  ConatctSubHeading,
  ContactCert,
  ContactCertContainer,
  ContactCertImg,
  ContactCertImgContainer,
  ContactConatiner,
  ContactFeatures,
  ContactHeader,
  ContactProjectConatiner,
  ContactProjectFooter,
  ContactProjectHeading,
} from "../styles/Contact.style";

const ContactSection = () => {
  const [feature, setFeature] = useState("idea");
  return (
    <ContactConatiner id="contact">
      <ContactHeader tw="">So let's be real?</ContactHeader>
      <p>
        Whether you are searching for a front-end intern or a back-end intern, I
        believe what you need is someone who can adapt and learn quickly with
        any technology. At the end of the day, these are just tools that can be
        changed as needed. I don't know everything; that's a fact. However, the
        fundamentals I learned at 1337 enable me to adapt swiftly and learn
        anything. In fact, I am continually learning, utilizing all available
        resources. I particularly enjoy books that delve deep into the subject.
      </p>
      <p>
        I am also actively pursuing various courses available to me, earning
        several certifications
      </p>
      <ContactCertContainer>
        <ContactCert>
          <ContactCertImgContainer>
            <ContactCertImg src={CertImg} alt="" />
          </ContactCertImgContainer>
          <ViewMoreBtn text="view credintional" size="sm" link={CERTS.cs50} />
        </ContactCert>
      </ContactCertContainer>
      <ConatctSubHeading>But what about projects?</ConatctSubHeading>
      <p>
        Learning is about doing, and I firmly believe in applying my knowledge
        to real-world applications. I am constantly working on new projects,
        tackling challenges, and solving real-world problems. Currently, I am
        engaged in the following project
      </p>
      <ContactProjectConatiner>
        <ContactProjectHeading>Oplla</ContactProjectHeading>
        <ContactFeatures>
          <Feature
            onClick={() => setFeature("idea")}
            on={feature === "idea"}
            title="Idea"
            description="A social platform to share your progress in any challenge 
            with people who are interested in the same challenge. You can create and 
            share your custom challenges, having fun along the way."
            icon={IdeaIcon}
            link="https://github.com/Abdellahmaarifa/oplla"
            actionText="any suggestion? let me here you"
          />
          <Feature
            onClick={() => setFeature("motivation")}
            on={feature === "motivation"}
            title="Motivation"
            description="I've experimented with various habit-tracking apps, 
            attempting to cultivate habits in different fields. 
            What I found lacking was the ability to share these 
            commitments with the world and compete with individuals 
            who share similar interests. This realization prompted us, 
            me and my friends to embark on the development of our own app"
            icon={MotivationIcon}
            link="https://github.com/Abdellahmaarifa/oplla"
            actionText="any suggestion? let me here you"
          />
          <Feature
            onClick={() => setFeature("state")}
            on={feature === "state"}
            title="Development state"
            description="We are currently in the design phase, 
            constructing the UI and UX. You can track the project's
             development on GitHub as we progress. or even contribute to it"
            icon={StateICon}
            link="https://github.com/Abdellahmaarifa/oplla"
            actionText="watch the project"
          />
        </ContactFeatures>
      </ContactProjectConatiner>
      <ContactProjectFooter>
        As you can see, Throughout my studies at 1337 School, I've gained
        valuable insights across diverse domains, acquiring foundational
        knowledge that equips me to tackle a variety of projects. If you
        discover a fit for your needs, I'd be delighted to connect and
        contribute to your team.
      </ContactProjectFooter>
      <ViewMoreBtn text="Get in touch" link="mailto:42maarifa@gmail.com" />
    </ContactConatiner>
  );
};

export default ContactSection;
