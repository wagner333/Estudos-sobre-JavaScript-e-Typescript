const db = require("../database/database");

exports.createUser = (request, reply) => {
  const { name, email } = request.body;
  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.run(query, [name, email], function (err) {
    if (err) {
      return reply.status(500).send({ error: err.message });
    }
    reply.send({ id: this.lastID, name, email });
    return reply.status(201).send({ resposta: "usuario criado com sucesso" });
  });
};

exports.getUsers = (request, reply) => {
  const query = "SELECT * FROM users";
  db.all(query, [], (err, rows) => {
    if (err) {
      return reply.status(500).send({ error: err.message });
    }
    reply.send(rows);
  });
};
