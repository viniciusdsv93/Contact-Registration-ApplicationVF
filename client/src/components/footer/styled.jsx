import styled from "styled-components";

export const FooterDiv = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;

	a {
		font-weight: 600;
		color: hsl(234, 12%, 34%);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
`;
