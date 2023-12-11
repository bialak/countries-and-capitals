// import { ListFormat } from "typescript";
import countriesCapitalsMap from "countries-capitals-map";

const CountriesCapitalsButton = () => {
	const shuffle = (array: string[]) => {
		return array.sort(() => Math.random() - 0.5);
	};
	const countries: string[] = shuffle(Object.keys(countriesCapitalsMap));
	const capitals: string[] = shuffle(Object.values(countriesCapitalsMap));

	return (
		<>
			<div className="countries">
				{countries.map((countrie) => (
					<button>{countrie}</button>
				))}
			</div>
			<div className="capitals">
				{capitals.map((capital) => (
					<button>{capital}</button>
				))}
			</div>
		</>
	);
};

export default CountriesCapitalsButton;
