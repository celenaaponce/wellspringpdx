"use client";

import { Typography } from "@material-tailwind/react";

export function Privacy() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Privacy Policy
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          At Well Spring Health Services, your privacy is important to us. We
          are committed to protecting your personal information and ensuring
          that it is used responsibly.
        </Typography>
      </div>
    </section>
  );
}

export default Privacy;
