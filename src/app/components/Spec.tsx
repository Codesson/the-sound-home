import Image from "next/image";
import { Fragment } from "react";

export default function Spec() {
  //   const COMPABT_SPEC = {
  //     name: {
  //       label: "회사명",
  //       value: "더사운드 주식회사",
  //     },
  //     representative: {
  //       label: "대표자",
  //       value: "심 석 주",
  //     },
  //     address: {
  //       label: "소재지",
  //       value: "인천시 연수구 선학로90, 212호",
  //     },
  //     phone: {
  //       label: "연락처",
  //       value: "032-502-1002",
  //     },
  //     founded: {
  //       label: "설립일",
  //       value: "2008년 8월",
  //     },
  //     legalFounded: {
  //       label: "법인설립일",
  //       value: "2014년 5월",
  //     },
  //     licenseNo: {
  //       label: "사업자번호",
  //       value: "122-86-40010",
  //     },
  //     businessForm: {
  //       label: "업태",
  //       value: "제조/도·소매/서비스/정보통신공사",
  //     },
  //     businessType: {
  //       label: "업종",
  //       value:
  //         "음향영상, 특수조명, 네트워크장비, 전상장비, 부대장치, 공연장비대여, 소프트웨어개발업",
  //     },
  //   };

  const COMPANY_SPEC = [
    {
      label: "회사명",
      value: "더사운드 주식회사",
    },
    {
      label: "대표자",
      value: "심 석 주",
    },
    {
      label: "소재지",
      value: "인천시 연수구 선학로90, 212호",
    },
    {
      label: "연락처",
      value: "032-502-1002",
    },
    {
      label: "설립일",
      value: "2008년 8월",
    },
    {
      label: "법인설립일",
      value: "2014년 5월",
    },
    {
      label: "사업자번호",
      value: "122-86-40010",
    },
    {
      label: "업태",
      value: "제조/도·소매/서비스/정보통신공사",
    },
    {
      label: "업종",
      value:
        "음향영상, 특수조명, 네트워크장비, 전상장비, 부대장치, 공연장비대여, 소프트웨어개발업",
    },
  ];

  return (
    <section className="w-full p-4 flex">
      <div className="grid grid-cols-2 w-[50%] gap-4">
        {COMPANY_SPEC.map(({ label, value }, index) => (
          <Fragment key={index}>
            <div>{label}</div>
            <div>{value}</div>
          </Fragment>
        ))}
      </div>
      <div className="w-[50%] flex justify-end items-center">
        <Image
          src={"/isolated.png"}
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
    </section>
  );
}
