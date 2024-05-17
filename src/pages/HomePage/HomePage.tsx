import React from "react";
import { ListComponent } from "../../components/ListComponent/ListComponent";
import { ShowcaseComponent } from "../../components/ShowcaseComponent/ShowcaseComponent";
import { ICity } from "../../models/ICity";

interface IHomePageProps {
	setActiveCity: React.Dispatch<React.SetStateAction<ICity>>;
	activeCity: ICity;
	cities: ICity[];
}

const HomePage: React.FC<IHomePageProps> = ({ cities, setActiveCity, activeCity }) => {
	return (
		<div>
			<nav>
				<ListComponent cities={cities} activeCity={activeCity} setActiveCity={setActiveCity} />
			</nav>
			<ShowcaseComponent activeCity={activeCity} />
		</div>
	);
};

export default HomePage;