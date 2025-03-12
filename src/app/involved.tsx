"use client";

import { Typography } from "@material-tailwind/react";

export function Involved() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Get Involved
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          At Well Spring Health Services, we believe that recovery extends
          beyond individual treatment—it involves the whole community. We invite
          you to join us in our mission to support those struggling with
          substance use disorders through volunteering or donating.
          <br />
          <br />
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-4">
          Volunteer Opportunities
        </Typography>{" "}
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          {" "}
          Your time and talent can make a significant difference in the lives of
          those we serve. By volunteering with us, you can help create a
          supportive environment for individuals on their recovery journey.
          <br />
          <br />
        </Typography>{" "}
        <Typography variant="h4" color="blue-gray" className="mb-4">
          Interested?
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          {" "}
          Fill out our volunteer application form to get started!{" "}
          <a
            href="#contact"
            className="text-blue-500 underline hover:text-blue-700"
          >
            <br/>Volunteer Today
          </a>
        </Typography>
      </div>
    </section>
  );
}

export default Involved;
