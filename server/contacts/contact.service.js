const db = require("../helpers/db");

module.exports = {
	getAll,
	create,
	update,
	delete: _delete,
};

// função getAll para obter todos os registros da tabela Contact
async function getAll() {
	return await db.Contact.findAll();
}

// função para obter apenas um registro a partir de seu ID
async function getById(id) {
	return await getContact(id);
}

// função para criar novo registro a partir dos parâmetros enviados
async function create(params) {
	const contact = new db.Contact(params);

	//TODO validar CPF

	// salvar contact
	await contact.save();
}

// função para atualizar um registro
async function update(id, params) {
	const contact = await getById(id);

	//TODO validar CPF

	// copiar parâmetros para atribuí-los ao objeto e salvá-lo
	Object.assign(contact, params);
	await contact.save();
}

// função delete que apaga definitivamente os dados
async function _delete(id) {
	const contact = await getContact(id);
	await contact.destroy();
}

// função para localizar um contato pelo id
async function getContact(id) {
	const contact = await db.Contact.findByPk(id);
	if (!contact) throw "Contact not found";
	return contact;
}
