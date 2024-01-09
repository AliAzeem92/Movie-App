function Header() {
  return (
    <div className="flex items-center">
      <div className="w-130 h-106 relative mt-3 ml-10 top-4 left-8 font-caros-bold text-2xl font-semibold leading-21.56px text-black">
        <h1 className="text-left">
          The <br />
          Movie <br />
          Tracker
        </h1>
      </div>
      <div className="w-60 h-50 ml-auto">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300 ease-out text-center"
          placeholder="🔍 Search a movie or a series"
        />
      </div>
    </div>
  );
}

export default Header;
