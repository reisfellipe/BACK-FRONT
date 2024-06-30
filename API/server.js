import express from 'express'

const app = express();

app.get('/users', (requisition, response) => {
    app.send('método GET está respondendo')
})

app.listen(3000)
