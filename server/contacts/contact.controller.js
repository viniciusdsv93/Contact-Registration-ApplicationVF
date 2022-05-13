const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const contactService = require("./contact.service");

// rotas

router.get("/", getAll);
router.post("/create/", createSchema, create);
router.put("/update/:id", updateSchema, update);
router.put("/delete/:id", _delete);

module.exports = router;

// funções para manipular os dados no banco

function getAll(req, res, next) {
	contactService
		.getAll()
		.then((contacts) => res.json(contacts))
		.catch(next);
}

function create(req, res, next) {
	contactService
		.create(req.body)
		.then(() => res.json({ message: "Contact created" }))
		.catch(next);
}

function update(req, res, next) {
	contactService
		.update(req.params.id, req.body)
		.then(() => res.json({ message: "Contact updated" }))
		.catch(next);
}

function _delete(req, res, next) {
	contactService
		.delete(req.params.id)
		.then(() => res.json({ message: "Contact deleted" }))
		.catch(next);
}

// valida campos para criar um registro
function createSchema(req, res, next) {
	const schema = Joi.object({
		nome: Joi.string().required(),
		sobrenome: Joi.string().required(),
		cpf: Joi.string().required(),
		telefone: Joi.string().required(),
		email: Joi.string().required(),
	});
	validateRequest(req, next, schema);
}

// valida campos para atualizar um registro
function updateSchema(req, res, next) {
	const schema = Joi.object({
		nome: Joi.string().empty(""),
		sobrenome: Joi.string().empty(""),
		cpf: Joi.string().empty(""),
		telefone: Joi.string().empty(""),
		email: Joi.string().empty(""),
	});
	validateRequest(req, next, schema);
}
