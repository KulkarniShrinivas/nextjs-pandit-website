"use client"

import "./pujaPage.scss";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { servicesData } from "../../../../public/data/all-services-data";
import CustomButton from "@/app/_components/custom-button";
import { whatsappData } from "@/lib/whatsapp";
import Image from "next/image";


type Params = {
    params: {
        id: string;
    };
}

const PujaPage = ({params}: Params) => {
  const [pujaData, setPujaData] = useState<any>(null);
  const id = decodeURIComponent(params.id);

  useEffect(() => {
    const puja_data = servicesData.find((data) => {
        return data.title === id});
    setPujaData(puja_data);
  }, [id]);
  return (
    <>
      {pujaData && (
        <main className="puja-details-card">
          <Tilt>
            <Box
              sx={{
                borderRadius: "10px",
                width: "300px",
                height: "300px",
                position: "relative",
                overflow: "hidden",

                "@media (min-width: 1000px)": {
                  width: "400px",
                  height: "400px",
                },
              }}
              className="tilt-card"
            >
              <div className="img-container">
                <Image
                  src={pujaData?.src}
                  alt={pujaData?.title}
                  loading="lazy"
                  className="service-img"
                />
                <div className="gradient-overlay"></div>
              </div>
            </Box>
          </Tilt>

          <div className="puja-text-container">
            <div className="puja-header">
              <h1 className="puja-title font-bold text-3xl">{pujaData?.title}</h1>
              <div className="puja-btn">
                <CustomButton onClick={() => whatsappData()} text="Book Now" />
              </div>
            </div>

            <div className="animation-container">
              <section className="puja-desc">
                {pujaData?.description.map((data: any, index: number) => (
                  <p key={data + index}>{data}</p>
                ))}
              </section>

              <section className="puja-benefits-container">
                {pujaData?.benefits?.title && (
                  <h4 className="font-semibold">{pujaData?.benefits?.title}</h4>
                )}
                <ul>
                  {pujaData?.benefits?.points?.map((data: any, index: number) => (
                    <li className="py-2" key={data.title + index}>
                      <h5 className="font-semibold">{data.title}</h5>
                      <p>{data.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default PujaPage;
