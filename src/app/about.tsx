"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
interface AboutProps {
  id?: string; // Make the id optional
}

export function AboutUs({ id }: AboutProps) {
  return (
    <section id={id} className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            About Us
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            At Well Spring Health Services, we stand as a beacon of hope for
            those navigating the challenges of substance use disorders. Our
            foundation is built on empathy, respect, and a steadfast commitment
            to supporting individuals on their journey toward recovery.
          </Typography>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          <Image
            width={1024}
            height={1024}
            alt="team work"
            src="/image/help.png"
            className="h-[30rem] w-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Our approach is rooted in evidence-based practices combined with a
          deep understanding of the human experience. Every member of our
          team—from counselors and therapists to administrative staff—is
          dedicated to fostering an atmosphere of trust and encouragement. We
          take pride in offering a holistic range of services designed to
          address not just the symptoms but the underlying causes of addiction.
          By integrating therapy, education, and peer support, we empower our
          clients to create meaningful, lasting change in their lives.
          <br /><br />
          At Well Spring, we don&apos;t see challenges—we see potential. Our goal is
          to walk alongside you, providing the tools and guidance needed to
          rediscover your inner strength and achieve your vision of a fulfilling
          life. 
          <br/><br />
          Let’s make the journey together.
        </Typography>{" "}
      </div>
    </section>
  );
}

export default AboutUs;
