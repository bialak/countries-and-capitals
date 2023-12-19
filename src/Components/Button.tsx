export enum ButtonType {
	COUNTRY = "COUNTRY",
	CAPITAL = "CAPITAL",
}
type ButtonProps = {
	color: string | undefined;
	text: string;
	onClick: (type: ButtonType, text: string) => void;
	type: ButtonType;
};

const Buttton = ({ color, text, onClick, type }: ButtonProps) => {
	return (
		<button style={{ borderColor: color }} onClick={() => onClick(type, text)}>
			{text}
		</button>
	);
};

export default Buttton;
