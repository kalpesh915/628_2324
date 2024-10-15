import { useEffect, useState } from "react";

function WeatherData() {
    
    let [searchCityname, setSearchCityName] = useState("Rajkot");
    let [cityname, setCityName] = useState("Rajkot");
    let [coordData, setCoordData] = useState({});
    let [weatherData1, setWeatherData1] = useState([]);
    let [mainData, setMainData] = useState({});
    let [windData, setWindData] = useState({});
    let [sysData, setSysData] = useState({});
    let [icon, setIcon] = useState("10d");

    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityname}&appid=5a5932a5ccb1805699367b71ff5ca345&units=metric`;
    const ICON = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    useEffect(() => {
        getWeatherData();
    }, []);

    function getWeatherData() {
        fetch(APIURL).then((response) => {
            response.json().then((result) => {
                if(result.cod === 200){
                    console.log(result);   
                    setCityName(result.name);
                    setCoordData(result.coord);
                    setWeatherData1(result.weather);
                    setMainData(result.main);
                    setWindData(result.wind);
                    setSysData(result.sys);
                    setIcon(result.weather[0].icon);
                }else{
                    alert("No City Found");   
                }
            })
        });
    }

    return <>
        <div className="container-fluid">
            <div className="card w-50 mx-auto">
                <div className="input-group my-3">
                    <input type="search" name="search" id="search" placeholder="Search Weather by City Name..." className="form-control" defaultValue={cityname} onInput={(e)=>setSearchCityName(e.target.value)}/>
                    <button type="button" className="btn btn-primary" onClick={()=>{getWeatherData()}}>Search</button>
                </div>
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={ICON}></img>
                        </div>
                        <div className="col-md-6">
                            <h1>{cityname} <sup>{sysData.country}</sup></h1>
                        </div>
                        <div className="col-md-6">
                            <h1>{weatherData1[0].main}</h1>
                        </div>
                        <div className="col-md-12">
                            <h3>{weatherData1[0].description}</h3>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            Temprature : {mainData.temp} &deg;C
                        </div>
                        <div className="col-md-3">
                            Min : {mainData.temp_min} &deg;C
                        </div>
                        <div className="col-md-3">
                            Max : {mainData.temp_max} &deg;C
                        </div>
                        <div className="col-md-3">
                            Humidity : {mainData.humidity} 
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col-md-4">
                            Wind Speed : {windData.speed}
                        </div>
                        <div className="col-md-4">
                            Wind Deg : {windData.deg}
                        </div>
                        <div className="col-md-4">
                            Wind Gust : {windData.gust}
                        </div>
                        
                    </div>
                </div>
                <div className="card-footer">

                </div>
            </div>
        </div>
    </>
}

export default WeatherData;