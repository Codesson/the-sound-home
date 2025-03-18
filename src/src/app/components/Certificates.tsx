import Image from "next/image";
export default function Certificates() {
  const certificatesInfo = [
    {
      label: "사업자등록증",
      src: "/insurance.png",
      alt: "",
    },
    {
      label: "정보통신공사업등록증",
      src: "/insurance.png",
      alt: "",
    },
    {
      label: "소프트웨어사업자",
      src: "/insurance.png",
      alt: "",
    },
    {
      label: "중소기업확인서",
      src: "/insurance.png",
      alt: "",
    },
  ];

  return (
    <section className="flex flex-col justify-start items-center py-20 h-[90vh] gap-10">
      <h2 className="w-fit font-bold mb-4 h-fit tracking-[.25em]">인증현황</h2>
      <div className="flex flex-row justify-around gap-14 px-12 py-8 w-full">
        {certificatesInfo.map((info, index) => (
          <div key={index}>
            <div className="bg-white p-1">
              <Image width={180} height={300} alt={info.alt} src={info.src} />
            </div>

            <div className="text-center mt-3">{info.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
