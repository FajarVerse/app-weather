import bg from "./assets/image/bg-1.jpg";

function App() {
  return (
    <>
      <section
        className="pt-9 pb-20 min-h-screen bg-cover bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="w-full px-7">
            <div className="w-full">
              <h2 className="font-quicksand font-extrabold text-4xl text-primary text-shadow">
                Jakarta
              </h2>
            </div>

            <div className="w-full px-2 mt-40">
              <div className="w-full flex gap-5 items-center">
                <div className="w-auto">
                  <p className="font-raleway font-semibold text-sm text-primary text-shadow">
                    Today, 10 Oct 2020
                  </p>
                  <h1 className="font-quicksand font-bold text-8xl text-primary text-shadow ">
                    30
                  </h1>
                </div>
                <div className="w-auto self-end py-2">
                  <h3 className="font-raleway font-semibold text-xl text-primary text-shadow">
                    Mendung
                  </h3>
                  <p className="font-raleway font-medium text-base text-primary text-shadow">
                    Terasa sedikit dingin
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full p-3 mt-5 bg-slate-300 bg-opacity-30 backdrop-blur-sm rounded-lg">
              <div className="w-full mt-0.5 mb-3">
                <h3 className="font-quicksand font-bold text-lg text-primary flex gap-2 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#ffffff"
                    >
                      <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                    </svg>
                  </span>
                  <span className="">Pantau Cuaca Harianmu</span>
                </h3>
              </div>
              <div className="w-full flex gap-5 overflow-x-scroll scroll-bar">
                <div className="w-auto px-3 py-3 bg-second rounded-md flex gap-6 justify-between items-center hover:bg-semilight group transition duration-300 ease-in-out">
                  <div className="w-1/2">
                    <p className="desc-card">
                      hari Ini
                    </p>
                    <h4 className="font-quicksand font-semibold text-lg text-primary group-hover:text-gray-600 transition duration-300 ease-in">
                      25
                    </h4>
                    <p className="desc-card">
                      Mendung
                    </p>
                  </div>
                  <div className="w-1/2 pr-0.5 self-start">
                    <div className="w-8 h-8 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
