"use client";

import { Typography } from "@material-tailwind/react";

export function Donate() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Donate
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Your generous donations help us provide essential services and
          resources to individuals in need. Every contribution, no matter the
          size, makes a meaningful impact on our ability to support those on
          their path to recovery.
          <br />
          <br />
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-4">
          How Your Donation Helps:
        </Typography>{" "}
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          {" "}
          <li>Provides access to essential treatment services</li>
          <li>Supports educational resources for clients and families</li>
          <li>
            Funds community outreach programs to raise awareness about substance
            use disorders
          </li><br/>
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-4">
          Make a Donation Today
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
                    <a
            href="#contact"
            className="text-blue-500 underline hover:text-blue-700"
          >
            <br/>Donate
          </a>
        </Typography>
      </div>
    </section>
  );
}

export default Donate;
