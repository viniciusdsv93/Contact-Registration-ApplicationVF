require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// rotas da api, definidas pelo controller
app.use("/", require("./contacts/contact.controller"));

// iniciar servidor
const port = 3001;
app.listen(port, () => console.log("Servidor ouvindo na porta " + port));
