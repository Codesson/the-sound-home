"use client";

import { useEffect, useState, useRef } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Portfolio() {
  const caseList = [
    {
      mainImage: "",
      alt: "",
      detailImages: ["/images/example1.jpg", "/images/example2.jpg", "/images/example3.jpg"],
    },
  ];
  const [index, setIndex] = useState<number>(-1);
  const [showCase, setShowCase] = useState<string[]>([]);

  useEffect(() => {
    if (index < 0) {
      setShowCase([]);
    } else {
      setShowCase(caseList?.[index]?.detailImages);
    }
  }, [index]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-4xl">시공사례</h1>
      <div className="sub-title my-4 text-xl text-center">납품 및 시공실적</div>
      <div className="p-4 w-[100%] h-[100vh] max-w-[800px]">
        <RowsPhotoAlbum
          photos={[
            {
              src: "/images/example1.jpg",
              alt: "사례1",
              width: 1200,
              height: 860,
            },
            {
              src: "/images/example2.jpg",
              alt: "사례2",
              width: 1200,
              height: 860,
            },
            {
              src: "/images/example3.jpg",
              alt: "사례3",
              width: 1200,
              height: 860,
            },
            {
              src: "/images/example4.jpg",
              alt: "사례4",
              width: 1200,
              height: 860,
            },
          ]}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={[
            {
              src: "/images/example1.jpg",
              alt: "사례1",
              width: 1200,
              height: 860,
            },
            {
              src: "/images/example2.jpg",
              alt: "사례2",
              width: 1200,
              height: 860,
            },
            {
              src: "/images/example3.jpg",
              alt: "사례3",
              width: 1200,
              height: 860,
            },
          ]}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          zoom={{ maxZoomPixelRatio: 3 }}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
}
