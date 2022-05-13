const { DataTypes } = require("sequelize");

module.exports = model;

// modela a entidade a ser inserida no banco de dados, com os atributos id, nome, sobrenome, cpf, telefone, email e deletado, definindo como um objeto de nome "Contact"
function model(sequelize) {
	const attributes = {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		nome: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sobrenome: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		cpf: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		telefone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		deletado: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	};

	const options = {
		defaultScope: {
			// exclude password hash by default
			attributes: { exclude: ["passwordHash"] },
		},
		scopes: {
			// include hash with this scope
			withHash: { attributes: {} },
		},
	};

	return sequelize.define("Contact", attributes, options);
}
