import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import Button from "../button";
import ModalAlteracao from "../modalAlteracao";

const GridContatos = () => {
	// hook State em que ficará armazenado o array de contatos requisitado ao back-end
	const [dadosContatos, setDadosContatos] = useState([]);

	// hook State para controlar a exibição do modal para alteração de dados
	const [alterar, setAlterar] = useState(false);

	// hook State para armazenar os dados a serem enviados para o back-end e alterados
	const [dadosParaAlteracao, setDadosParaAlteracao] = useState({
		nome: "",
		sobrenome: "",
		cpf: "",
		telefone: "",
		email: "",
		id: "",
	});

	// função para obter o array de contatos já cadastrados e exibir em forma de tabela
	const getContatos = async () => {
		const response = await axios.get("http://localhost:3001/");
		setDadosContatos(response.data);
	};

	// função para deletar contato
	const deletarContato = (id) => {
		axios
			.put(`http://localhost:3001/delete/${id}`, {})
			.then(() => {
				alert("Contato excluído com sucesso do banco de dados");
				getContatos();
			})
			.catch((err) => {
				if (err) {
					console.log(err);
					alert(
						"Não foi possível deletar o contato. Por favor, tente novamente."
					);
				}
			});
	};

	// função que exibe o modal para alteração de dados, quando for clicado o botão "alterar"
	const abrirModalAlteracao = (_id, _nome, _sobrenome, _cpf, _telefone, _email) => {
		setAlterar(true);
		setDadosParaAlteracao({
			nome: _nome,
			sobrenome: _sobrenome,
			cpf: _cpf,
			telefone: _telefone,
			email: _email,
			id: _id,
		});
	};

	// função que evetivamente altera os dados por meio de uma requisição HTTP com método PUT
	const alterarDados = (id, e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:3001/update/${id}`, {
				nome: dadosParaAlteracao.nome,
				sobrenome: dadosParaAlteracao.sobrenome,
				cpf: dadosParaAlteracao.cpf,
				telefone: dadosParaAlteracao.telefone,
				email: dadosParaAlteracao.email,
			})
			.then(() => {
				alert("Contato alterado com sucesso no banco de dados");
				setAlterar(false);
				getContatos();
			})
			.catch((err) => {
				if (err) {
					console.log(err);
					alert(
						"Não foi possível alterar o contato. Por favor, tente novamente."
					);
					setAlterar(false);
				}
			});
	};

	return (
		<S.Grid className='table-responsive-lg'>
			<table className='table table-striped table-hover table-responsive-md'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Sobrenome</th>
						<th>CPF</th>
						<th>Telefone</th>
						<th>Email</th>
						<th>Alterar</th>
						<th>Deletar</th>
					</tr>
				</thead>
				<tbody>
					{dadosContatos.map((contato, key) => {
						return (
							<tr key={key}>
								<td>{contato.id}</td>
								<td>{contato.nome}</td>
								<td>{contato.sobrenome}</td>
								<td>{contato.cpf}</td>
								<td>{contato.telefone}</td>
								<td>{contato.email}</td>
								<td>
									<S.UpdateButton
										onClick={() =>
											abrirModalAlteracao(
												contato.id,
												contato.nome,
												contato.sobrenome,
												contato.cpf,
												contato.telefone,
												contato.email
											)
										}
									>
										Alterar
									</S.UpdateButton>
								</td>
								<td>
									<S.DeleteButton
										onClick={() => deletarContato(contato.id)}
									>
										Deletar
									</S.DeleteButton>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<Button
				content={"Clique para atualizar"}
				onClickHandler={() => getContatos()}
			/>
			{alterar ? (
				<ModalAlteracao
					dadosParaAlteracao={dadosParaAlteracao}
					setDadosParaAlteracao={setDadosParaAlteracao}
					alterarDados={alterarDados}
					setAlterar={setAlterar}
				/>
			) : null}
		</S.Grid>
	);
};

export default GridContatos;
