import Image from "next/image";

export default function Organization() {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <h2 className="w-fit mt-20">조직도</h2>
      <div className="relative w-[90vw] min-h-[50vw]">
        <Image
          src={"/images/organization.png"}
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
