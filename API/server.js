/*
OBJETIVO DESSE BACK-END: Criar nossa API de usuários
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/

import express from 'express'

const app = express();

const users = [];

app.post('/users')

app.get('/users', (requisition, response) => {
    app.send('método GET está respondendo')
})

app.listen(3000)
