import Box from "@mui/material/Box";
import "./styles.js";
import Tilt from "react-parallax-tilt";
import { serviceCardStyles } from "./styles.js";
import Image, { StaticImageData } from "next/image.js";

type Props = {
  text: string;
  src: StaticImageData;
  handleClick(): void;
}

const ServiceCard = ({ text, src, handleClick }: Props) => {
  return (
    <Tilt>
      <Box onClick={handleClick} sx={serviceCardStyles}>
        <div className="img-container">
          <Image src={src} alt={text} loading="lazy" className="service-img" />
          <div className="gradient-overlay"></div>
        </div>
        <div className="text">
          <h3>{text}</h3>
        </div>
      </Box>
    </Tilt>
  );
};

export default ServiceCard;
