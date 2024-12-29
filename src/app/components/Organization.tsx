import Image from "next/image";

export default function Organization() {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <h3 className="w-fit text-4xl mt-20">조직도</h3>
      <div className="relative w-[90vw] min-h-[50vw]">
        <Image
          src={"/organization.png"}
          alt=""
          // width={500}
          // height={200}
          fill={true}
          priority={false}
          style={{ objectFit: "contain", paddingLeft: 10 }}
        />
      </div>
    </section>
  );
}
