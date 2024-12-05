import bg from "./assets/image/bg-1.jpg";

function App() {
  return (
    <>
      <section
        className="pt-10 pb-20 min-h-screen bg-cover bg-fixed"
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
                  <p className="font-raleway font-semibold text-sm text-primary text-shadow">Today, 10 Oct 2020</p>
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

            <div className="w-full p-5 mt-5 bg-slate-300 bg-opacity-15 backdrop-blur-sm rounded-lg">
              <div className="w-full flex">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
