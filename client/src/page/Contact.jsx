import React from "react";
import Footer from "../component/Footer";

const Contact = () => {
  return (
    <>
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
    </>
  );
};
export default Contact;
