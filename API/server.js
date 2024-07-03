/*
OBJETIVO DESSE BACK-END: Criar nossa API de usuários
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/

import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express();

app.use(express.json());//avisando pro express que usaremos arquivo .JSON

const users = [];

app.post('/users', async (req,res)=>{

    await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

app.get('/users', async (req, res) => {

    let users = [];

    if(req.query) {
        users = await prisma.user.findMany({
            where:{
                name:req.query.name,
                email:req.query.email,
                age:req.query.age
            }
        })
    }else(
        users = await prisma.user.findMany()
    )


    res.status(200).json(users)
})

app.put('/usuarios/:id',  async(req,res) => {
    
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    
    res.status(201).json(req.body)
})

app.delete('usuarios/:id', async (req, res) =>{
    
    await prisma.user.delete({
        where: {
            id: req.body.id
        }
    })

    res.status(200).json({message:"User deleted succesfully"})
})

app.listen(3000)
