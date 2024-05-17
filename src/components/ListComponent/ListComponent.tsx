import React from "react";
//import { ListItemComponent } from "../ListItemComponent/ListItemComponent";
import { ICity } from "../../models/ICity";

interface ListComponentProps {
	cities: ICity[];
	activeCity: ICity;
	setActiveCity: React.Dispatch<React.SetStateAction<ICity>>;
}

export const ListComponent: React.FC<ListComponentProps> = ({ cities, activeCity, setActiveCity }) => {
	const citiesListItemArray = cities.map((city: ICity) => (
		<li
            key={city.cityName}
            className={city.cityName === activeCity.cityName ? "active-city" : ""}
            onClick={() => setActiveCity(city)}
            >

            {city.cityName}
        </li>
	));

	return <ul>{citiesListItemArray}</ul>;
};