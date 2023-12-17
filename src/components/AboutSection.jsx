"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Assessment of client&apos;s goals and target audience .</li>
        <li>Develop tailored strategies leveraging all channels.</li>
        <li>End-to-end campaign management.</li>
        <li>It has survived not only five centuries, but also the leap.</li>
        <li>Continual analysis and optimization.</li>
        <li>Ensure maximum impact and ROI.</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Content Production</li>
        <li>Sound Section</li>
        <li>Graphic Design</li>
        <li>Video Graphy</li>
        <li>Writing</li>
        <li>Design & Development</li>
        <li>Marketing & Research</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-sm lg:text-base">
            <span className="font-bold text-2xl bg-gradient-to-r from-primary-400 to-secondary-600">
              Best Digital Marketing Company In Rohini, Delhi
            </span>{" "}
            We design, build and ship world-class creative products and services
            for Forward-thinking brands like yours. From innovative startups to
            global giants, we are the go-to organization for contenders with a
            disruptor Mindset. In addition to creative development, we have a
            serious strategy practice, we plan and buy media, and Produce
            content for your company. Our creative directors, producers, and
            developers provide the vital guardrails for your better commercial
            experience – the process, strategy, creative, production, corporate
            context, and data analytics – necessary for quick and cost-effective
            results.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Implement Marketing & Advertising{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Our Mission and Vision{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
