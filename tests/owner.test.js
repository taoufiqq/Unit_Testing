const app = require("../app");
const Owner = require('../db/models/owner.model');
const supertest = require("supertest");
const mongoose = require('mongoose');
require('dotenv').config()



beforeEach((done) => {
    mongoose.connect(process.env.DB_CONNECTION,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => done());
  });
  
  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    });
  });


  test("GET /owner", async () => {
    const owner = await Owner.create({ full_name: "omar", phone: "+21262134626" ,cin : "AA1221" });
  
    await supertest(app).get("/owner")
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(1);
  
        // Check data
        expect(response.body[0]._id).toBe(owner.id);
        expect(response.body[0].full_name).toBe(owner.full_name);
        expect(response.body[0].phone).toBe(owner.phone);
        expect(response.body[0].cin).toBe(owner.cin);
      });
  });