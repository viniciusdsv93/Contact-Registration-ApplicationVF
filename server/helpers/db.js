const config = require("config.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

async function initialize() {
	// captura as informações de cadastro do banco de dados salvas em "config.json" e as usa para fazer a conexão com o MySQL.
	// Após isso, cria o banco de dados caso não exista
	const { host, port, user, password, database } = config.database;
	const connection = await mysql.createConnection({ host, port, user, password });
	await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

	// conecta-se ao banco de dados utilizando o sequelize
	const sequelize = new Sequelize(database, user, password, { dialect: "mysql" });

	// usa o modelo de entidade estabelecido na models o armazena no objeto "db"
	db.Contact = require("../contacts/contact.model")(sequelize);

	// sincroniza o modelo com o banco de dados
	await sequelize.sync({ alter: true });
}

initialize();
