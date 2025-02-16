export default function Footer() {
  return (
    <footer className="bg-(--background) w-full h-[10vh] absolute bottom-0 px-(--padding-x) flex items-center">
      <div className="w-full h-9 flex items-center">
        <input
          type="text"
          className="w-[85%] h-full bg-(--white)  pl-3 rounded-l-2xl"
        />
        <button className="w-[15%] h-full bg-(--melon) rounded-r-2xl cursor-pointer">
          <span className="text-xl">Add</span>
        </button>
      </div>
    </footer>
  );
}
