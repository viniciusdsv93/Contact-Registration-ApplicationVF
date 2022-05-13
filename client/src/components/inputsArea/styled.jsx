import styled from "styled-components";

export const InputsField = styled.div`
	border-radius: 10px;
	box-shadow: 0px 5px 20px hsl(212deg 49% 36% / 30%);
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	border-top: 10px solid hsl(180, 62%, 55%);
`;

export const Input = styled.input`
	border-radius: 3px;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
	outline: none;
	border: none;
	width: 300px;
	padding: 5px 15px;
	font-size: 16px;
	font-family: "Poppins", sans-serif;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const FormSubmit = styled.input`
	padding: 5px 10px;
	width: 300px;
	color: #fff;
	font-family: "Poppins", sans-serif;
	background-color: #005ee2;
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
	font-weight: bold;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;
