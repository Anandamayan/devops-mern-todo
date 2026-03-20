const request = require('supertest');
const {server,app} = require('../index');
const mongoose = require('mongoose');

describe('GET api/tasks',() => {
    it('It Should return 200 ok',async()=>{
        const res = await request(app).get('/api/tasks')
        expect(res.statusCode).toBe(200);
    })
    it('It Should return an object and tasks property',async()=>{
        const res = await request(app).get('/api/tasks')
        // expect(Array.isArray(res.body).toBe(true));
        expect(typeof res.body).toBe("object");
        expect(res.body).toHaveProperty("tasks")
        console.log(res.body.tasks, 'Data Seeded')
    })
})

afterAll(async()=>{
    await mongoose.connection.close();
    await server.close();
})