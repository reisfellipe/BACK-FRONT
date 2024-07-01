/*
OBJETIVO DESSE BACK-END: Criar nossa API de usuários
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/

import express from 'express'

const app = express();
app.use(express.json());//avisando pro express que usaremos arquivo .JSON

const users = [];

app.post('/users', (req,res)=>{

    users.push(req.body)

    res.status(201).json(req.body)

})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)
