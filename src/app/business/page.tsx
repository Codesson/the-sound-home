import Image from "next/image";

export default function Business() {
  const businessParts = [
    {
      title: "음향",
      subscription: `최고의 엔지니어가
셋팅 및 튜닝으로
최상의 사운드를
제공해 드립니다`,
      url: "/music.png",
      alt: "",
    },
    {
      title: "영상",
      subscription: `합당한 컨설팅과 셋팅으로
최고의 영상물을
제공해 드립니다.`,
      url: "/3d-video.png",
      alt: "",
    },
    {
      title: "조명",
      subscription: `전문 조명감독이 현장에 맞는
다양한 디자인으로 수준높은
조명을 제공해 드립니다.`,
      url: "/spotlights.png",
      alt: "",
    },
    {
      title: "LED(전광판)",
      subscription: `최고의 제품으로 가장
만족할수 있는 셋팅 및 AS를
제공해 드립니다.`,
      url: "/led.png",
      alt: "",
    },
  ];

  return (
    <section className="pt-[10%] h-[100vh]">
      <h1 className="text-center text-4xl">주요사업</h1>
      <div className="sub-title my-4 text-xl text-center">
        최고의 기술과 최고의 장비로 제공하는 서비스
      </div>
      <div className="flex gap-4 mt-20 justify-center">
        {businessParts.map((part) => (
          <div className="flex flex-col w-[250px] items-center">
            <div className="bg-white">
              <Image src={part.url} width={200} height={200} alt="" />
            </div>
            <div>{part.title}</div>
            <div className="w-[180px]">{part.subscription}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
