"use client"

import { ParallaxScrollSecond } from "@/app/_components/parallax-photo-gallery";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { btnTextPhoto, photoGalleryData, vipPhotosData } from "../../../../public/data/photo-gallery-data";
import ServicesButton from "@/app/_components/all-services/services-button";
import "./photoGallery.scss"

type Params = {
    params: {
        id: string;
    };
}


export default function PhotoGallery({ params }: Params) {
    const allData = [...vipPhotosData.map(d => d.img), ...photoGalleryData.map(d => d.img)];

    return (
        <main className="Photo-Gallery">
            {/* <div className="btn-container">
                {btnTextPhoto.map((btn) => (
                    <ServicesButton
                        category={btn.category}
                        text={btn.text}
                        key={btn.text}
                        id={params.id}
                        handleClick={() => {}
                            // btnClickHandler(navigate, isDesktopScreen, btn.category)
                        }
                    />
                ))}
            </div> */}

            {allData &&
                <ParallaxScrollSecond
                    images={allData}
                    className="bg-[var(--primary-color)]"
                />
            }
        </main>

    )
}