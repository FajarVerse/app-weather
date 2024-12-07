import bg from "./assets/image/bg-1.jpg";
import Header from "./components/elements/Header";
import Paragraph from "./components/elements/Paragraph";
import SubHeader from "./components/elements/SubHeader";
import Temperature from "./components/elements/Temperature";
import Weather from "./components/elements/Weather";
import CardWeather from "./components/fragments/CardWeather";
import HeaderApp from "./components/fragments/headerApp";
import ForecastLayout from "./components/layout/ForecastLayout";

function App() {
  return (
    <>
      <section
        className="py-9 bg-cover bg-fixed lg:h-screen "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container w-full h-full mx-auto">
          <div className="w-full px-6 md:px-20 lg:h-full lg:px-16 lg:flex xl:px-20">
            <div className="block lg:w-3/4 lg:flex lg:flex-col lg:justify-between">
              {/* <div className="w-full flex justify-between lg:justify-normal lg:gap-10">
                <Header>Bekasi</Header>
                <Header>03.00</Header>
              </div> */}
              <HeaderApp />

              <div className="w-full px-2 mt-40 flex gap-5 items-center lg:mt-0 lg:px-0">
                <div className="w-auto">
                  <Paragraph>Today, 10 Oct 2020</Paragraph>
                  <Temperature>30</Temperature>
                </div>
                <div className="w-auto self-end py-2">
                  <Weather>Mendung</Weather>
                  <Paragraph>Terasa sedikit dingin</Paragraph>
                </div>
              </div>
            </div>

            <div className="block lg:w-1/2 lg:h-full">
              <ForecastLayout>
                <div className="w-full mt-0.5 mb-3">
                  <SubHeader
                    icon={
                      <svg
                        className="w-6 h-6 lg:w-7 lg:h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#ffffff"
                      >
                        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                      </svg>
                    }
                  >
                    Pantau Cuaca Harianmu
                  </SubHeader>
                </div>
                <div className="w-full flex gap-5 overflow-x-scroll scroll-bar">
                  <CardWeather>
                    <CardWeather.CardDesc temp={30} weather="Mendung" />
                    <CardWeather.CardIcon
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                          fill="#ffffff"
                        >
                          <path d="m462 0 94-107-80-40 116-133h106l-94 107 80 40L568 0H462ZM222 0l94-107-80-40 116-133h106l-94 107 80 40L328 0H222Zm78-320q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z" />
                        </svg>
                      }
                    />
                  </CardWeather>
                </div>
              </ForecastLayout>

              <ForecastLayout classname="flex-wrap">
                <div className="w-full mt-0.5 mb-3">
                  <SubHeader
                    icon={
                      <svg
                        className="w-6 h-6 lg:w-7 lg:h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#ffffff"
                      >
                        <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                      </svg>
                    }
                  >
                    Pantau Langit Setiap Jam
                  </SubHeader>
                </div>
                <div className="w-full flex gap-5 overflow-x-scroll scroll-bar xl:flex-wrap xl:justify-center xl:gap-6">
                  <CardWeather>
                    <CardWeather.CardDesc temp={30} weather="Mendung" />
                    <CardWeather.CardIcon
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                          fill="#ffffff"
                        >
                          <path d="m462 0 94-107-80-40 116-133h106l-94 107 80 40L568 0H462ZM222 0l94-107-80-40 116-133h106l-94 107 80 40L328 0H222Zm78-320q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z" />
                        </svg>
                      }
                    />
                  </CardWeather>
                </div>
              </ForecastLayout>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
