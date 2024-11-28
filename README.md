# 🚀 Projeto de Gestão de Tarefas

Este projeto implementa uma aplicação de gerenciamento de tarefas, permitindo realizar operações básicas de CRUD (Criar, Ler, Atualizar e Excluir) utilizando uma API backend construída com **Express.js** e um frontend móvel desenvolvido em **React Native**.

## 🌐 Estrutura da API

A API foi construída utilizando o framework **Express.js** e oferece os seguintes endpoints para gerenciamento de tarefas:

- **POST /tarefas**: ✍️ Cria uma nova tarefa.
- **GET /tarefas**: 📋 Retorna todas as tarefas.
- **GET /tarefas/:id**: 🔍 Retorna uma tarefa específica pelo ID.
- **PUT /tarefas/:id**: ✏️ Atualiza uma tarefa específica pelo ID.
- **DELETE /tarefas/:id**: 🗑️ Exclui uma tarefa específica pelo ID.

### Endpoints da API

#### **POST /tarefas**
- Corpo da Requisição:
  ```json
  { "descricao": "Descrição da tarefa", "status": "pendente" }
Resposta:
json
Copiar código
{ "id": 1, "descricao": "Descrição da tarefa", "status": "pendente" }
GET /tarefas
Resposta:
json
Copiar código
[ { "id": 1, "descricao": "Descrição da tarefa", "status": "pendente" }, ... ]
GET /tarefas/:id
Resposta:
json
Copiar código
{ "id": 1, "descricao": "Descrição da tarefa", "status": "pendente" }
PUT /tarefas/:id
Corpo da Requisição:
json
Copiar código
{ "descricao": "Descrição atualizada", "status": "completa" }
Resposta:
json
Copiar código
{ "id": 1, "descricao": "Descrição atualizada", "status": "completa" }
DELETE /tarefas/:id
Resposta:
json
Copiar código
204 No Content
📱 Telas
A aplicação conta com três telas principais:

HomeScreen 🏠
A tela principal exibe uma lista de tarefas e permite ao usuário filtrar as tarefas por status (todas, pendentes, completas). A tela também fornece botões para:

➕ Adicionar uma nova tarefa.
✏️ Editar uma tarefa existente.
🗑️ Excluir uma tarefa.
NovaTarefaScreen ➕
Na tela de adição de tarefa, o usuário pode inserir uma descrição para a nova tarefa e enviá-la para o backend. A tarefa será adicionada ao backend e o usuário será redirecionado de volta para a HomeScreen.

EditarTarefaScreen ✏️
Na tela de edição, o usuário pode atualizar a descrição e o status de uma tarefa existente. As alterações são enviadas para o backend e a lista de tarefas é atualizada na HomeScreen.

⚙️ Funcionalidades
A interação com o backend é feita por meio de requisições HTTP utilizando o fetch. As funcionalidades principais incluem:

Buscar Tarefas: Na HomeScreen, todas as tarefas são buscadas do backend e exibidas na lista, podendo ser filtradas por status.
Adicionar Tarefa: Na NovaTarefaScreen, o usuário envia uma requisição POST para adicionar uma nova tarefa, que é salva no backend.
Atualizar Tarefa: Na EditarTarefaScreen, o usuário atualiza uma tarefa existente, enviando uma requisição PUT.
Excluir Tarefa: Na HomeScreen, o usuário pode excluir uma tarefa ao clicar no botão de excluir. A tarefa é removida do backend e a lista é atualizada.
🏁 Conclusão
Este projeto oferece uma aplicação funcional de gerenciamento de tarefas, com um backend simples em Express.js e um frontend móvel em React Native. A solução permite que os usuários criem, leiam, atualizem e excluam tarefas de maneira intuitiva. A interação entre as telas e a API é fluida e eficiente, proporcionando uma experiência de usuário agradável e funcional.
