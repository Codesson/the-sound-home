import Image from "next/image";

export default function Greetings() {
  return (
    <section className="flex py-8">
      <div className="w-[50%]">
        <Image
          src={"/mic-double.jpg"}
          width={800}
          height={700}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
      <div className="w-[50%] p-2">
        <p className="text-xl">음향 영상 조명 LED 올인원 전문 시공 업체</p>
        <p className="text-4xl">The Sound</p>

        <div className="mt-4">
          <div className="leading-10">
            저희 THE SOUND를 찾아 주셔서 감사합니다. 더사운드는 음향 영상 조명
            LED등 필요한 모든 방송장비를 프로 엔지니어가 컨설팅 및 설치 튜닝하는
            전문 업체 입니다. 항상 여러분이 만족하는 스타일로 서비스를
            제공하려고 항상 노력하고 있습니다. 더욱더 좋은 서비스로 보답할수
            있는 더사운드가 되도록 노력 하겠습니다. 감사합니다.
          </div>
          <div className="flex gap-3 justify-end mt-4">
            <span>CEO</span>
            <span>심 석 주</span>
          </div>
        </div>
      </div>
    </section>
  );
}
