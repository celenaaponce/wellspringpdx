"use client";

import { Typography } from "@material-tailwind/react";
import { ClockIcon, MapPinIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { Fragment } from "react";
import Image from "next/image";

const SKILLS = [
  {
    icon: ClockIcon,
    title: "Hours:",
    children: (
      <>
        {`Monday to Friday: 9:00 AM - 5:00 PM\nSaturday: Closed\nSunday: Closed`
          .split("\n")
          .map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
      </>
    ),
  },
  {
    icon: MapPinIcon,
    title: "Location",
    children: (
      <>
        {`Well Spring Health Services\n8401 NE Halsey St. Suite 101\nPortland, OR, 97220`
          .split("\n")
          .map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
      </>
    ),
  },
  {
    icon: UserCircleIcon,
    title: "Contact Information",
    children: (
      <>
        {`Phone: 971-386-7358\nEmail: info@wellspringpdx.com`
          .split("\n")
          .map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
      </>
    ),
  },
];

export function Overview() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          overview
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What we do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          At Well Spring, we believe in the power of healing and the potential
          for change. Founded on the principles of compassion and understanding,
          our organization is dedicated to providing comprehensive and
          personalized care for individuals struggling with substance use
          disorders.
        </Typography>
        
      <div className="grid place-items-center h-screen">
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/hands.png"
          className="h-[45rem] w-[45rem] rounded-xl object-cover"
        /></div>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Our team of experienced professionals is committed to creating a
          supportive environment where clients feel safe and valued. We
          recognize that each person&apos;s journey is unique, and we strive to
          tailor our services to meet the specific needs of every individual.
          Our mission is not just to treat addiction, but to empower individuals
          to reclaim their health, rebuild relationships, and rediscover their
          purpose.
        </Typography>{" "}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Overview;
