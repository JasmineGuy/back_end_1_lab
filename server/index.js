const express = require('express')
const cors = require('cors')

const app =express()

app.use(express.json())
app.use(cors())

// const arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

app.get('/api/users', (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  })

app.get('/labs', (req, res) => {
    const phrase = `<h1> Labs are fun! ${arr} </h1>`
    res.status(200).send(phrase)
})

app.listen(4000, () => {
    console.log('Listening on 4000!')
})