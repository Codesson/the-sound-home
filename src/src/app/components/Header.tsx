'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Headers() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full flex row justify-between p-4 z-10 bg-black ${
        isScrolled ? "border-b-neutral-600 shadow-md" : ""
      }`}>
      <div className="flex row items-center gap-4">
        <Image src={"/images/wave-sound.png"} alt="" width={36} height={36} />
        <span className="text-2xl font-bold">The Sound</span>
      </div>
      <ul className="flex row gap-6 text-base mr-8">
        <li>
          <Link href="/introduce">회사소개</Link>
        </li>
        <li>
          <Link href="/products">제품소개</Link>
        </li>
        <li>
          <Link href="/portfolio">시공사례</Link>
        </li>
        <li>
          <Link href="/questions">문의사항</Link>
        </li>
        <li>
          <Link href="/support">고객지원</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
      </ul>
    </div>
  );
}
