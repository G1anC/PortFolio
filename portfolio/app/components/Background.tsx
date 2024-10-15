import React from 'react';

const Background = () => {
	  return (
	<div className="fixed z-[-1] inset-0" style={{
		backgroundImage: "url('/images/bg*.png')",
		backgroundSize: "fit",
		backgroundPosition: "top right",
		backgroundRepeat: "no-repeat",
	}}/>
  );
}

export default Background;