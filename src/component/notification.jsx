import { Box } from "@mui/material";
import { useState } from "react";

const AddToCart = () => {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(true);
    console.log("handleClick button is clicked");
  };

  const handleRedirect = () => {
    console.log("redirect button is clicked");
    window.location.assign("http://localhost:3000/");
  };
  return (
    <>
      <Box>
        <h1>Notification component</h1>
        {value && <p>Complete</p>}
        <button onClick={!value ? handleClick : handleRedirect}>
          {!value ? "mark as a read" : "go to the next"}
        </button>
      </Box>
    </>
  );
};

export { AddToCart };
