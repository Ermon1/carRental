import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="tw-bg-sky-900 tw-text-white tw-py-12">
      <div className="tw-container tw-mx-auto tw-grid tw-grid-cols-1 tw-gap-8 sm:tw-grid-cols-2 md:tw-grid-cols-4">
        <div className="tw-flex tw-items-center tw-gap-2">
          <i className="ri-car-line tw-text-4xl"></i>
          <h1 className="tw-text-2xl tw-font-bold">
            <Link to="/home">Rent Car Service</Link>
          </h1>
        </div>
        <div>
          <h5 className="tw-text-xl tw-font-bold tw-mb-4">Quick Links</h5>
          <ListGroup>
            {quickLinks.map((item, index) => (
              <ListGroupItem
                key={index}
                className="tw-p-0 tw-mt-3 tw-bg-inherit tw-text-white tw-border-none"
              >
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
        <div>
          <h5 className="tw-text-xl tw-font-bold tw-mb-4">Head Office</h5>
          <p className="tw-office__info">123 Addis abeba, arada, Ethiopia</p>
          <p className="tw-office__info">Phone: +0963742233</p>
          <p className="tw-office__info">Email: newlife@gmail.com</p>
          <p className="tw-office__info">Office Time: 8am - 5pm</p>
        </div>
        <div>
          <h5 className="tw-text-xl tw-font-bold">Newsletter</h5>
          <p className="tw-mt-2 tw-text-sm">Subscribe to our newsletter</p>
          <div className="tw-flex tw-mt-2 tw-flex-col sm:tw-flex-row">
            <input
              type="email"
              placeholder="Email"
              className="tw-px-4 tw-overflow-hidden tw-py-2 tw-bg-gray-700 tw-text-white tw-rounded-l-md tw-outline-none sm:tw:mr-2 sm:tw:w-48"
            />
            <span className="tw-bg-gray-600 tw-px-4 tw-py-2 tw-rounded-r-md">
              <i className="ri-send-plane-line tw-text-white"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="tw-container tw-mx-auto tw-mt-8 tw-text-center">
        <p className="tw-text-sm">
          <span className="tw-mr-1">
            <i className="ri-copyright-line"></i>
          </span>
          &copy; {year}, Developed by Group 8 UoG Student. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
