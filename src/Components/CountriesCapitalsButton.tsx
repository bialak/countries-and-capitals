// import { ListFormat } from "typescript";
import countriesCapitalsMap from "countries-capitals-map";

const CountriesCapitalsButton = () => {
	const countries: string[] = Object.keys(countriesCapitalsMap);
	const capitals: string[] = Object.values(countriesCapitalsMap);

	return (
		<>
			{countries.map((countrie) => (
				<button className="countries">{countrie}</button>
			))}
			{capitals.map((capital) => (
				<button className="capitals">{capital}</button>
			))}
		</>
	);
};

export default CountriesCapitalsButton;
