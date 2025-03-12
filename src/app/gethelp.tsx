"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

interface HelpProps {
  id?: string; // Make the id optional
}

export function GetHelp({ id }: HelpProps) {
  const [active, setActive] = React.useState(3);

  return (
    <section id={id} className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Get Help Now
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Your journey to recovery starts here. At Well Spring, we understand
            that taking the first step can be challenging, but you don’t have to
            do it alone. Our dedicated team is here to support you with
            compassion and expertise.
          </Typography>
        </div>
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h4" color="blue-gray" className="mb-4">
            Are You Ready to Take the Next Step?
          </Typography>
          {/* Ensure <Typography> for each step is using correct tags */}
          <div>
            <Typography as="h5" variant="h5" color="blue-gray" className="mb-4">
              1. Schedule a Consultation:
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
            >
              Meet with one of our experienced professionals to discuss your
              needs and develop a personalized treatment plan.
              <br />
              <br />
              <a
                href="#contact"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Schedule Here
              </a>
            </Typography>
          </div>

          <div>
            <Typography as="h5" variant="h5" color="blue-gray" className="mb-4">
              2. Reach Out for Immediate Support:
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
            >
              If you need assistance or have questions, our team is available to
              help you. <br />
              Phone: (971) 386-7358 <br />
              Email: info@wellspringpdx.org <br /> <br />
            </Typography>
          </div>

          <div>
            <Typography as="h5" variant="h5" color="blue-gray" className="mb-4">
              3. Visit Us:
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
            >
              We welcome you to our facility to learn more about our services
              and how we can support you on your path to recovery. <br />
              Address: 8401 NE Halsey St. Suite 101, <br />
              Portland OR, 97220
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetHelp;
