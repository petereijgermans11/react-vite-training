
import './index.scss'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomePage from './pages/HomePage/HomePage';
import AddPage from './pages/AddPage/AddPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ICity } from './models/ICity';
import axios from 'axios';

function App() {
  const [cities, setCities] = useState<ICity[]>([]);
  const [activeCity, setActiveCity] = useState<ICity>({} as ICity);

  useEffect(() => {
    axios.get('data/cities.json')
         .then(response => {
               setCities(response.data.citiesDummy)
               setActiveCity(response.data.citiesDummy[0])
          }
    );
  }, []);

  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage cities={cities} activeCity={activeCity} setActiveCity={setActiveCity} />} />
        <Route path="/add" element={<AddPage setCities={setCities} cities={cities} />} />
      </Routes>

      {cities.map((city: ICity) => (
        <div key={city.id} onClick={() => setActiveCity(city)}>
          {city.cityName}
        </div>
      ))}
    </>
  )
};

export default App
