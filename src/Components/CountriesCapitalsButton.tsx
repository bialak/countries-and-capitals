import { ListFormat } from "typescript";
import countriesCapitalsMap from "countries-capitals-map";
import { useState, useEffect } from "react";
import Buttton, { ButtonType } from "./Button";

const shuffle = (array: string[]) => {
	return array.sort(() => Math.random() - 0.5);
};

const countries: string[] = shuffle(Object.keys(countriesCapitalsMap));
const capitals: string[] = shuffle(Object.values(countriesCapitalsMap));

const CountriesCapitalsButtons = () => {
	const [countriesState, setCountries] = useState([...countries]);
	const [capitalsState, setCapitals] = useState([...capitals]);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedCapital, setSelectedCapital] = useState("");

	const isPairSelected = selectedCountry && selectedCapital;
	const isPairCorrect = isPairSelected && countriesCapitalsMap[selectedCountry] === selectedCapital;

	const handleClick = (type: ButtonType, text: string) => {
		const isSelectedCapital = type === ButtonType.CAPITAL && text === selectedCapital;
		const isSelectedCountry = type === ButtonType.COUNTRY && text === selectedCountry;
		if (type === ButtonType.CAPITAL) {
			setSelectedCapital(text);
		} else if (type === ButtonType.COUNTRY) {
			setSelectedCountry(text);
		}
		if (!isSelectedCapital && !isSelectedCountry) {
			return;
		}
		if (!selectedCapital || !selectedCountry) {
			return;
		}
	};

	console.log(capitalsState);
	useEffect(() => {
		if (isPairSelected && isPairCorrect) {
			setCountries(countriesState.filter((el) => el !== selectedCountry));
		}
		if (isPairSelected && isPairCorrect) {
			setCapitals(capitalsState.filter((el) => el !== selectedCapital));
		}
		console.log(capitalsState);
	}, [isPairSelected, isPairCorrect]);

	const getButtonColor = (type: ButtonType, text: string): string | undefined => {
		const isSelectedCapital = type === ButtonType.CAPITAL && text === selectedCapital;
		const isSelectedCountry = type === ButtonType.COUNTRY && text === selectedCountry;

		if (!isSelectedCapital && !isSelectedCountry) return;
		if (isPairSelected && !isPairCorrect) return "red";
		if (isSelectedCapital || isSelectedCountry) return "blue";
	};

	return (
		<>
			<div className="countries">
				{countriesState.map((country) => (
					<Buttton
						color={getButtonColor(ButtonType.COUNTRY, country)}
						type={ButtonType.COUNTRY}
						text={country}
						onClick={handleClick}
					></Buttton>
				))}
			</div>
			<div className="capitals">
				{capitalsState.map((capital) => (
					<Buttton
						color={getButtonColor(ButtonType.CAPITAL, capital)}
						type={ButtonType.CAPITAL}
						text={capital}
						onClick={handleClick}
					></Buttton>
				))}
			</div>
		</>
	);
};

export default CountriesCapitalsButtons;
