import React from "react";
import Testimonial from "./Testimonial";
import Footer from './Footer'
const About = () => {
  return (
    <div>
      <div className="tw-flex tw-flex-col tw-items-center tw-w-[80%] tw-py-12 sm:px-6 lg:px-8">
        <h1 className="tw-text-4xl tw-font-bold tw-mb-6">About Us</h1>
        <section className=" tw-mx-auto tw-w-[80%]">
          <h2 className="tw-text-2xl tw-font-bold tw-mb-4">Introduction</h2>
          <p className="tw-text-lg tw-mb-6">
            Welcome to Addis Car Rental Company, your premier destination for
            reliable and affordable car rentals in the city of Addis Ababa. With
            a rich history spanning over two decades, we have been serving both
            locals and tourists with top-notch transportation solutions. As
            pioneers in the car rental industry, we take pride in providing
            exceptional customer service and a diverse fleet of well-maintained
            vehicles to cater to all your needs.
          </p>
          <p className="tw-text-lg tw-mb-6">
            Our mission is to make your journey comfortable, convenient, and
            memorable. Whether you're visiting Addis Ababa for business or
            pleasure, we offer a wide range of vehicles to suit your
            requirements. From compact cars for solo travelers to spacious SUVs
            for families, we have the perfect option for everyone. Our
            commitment to quality and customer satisfaction sets us apart from
            the rest.
          </p>
          <p className="tw-text-lg tw-mb-6">
            At Addis Car Rental Company, we prioritize safety and reliability.
            Our vehicles undergo regular maintenance and thorough inspections to
            ensure your peace of mind during your travels. We also provide
            flexible rental plans, affordable rates, and convenient pickup and
            drop-off locations to make your experience hassle-free.
          </p>
          <p className="tw-text-lg tw-mb-6">
            Experience the beauty of Addis Ababa and its surroundings with the
            trusted services of Addis Car Rental Company. We are dedicated to
            exceeding your expectations and making your journey in Ethiopia a
            memorable one. Contact us today and let us be your partner in
            exploration and adventure!
          </p>
        </section>
      </div>
      <div className=" tw-w-full tw-bg-gray-300">
        <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-center">
          Customer Satisfaction
        </h2>
        <div className="tw-grid md:tw-grid-cols-2  lg:tw-grid-cols-3 tw-gap-12  sm:tw-grid-cols-1 tw-items-center tw-justify-center tw-p-8">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>

      <div className="tw-flex tw-flex-col tw-items-center tw-w-[80%] tw-py-12 sm:px-6 lg:px-8">
        <h1 className="tw-text-4xl tw-font-bold tw-mb-6"> Safety Measures</h1>
        <section className=" tw-text-gray-700 tw-w-[80%] tw-mx-auto sm:tw-px-6  tw-px-6  lg:tw-px-8">
          <div className="tw-container tw-mx-auto sm:tw-px-6  lg:tw-px-8">
            <h2 className="tw-text-3xl tw-font-bold tw-mb-4 tw-text-center ">
              Assuring Your Safety
            </h2>
            <p className="tw-text-lg tw-mb-6 ">
              At XYZ Car Rentals, we prioritize the safety and well-being of our
              customers. We have implemented strict safety measures to ensure a
              secure rental experience for everyone.
            </p>
            <div className="tw-mb-8">
              <h3 className="tw-text-xl tw-font-bold tw-mb-2 tw-text-center">
                Thorough Cleaning and Sanitization
              </h3>
              <p className="tw-text-lg">
                All our rental vehicles undergo a thorough cleaning and
                sanitization process before and after each use. We follow
                industry-standard cleaning protocols to disinfect high-touch
                areas such as steering wheels, door handles, and control panels.
              </p>
            </div>
            <div className="tw-mb-8">
              <h3 className="tw-text-xl tw-font-bold tw-mb-2 tw-text-center">
                Regular Maintenance and Inspections
              </h3>
              <p className="tw-text-lg">
                Our rental vehicles undergo regular maintenance and inspections
                to ensure they are in optimal condition. Our experienced
                technicians perform routine checks to address any mechanical or
                safety issues promptly.
              </p>
            </div>

            <div className="tw-mb-8">
              <h3 className="tw-text-xl tw-font-bold tw-mb-2 tw-text-center">
                Flexible Cancellation and Rescheduling
              </h3>
              <p className="tw-text-lg">
                We understand that plans can change unexpectedly. That's why we
                offer flexible cancellation and rescheduling options. If your
                travel plans are affected, you can easily modify or cancel your
                reservation without incurring any additional fees.
              </p>
            </div>
            <p className="tw-text-lg">
              Your safety is our top priority. We are committed to providing a
              secure and worry-free rental experience for all our customers.
              Book with confidence and enjoy your journey with XYZ Car Rentals.
            </p>
          </div>
        </section>
      </div>

      
      <section>
        <div className="tw-container tw-mx-auto lg:tw-w-[80%] tw-px-4 tw-py-8">
          <h2 className="tw-text-3xl tw-font-bold tw-mb-4 tw-text-center">
            Contact Us
          </h2>
          <p className="tw-mb-6 tw-text-center">
            We are here to assist you. Please feel free to reach out to us with
            any questions or inquiries.
          </p>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between  md:tw-gap-3 lg:tw-gap-10">
            <div className="">
              <h3 className="tw-text-xl tw-font-bold tw-mb-2">
                Contact Information
              </h3>
              <p className="tw-mb-2">
                <strong>Address:</strong> newman building, arada , Addis Abeba,
                Ethiopia
              </p>
              <p className="tw-mb-2">
                <strong>Phone:</strong> +251 95677890
              </p>
              <p className="tw-mb-2">
                <strong>Email:</strong> Adisinfo@carrentals.com
              </p>
              <p>
                <strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 5:00
                PM
              </p>
            </div>
            <div className="md:tw-w-1/2">
              <h3 className="tw-text-xl tw-font-bold tw-mb-2">Contact Form</h3>
              <form>
                <div className="tw-mb-4">
                  <label className="tw-block tw-mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="tw-w-full tw-border tw-border-gray-300 tw-rounded tw-py-2 tw-px-3"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="tw-mb-4">
                  <label className="tw-block tw-mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="tw-w-full tw-border tw-border-gray-300 tw-rounded tw-py-2 tw-px-3"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="tw-mb-4">
                  <label className="tw-block tw-mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="tw-w-full tw-border tw-border-gray-300 tw-rounded tw-py-2 tw-px-3"
                    id="message"
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-w-full tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
