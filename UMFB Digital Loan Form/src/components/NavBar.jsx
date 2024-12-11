export default function NavBar() {
  return (
    <div className="w-full flex justify-end items-end bg-red-50">
      <div className="w-full bg-green-50 flex flex-col">
        <img
          style={{ width: "60px", height: "50px" }}
          src="./src/assets/mfb-logo.png"
          alt="logo"
        />
        <div>
          <h2 className="p-0">UNILAG Microfinance Bank</h2>
          <span className="text-right w-full ">
            ...empowering town and gown
          </span>
        </div>
      </div>
    </div>
  );
}
