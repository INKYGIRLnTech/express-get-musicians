// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    it('Test get method', async () => {
        const response = await request(app).get('/musicians')
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(response.body[0].name).toBe("Mick Jagger");

    })
})

describe('./musicians endpoint', () => {
    it('Test get method', async () => {
        const response = await request(app).get('/musicians')
        const responseData = JSON.parse(response.text);
        expect(response.body[0].name).toHaveRetu("Mick Jagger");
    })
})

