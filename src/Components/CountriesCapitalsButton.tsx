// import { ListFormat } from "typescript";
import countriesCapitalsMap from "countries-capitals-map";
import { useState } from "react";
import Buttton, { ButtonType } from "./Button";

const shuffle = (array: string[]) => {
	return array.sort(() => Math.random() - 0.5);
};

const countries: string[] = shuffle(Object.keys(countriesCapitalsMap));
const capitals: string[] = shuffle(Object.values(countriesCapitalsMap));

const CountriesCapitalsButtons = () => {
	const [selectedCountry, setSelectedCountry] = useState(""); // TODO: missing typing - now you can set anything there
	const [selectedCapital, setSelectedCapital] = useState("");

	const isPairSelected = selectedCountry && selectedCapital;
	const isPairCorrect = isPairSelected && countriesCapitalsMap[selectedCountry] === selectedCapital;

	const handleClick = (type: ButtonType, text: string) => {
		if (type === ButtonType.CAPITAL) {
			setSelectedCapital(text);
		} else if (type === ButtonType.COUNTRY) {
			setSelectedCountry(text);
		}
		if (!selectedCapital || !selectedCountry) return;
		// if (countriesCapitalsMap[selectedCountry] === selectedCapital) {
		// 	console.log("nana");
		// }
		// if (countriesCapitalsMap[selectedCountry] !== selectedCapital) {
		// 	console.log("dada");
		// }
	};

	const getButtonColor = (type: ButtonType, text: string): string | undefined => {
		const isSelectedCapital = type === ButtonType.CAPITAL && text === selectedCapital;
		const isSelectedCountry = type === ButtonType.COUNTRY && text === selectedCountry;
		// not selected by user - let's keep the default color

		if (!isSelectedCapital && !isSelectedCountry) return;
		if (isPairSelected && !isPairCorrect) return "red";
		if (isSelectedCapital || isSelectedCountry) return "blue";

		// if (selectedCountry === text) return "blue";
		// if (selectedCapital === text) return "blue";
		if (isPairSelected && !isPairCorrect) return "red";
	};

	return (
		<>
			<div className="countries">
				{countries.map((country) => (
					<Buttton
						// color={selectedCountry === country ? "blue" : undefined}
						color={getButtonColor(ButtonType.COUNTRY, country)}
						type={ButtonType.COUNTRY}
						text={country}
						onClick={handleClick}
					></Buttton>
				))}
			</div>
			<div className="capitals">
				{capitals.map((capital) => (
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
