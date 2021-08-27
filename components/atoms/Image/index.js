import NextImage from "next/image";

const Image = ({ src, alt = "", ...imageProps }) => {
  return <NextImage src={src} alt={alt} {...imageProps} />;
};

export default Image;
