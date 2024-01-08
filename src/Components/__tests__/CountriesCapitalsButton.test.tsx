import { render, screen, fireEvent } from "@testing-library/react";
import CountriesCapitalsButtons from "Components/CountriesCapitalsButtons";
import countriesCapitalsMap from "countries-capitals-map";

jest.mock("countries-capitals-map", () => ({
	Germany: "Berlin",
	Poland: "Warsaw",
}));

describe("CountriesCapitalsButtons", () => {
	it("should disapear if capital and country are correct", () => {
		render(<CountriesCapitalsButtons />);
		const buttonElementCapital = screen.getByText(/Berlin/i);
		const buttonElementCountry = screen.getByText(/Germany/i);
		fireEvent.click(buttonElementCapital);
		fireEvent.click(buttonElementCountry);
		expect(screen.queryByText(/Berlin/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/Germany/i)).not.toBeInTheDocument();
	});

	it("should show message Congratulation if there is no capitals and countries", async () => {
		render(<CountriesCapitalsButtons />);
		const buttonElementCapital = screen.getByText(/Berlin/i);
		const buttonElementCountry = screen.getByText(/Germany/i);
		const buttonElementCapitalTwo = screen.getByText(/Poland/i);
		const buttonElementCountryTwo = screen.getByText(/Warsaw/i);
		fireEvent.click(buttonElementCapital);
		fireEvent.click(buttonElementCountry);
		fireEvent.click(buttonElementCapitalTwo);
		fireEvent.click(buttonElementCountryTwo);
		expect(await screen.findByText(/CONGRATULATIONS!/i)).toBeInTheDocument();
	});

	describe("GetColorsToButtons", () => {
		it("should change border color if is one picked button", () => {
			render(<CountriesCapitalsButtons />);
			const buttonElement = screen.getByText(/Berlin/i);
			fireEvent.click(buttonElement);
			expect(buttonElement).toHaveStyle("borderColor: ffd662");
		});

		it("should change borderColor on red if capital and country are incorrect", () => {
			render(<CountriesCapitalsButtons />);
			const buttonElementCapital = screen.getByText(/Berlin/i);
			const buttonElementCapitalTwo = screen.getByText(/Poland/i);
			fireEvent.click(buttonElementCapital);
			fireEvent.click(buttonElementCapitalTwo);
			expect(buttonElementCapital).toHaveStyle("borderColor: #d74747");
			expect(buttonElementCapitalTwo).toHaveStyle("borderColor:  #d74747");
		});
	});
});
