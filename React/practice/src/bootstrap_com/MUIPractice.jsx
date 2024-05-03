import React from "react";
import { Slider,Box } from "@mui/material";

export default function MUIPractice() {
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Small steps"
          defaultValue={8}
          getAriaValueText={valuetext}
          step={1}
          marks
          min={6}
          max={20}
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
}
