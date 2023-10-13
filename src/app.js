const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians', async (req, res) => {
    try{
        const musicians = await Musician.findAll();
        res.json(musicians);
    }
    catch(error){
        res.status(500).json({error:`An error occured when fetching musicians`});
    }
})

app.get('/musicians/1', async (req, res) => {
    try{
        const musicians1 = await Musician.findByPk(1);
        res.json(musicians1);
    }
    catch(error){
        res.status(500).json({error: 'This is not the first musician in the database'});
    }
})








module.exports = app;