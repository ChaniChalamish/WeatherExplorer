import { cities } from "./constants";
import WeatherCard from "./components/WeatherCard";
const App = () => {
    return (
    <div className="cards"> 
      {cities.map((item,index)=><WeatherCard key={index} city={item}/>)}
    </div>
  );
};
export default App;
