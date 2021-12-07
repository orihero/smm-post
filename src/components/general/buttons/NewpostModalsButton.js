import React from "react";
import { NewPostModalsButton } from "./NewpostModalsButton.style";

function NewpostModalsButton({
	text = "",
	primary = false,
	active = false,
	children,
}) {
	return (
		<>
			<NewPostModalsButton active={active} primary={primary}>
				{text || children}
			</NewPostModalsButton>
		</>
	);
}

export default NewpostModalsButton;
