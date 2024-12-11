import Image from "next/image";

export default function Introduce() {
  return (
    <section className="w-full h-full">
      <div className="w-full h-full relative">
        <Image
          className="-z-0 absolute"
          src={"/audience.jpg"}
          alt=""
          fill={true}
        />
        <div className="relative left-10 w-2/4 text-4xl top-32 font-bold text-center p-4 bg-neutral-600">
          <p>음향 영상 조명 LED</p>
          <p>맞춤형 설계 및 시공과 튜닝</p>
          <p>전문 업체</p>
        </div>
      </div>
    </section>
  );
}
