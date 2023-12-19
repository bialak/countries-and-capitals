import { ListFormat } from "typescript";
import countriesCapitalsMap from "countries-capitals-map";
import { useState, useEffect } from "react";
import Buttton, { ButtonType } from "./Button";

const shuffle = (array: string[]) => {
	return array.sort(() => Math.random() - 0.5);
};

const countries: string[] = shuffle(Object.keys(countriesCapitalsMap));
const capitals: string[] = shuffle(Object.values(countriesCapitalsMap));

const CountriesCapitalsButtons = (type: ButtonType, text: string) => {
	const [countriesState, setCountries] = useState([...countries]);
	const [capitalsState, setCapitals] = useState([...capitals]);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedCapital, setSelectedCapital] = useState("");

	const isPairSelected = selectedCountry && selectedCapital;
	const isPairCorrect = isPairSelected && countriesCapitalsMap[selectedCountry] === selectedCapital;

	const handleClick = (type: ButtonType, text: string) => {
		if (type === ButtonType.CAPITAL) {
			setSelectedCapital(text);
		} else if (type === ButtonType.COUNTRY) {
			setSelectedCountry(text);
		}
		if (!selectedCapital || !selectedCountry) {
			return;
		}
	};

	useEffect(() => {
		if (isPairSelected && isPairCorrect) {
			setCountries(countriesState.filter((el) => el !== selectedCountry));
			setCapitals(capitalsState.filter((el) => el !== selectedCapital));
			setSelectedCountry("");
			setSelectedCapital("");
		}
	}, [
		selectedCapital,
		selectedCountry,
		capitalsState,
		countriesState,
		isPairSelected,
		isPairCorrect,
	]);

	const getButtonColor = (type: ButtonType, text: string): string | undefined => {
		const isSelectedCapital = type === ButtonType.CAPITAL && text === selectedCapital;
		const isSelectedCountry = type === ButtonType.COUNTRY && text === selectedCountry;
		if (!isSelectedCapital && !isSelectedCountry) return;
		if (isPairSelected && !isPairCorrect) return "red";
		if (isSelectedCapital || isSelectedCountry) return "blue";
	};

	const Congratulations = () => {
		if (capitalsState.length === 0 && countriesState.length === 0)
			return <h1 className="congratulation"> CONGRATULATIONS</h1>;
	};

	return (
		<>
			<h1>Connect cities and their capitals to win the game </h1>
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
			<Congratulations></Congratulations>
		</>
	);
};

export default CountriesCapitalsButtons;
