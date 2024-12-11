import Image from "next/image";
import Link from "next/link";

export default function Headers() {
  return (
    <div className="absolute w-full flex row justify-between p-4 z-10">
      <Image src={"/wave-sound.png"} alt="" width={36} height={36} />
      <ul className="flex row gap-2">
        <li>
          <Link href="/introduce">회사소개</Link>
        </li>
        <li>
          <Link href="/business">주요사업</Link>
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
