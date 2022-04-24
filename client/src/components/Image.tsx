import React from "react";

type PropTypes = {
  src?: string;
  alt?: string;
  width: number;
  height: number;
};
export function Image({ src, alt, width, height }: PropTypes) {
  return (
    <picture>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
    </picture>
  );
}
