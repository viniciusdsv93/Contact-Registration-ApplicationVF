import React from "react";
import * as S from "./styled";

// Componente do modal de alterações que recebe states como props para manipular os dados
const ModalAlteracao = ({
	dadosParaAlteracao,
	setDadosParaAlteracao,
	alterarDados,
	setAlterar,
}) => {
	const mascaraCPF = (valor) => {
		return valor
			.replace(/\D/g, "") // substitui qualquer caractere não numérico por ""
			.replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de números, sendo o primeiro com 3 dígitos e o segundo com 1, adicionando um ponto entre o primeiro e o segundo grupo
			.replace(/(\d{3})(\d)/, "$1.$2") // repete a mesma fórmula
			.replace(/(\d{3})(\d{1,2})/, "$1-$2"); // insere um traço entre dois grupos de caracteres numéricos, sendo o primeiro com 3 dígitos e o segundo com 2 dígitos
	};

	const mascaraTelefone = (valor) => {
		return valor.replace(/\D/g, ""); // substitui caracteres não numéricos por ""
	};

	return (
		<S.ModalAlteracao>
			<p>Insira os dados que deseja alterar:</p>
			<S.FormModal
				action='#'
				onSubmit={(e) => alterarDados(dadosParaAlteracao.id, e)}
			>
				<S.InputModal
					value={dadosParaAlteracao.nome}
					onChange={(e) =>
						setDadosParaAlteracao({
							...dadosParaAlteracao,
							nome: e.target.value,
						})
					}
					placeholder='Digite o novo nome...'
					type='text'
					minLength='2'
					maxLength='30'
					required
				/>
				<S.InputModal
					value={dadosParaAlteracao.sobrenome}
					onChange={(e) =>
						setDadosParaAlteracao({
							...dadosParaAlteracao,
							sobrenome: e.target.value,
						})
					}
					placeholder='Digite o novo sobrenome...'
					type='text'
					minLength='2'
					maxLength='30'
					required
				/>
				<S.InputModal
					value={dadosParaAlteracao.cpf}
					onChange={(e) =>
						setDadosParaAlteracao({
							...dadosParaAlteracao,
							cpf: mascaraCPF(e.target.value),
						})
					}
					placeholder='Digite o novo CPF...'
					type='text'
					minLength='14'
					maxLength='14'
				/>
				<S.InputModal
					value={dadosParaAlteracao.telefone}
					onChange={(e) =>
						setDadosParaAlteracao({
							...dadosParaAlteracao,
							telefone: mascaraTelefone(e.target.value),
						})
					}
					placeholder='Digite o novo telefone...'
					type='text'
					minLength='8'
					maxLength='14'
					required
				/>
				<S.InputModal
					value={dadosParaAlteracao.email}
					onChange={(e) =>
						setDadosParaAlteracao({
							...dadosParaAlteracao,
							email: e.target.value,
						})
					}
					placeholder='Digite o novo email...'
					type='email'
					maxLength='50'
				/>
				<S.FormModalSubmit type='submit' value='Confirmar alteração' />
				<S.CancelButton onClick={() => setAlterar(false)}>
					Cancelar alteração
				</S.CancelButton>
			</S.FormModal>
		</S.ModalAlteracao>
	);
};

export default ModalAlteracao;
