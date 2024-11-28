const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let tarefas = []; // Array em memória para armazenar tarefas

// Endpoint para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
  const { descricao, status } = req.body;
  const id = tarefas.length + 1;
  tarefas.push({ id, descricao, status });
  res.status(201).send({ message: 'Tarefa adicionada com sucesso!' });
});

// Endpoint para listar todas as tarefas
app.get('/tarefas', (req, res) => {
  res.send(tarefas);
});

// Endpoint para atualizar uma tarefa existente
app.put('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const { descricao, status } = req.body;
  const tarefaIndex = tarefas.findIndex(t => t.id == id);

  if (tarefaIndex !== -1) {
    tarefas[tarefaIndex] = { id: parseInt(id), descricao, status };
    res.send({ message: 'Tarefa atualizada com sucesso!' });
  } else {
    res.status(404).send({ message: 'Tarefa não encontrada!' });
  }
});

// Endpoint para excluir uma tarefa
app.delete('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  tarefas = tarefas.filter(t => t.id != id);
  res.send({ message: 'Tarefa excluída com sucesso!' });
});

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
