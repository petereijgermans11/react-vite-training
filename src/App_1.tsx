
import './index.scss'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomePage from './pages/HomePage/HomePage';
import AddPage from './pages/AddPage/AddPage';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { citiesDummy } from './cities.json';
import { ICity } from './models/ICity';

function App() {
  const [cities, setCities] = useState<ICity[]>(citiesDummy);
  const [activeCity, setActiveCity] = useState<ICity>({} as ICity);

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
