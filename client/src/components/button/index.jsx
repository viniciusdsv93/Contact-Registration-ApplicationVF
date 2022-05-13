import React from "react";
import * as S from "./styled";

// Botão padronizado a ser usado em algumas partes da aplicação
function Button({ content, onClickHandler }) {
	return <S.Button onClick={onClickHandler}>{content}</S.Button>;
}

export default Button;
