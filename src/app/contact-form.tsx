"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
interface ContactProps {
  id?: string; // Make the id optional
}
export function ContactForm({ id }: ContactProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "Treatment",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ltu9gfi", // Replace with your EmailJS Service ID
        "template_2x75cz5", // Replace with your EmailJS Template ID
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          type: formData.type,
          message: formData.message,
        },
        "yn8GpHnSI9L0_bNvc" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setLoading(false);
          setFormData({ firstName: "", lastName: "", email: "", type: "Treatment", message: "" });
        },
        () => {
          setSuccess(false);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <section id={id} className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Us
        </Typography>
        <Typography variant="lead" className="mx-auto w-full lg:w-5/12 !text-gray-500">
          Ready to get started? Fill out the contact form and we will get back to you.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +1 971-386-7358
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  info@wellspringpdx.com
                </Typography>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={sendEmail}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="firstName"
                    placeholder="Lucas"
                    value={formData.firstName}
                    onChange={handleChange}
                    containerProps={{ className: "!min-w-full mb-3 md:mb-0" }}
                    crossOrigin={undefined}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="lastName"
                    placeholder="Jones"
                    value={formData.lastName}
                    onChange={handleChange}
                    containerProps={{ className: "!min-w-full" }}
                    crossOrigin={undefined}
                  />
                </div>
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  placeholder="lucas@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  containerProps={{ className: "!min-w-full mb-8" }}
                  crossOrigin={undefined}
                />
                <Typography variant="lead" className="!text-blue-gray-500 text-sm mb-2">
                  What are you interested in?
                </Typography>
                <div className="-ml-3 mb-14">
                  {["Treatment", "Volunteering", "Donating"].map((option) => (
                    <Radio
                      key={option}
                      color="gray"
                      name="type"
                      label={option}
                      value={option}
                      checked={formData.type === option}
                      onChange={handleChange}
                      crossOrigin={undefined}
                    />
                  ))}
                </div>
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  containerProps={{ className: "!min-w-full mb-8" }}
                />
                <div className="w-full flex justify-end">
                  <Button type="submit" className="w-full md:w-fit" color="gray" size="md" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
              {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
              {error && <p className="text-red-500 mt-4">Failed to send message. Try again later.</p>}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
