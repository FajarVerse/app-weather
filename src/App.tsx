import CurrentWeatherApp from "./components/fragments/CurrentWeatherApp";
import DailyForecast from "./components/fragments/DailyForecast";
import HeaderApp from "./components/fragments/HeaderApp";
import HourlyForecast from "./components/fragments/HourlyForecast";
import AuthLayout from "./components/layout/AuthLayout";

function App() {
  return (
    <>
      <AuthLayout>
        <div className="container w-full h-full mx-auto">
          <div className="w-full px-6 md:px-20 lg:h-full lg:px-16 lg:flex xl:px-20">
            <div className="block lg:w-3/4 lg:flex lg:flex-col lg:justify-between">
              <HeaderApp />
              <CurrentWeatherApp />
            </div>

            <div className="block lg:w-1/2 lg:h-full">
              <DailyForecast />
              <HourlyForecast />
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}

export default App;
