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

app.post('/users', (req,res)=>{

    console.log(req)
    res.send('Ok POST')

})

app.get('/users', (req, res) => {
    app.send('método GET está respondendo')
})

app.listen(3000)
