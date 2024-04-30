import React from "react";

function OptImage({ src, alt, toggle, ...props }) {
  return <img src={src} alt={alt} {...props} />;
}

export default OptImage;
