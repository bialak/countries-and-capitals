// import { ListFormat } from "typescript";
import countriesCapitalsMap from "countries-capitals-map";
import { useState } from "react";
import Buttton, { ButtonType } from "./Button";

const shuffle = (array: string[]) => {
	return array.sort(() => Math.random() - 0.5);
};

const countries: string[] = shuffle(Object.keys(countriesCapitalsMap));
const capitals: string[] = shuffle(Object.values(countriesCapitalsMap));

interface countries {
	selectedCountry: string;
}

const CountriesCapitalsButtons = () => {
	const [selectedCountry, setSelectedCountry] = useState(null); // TODO: missing typing - now you can set anything there
	const [selectedCapital, setSelectedCapital] = useState(null);

	const handleClick = (type: ButtonType, text: string) => {
		if (type === ButtonType.CAPITAL) {
			setSelectedCapital(text);
		} else if (type === ButtonType.COUNTRY) {
			setSelectedCountry(text);
		}
	};

	return (
		<>
			<div className="countries">
				{countries.map((country) => (
					<Buttton
						color={selectedCountry === country ? "#4009Bf" : undefined}
						type={ButtonType.COUNTRY}
						text={country}
						onClick={handleClick}
					></Buttton>
				))}
			</div>
			<div className="capitals">
				{capitals.map((capital) => (
					<Buttton
						color={selectedCapital === capital ? "#4009Bf" : undefined}
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
