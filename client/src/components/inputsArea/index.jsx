import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";

const InputsArea = () => {
	// hook state criado para armazenar dinamicamente os dados do contato a serem enviados para o back-end
	const [dadosPost, setDadosPost] = useState({
		nome: "",
		sobrenome: "",
		cpf: "",
		telefone: "",
		email: "",
	});

	// funcão para inserir novo contato, capturando dados inseridos nos inputs e enviando para o back-end através de uma requisição HTTP com método POST utilizando a biblioteca axios
	const inserirNovoContato = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3001/create", {
				nome: dadosPost.nome,
				sobrenome: dadosPost.sobrenome,
				cpf: dadosPost.cpf,
				telefone: dadosPost.telefone,
				email: dadosPost.email,
			})
			.then(() => {
				alert("Dados inseridos com sucesso no banco de dados");
				setDadosPost({
					nome: "",
					sobrenome: "",
					cpf: "",
					telefone: "",
					email: "",
				});
			})
			.catch((err) => {
				if (err) {
					console.log(err);
					alert(
						"Não foi possível inserir os dados. Por favor, tente novamente."
					);
				}
			});
	};

	// mascara de CPF para aceitar apenas números e formatar o campo
	const mascaraCPF = (valor) => {
		return valor
			.replace(/\D/g, "") // substitui caracteres não numéricos por ""
			.replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de números, sendo o primeiro com 3 dígitos e o segundo com 1, adicionando um ponto entre o primeiro e o segundo grupo
			.replace(/(\d{3})(\d)/, "$1.$2") // repete a mesma fórmula
			.replace(/(\d{3})(\d{1,2})/, "$1-$2"); // insere um traço entre dois grupos de caracteres numéricos, sendo o primeiro com 3 dígitos e o segundo com 2 dígitos
	};

	// mascara de telefone para aceitar apenas números
	const mascaraTelefone = (valor) => {
		return valor.replace(/\D/g, ""); // substitui caracteres não numéricos por ""
	};

	return (
		<S.InputsField>
			<p>Por favor, insira aqui os dados do contato a ser cadastrado:</p>
			<S.Form action='#' onSubmit={(e) => inserirNovoContato(e)}>
				<S.Input
					value={dadosPost.nome}
					onChange={(e) => setDadosPost({ ...dadosPost, nome: e.target.value })}
					placeholder='Digite o nome...'
					type='text'
					minLength='2'
					maxLength='30'
					required
				/>
				<S.Input
					value={dadosPost.sobrenome}
					onChange={(e) =>
						setDadosPost({ ...dadosPost, sobrenome: e.target.value })
					}
					placeholder='Digite o sobrenome...'
					type='text'
					minLength='2'
					maxLength='30'
					required
				/>
				<S.Input
					value={dadosPost.cpf}
					onChange={(e) =>
						setDadosPost({ ...dadosPost, cpf: mascaraCPF(e.target.value) })
					}
					placeholder='Digite o cpf...'
					type='text'
					minLength='14'
					maxLength='14'
				/>
				<S.Input
					value={dadosPost.telefone}
					onChange={(e) =>
						setDadosPost({
							...dadosPost,
							telefone: mascaraTelefone(e.target.value),
						})
					}
					placeholder='Digite o telefone...'
					type='text'
					minLength='8'
					maxLength='14'
					required
				/>
				<S.Input
					value={dadosPost.email}
					onChange={(e) =>
						setDadosPost({ ...dadosPost, email: e.target.value })
					}
					placeholder='Digite o email...'
					type='email'
					maxLength='50'
				/>
				<S.FormSubmit type='submit' value='Inserir novo contato' />
			</S.Form>

			{/* <Button onClickHandler={() => inserirNovoContato()} content={"Clique para inserir"} /> */}
		</S.InputsField>
	);
};

export default InputsArea;
