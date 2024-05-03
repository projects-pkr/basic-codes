import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

function ReactSliderBasic() {
  const [index, setIndex] = useState(0);

  const items = [
    { id: 1, content: <Box sx={{ height: "100vh", width: "100vw", backgroundColor: 'red' }}>this is slider-1</Box> },
    { id: 2, content: <Box sx={{ height: "100vh", width: "100vw", backgroundColor: 'blue' }}>this is slider-2</Box> },
    { id: 3, content: <Box sx={{ height: "100vh", width: "100vw", backgroundColor: 'green' }}>this is slider-3</Box> }
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(id); // Cleanup the interval on component unmount
  }, []); // Empty dependency array to run effect only once on mount

  const slideWidth = 100; // Assuming each slide occupies 100% width

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handleIndicatorClick = (itemIndex) => {
    setIndex(itemIndex);
  };

  return (
    <div>
      <h2>Hello, I'm a React Slider</h2>
      <Box className='slider' sx={{
        position: 'relative',
        width: '100%',
        height: '100vh', /* Adjust as needed */
        overflow: 'hidden'
      }}>
        {items.map((item, idx) => (
          <Box
            key={item.id}
            className="slider-item"
            sx={{
              position: 'absolute',
              top: 0,
              left: `${slideWidth * (idx - index)}%`, // Adjust slide position based on index
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: item.content.props.sx.backgroundColor,
              transition: 'left 0.3s ease-in-out'
            }}
          >
            {item.content}
          </Box>
        ))}
        <Box className='slider-controls' sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: '20px',
          width: '100%'
        }}>
          <button onClick={handlePrev} style={{ marginRight: '20px' }}>
            Prev
          </button>
          <Box className='slider-indicator'>
            {items.map((_, idx) => (
              <span
                key={idx}
                className={`slider-indicator-item ${index === idx ? 'active' : ''}`}
                onClick={() => handleIndicatorClick(idx)}
                style={{ cursor: 'pointer', margin: '0 5px' }}
              >
                {idx + 1}
              </span>
            ))}
          </Box>
          <button onClick={handleNext} style={{ marginLeft: '20px' }}>
            Next
          </button>
        </Box>
      </Box>
    </div>
  );
}

export default ReactSliderBasic;
