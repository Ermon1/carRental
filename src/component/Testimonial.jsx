import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

import Image from '../assets/batcha.jpg'

const Testimonial = () => {
  return (
    <Card className="tw-max-w-md tw-mx-auto tw-shadow-lg tw-rounded-lg   tw-transition-all tw-ease-in-out tw-duration-1000   hover:tw-bg-gray-50 hover:tw-scale-110">
      <CardContent className="">
        <div className="tw-flex tw-justify-center tw-items-center">
          <CardMedia
            className=" tw-w-40 tw-h-40  tw-rounded-full tw-mr-4 tw-flex tw"
            image={Image}
            alt="Profile Image"
          />
        </div>
        <div>
          <Typography variant="h6" className="tw-font-bold tw-text-center ">
            John Doe
          </Typography>
          <Typography
            variant="subtitle1"
            className="tw-text-gray-500 tw-text-bold tw-text-center"
          >
            CEO, Company Name
          </Typography>
        </div>
      </CardContent>
      <CardContent>
        <Typography variant="body1" className="tw-text-gray-700">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          consectetur est, in ultrices ipsum pellentesque a. Aliquam eget
          ultricies magna. Pellentesque nec urna vel felis rutrum efficitur.
          Quisque feugiat magna et tortor sagittis, sed dictum nulla interdum."
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
