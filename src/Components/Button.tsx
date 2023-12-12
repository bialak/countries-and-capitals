type ButtonProps = {
	isActive: boolean;
	text: string;
	onClick: () => void;
};

const Buttton = ({ isActive, text, onClick }: ButtonProps) => {
	return (
		<button
			style={{
				backgroundColor: isActive ? "4009Bff" : "",
			}}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Buttton;
