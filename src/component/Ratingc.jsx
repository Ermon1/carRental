import React from "react";
import { Stack, Rating } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
function Ratingc() {
  const [value, setValue] = useState(null);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        
      />
    </Stack>
  );
}

export default Ratingc;
