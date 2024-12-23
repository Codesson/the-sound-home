export default function Organization() {
  return (
    <section>
      <h3>조직도</h3>
      <div className="w-18 h-18 border-2 border-[#ffffff] rounded-full p-4">
        CEO
      </div>
      <div>
        <div className="d-inline w-18 h-18 border-2 border-[#ffffff] rounded-full p-4">
          영업팀
        </div>
        <div className="w-18 h-18 border-2 border-[#ffffff] rounded-full p-4">
          지원팀팀
        </div>
      </div>
    </section>
  );
}
