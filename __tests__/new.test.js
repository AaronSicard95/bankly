//New one since the other one broke. Literally anything I did, including just adding white space would suddenly cause all tests to just leave open handles and not test
// Set ENV VAR to test before we load anything, so our app's config will use
// testing settings

/*process.env.NODE_ENV = "test";

const app = require("../app");
const request = require("supertest");
const db = require("../db");
const bcrypt = require("bcrypt");
const createToken = require("../helpers/createToken");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { describe, test } = require("node:test");

// tokens for our sample users
const tokens = {};

beforeEach(async function() {
  async function _pwd(password) {
    return await bcrypt.hash(password, 1);
  }

  let sampleUsers = [
    ["u1", "fn1", "ln1", "email1", "phone1", await _pwd("pwd1"), false],
    ["u2", "fn2", "ln2", "email2", "phone2", await _pwd("pwd2"), false],
    ["u3", "fn3", "ln3", "email3", "phone3", await _pwd("pwd3"), true]
  ];

  for (let user of sampleUsers) {
    await db.query(
      `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      user
    );
    tokens[user[0]] = createToken(user[0], user[6]);
  }
});

describe("Test bugs 3-6", function(){

    test("patch works with same user", async function(){
        const response = await request(app)
        .patch("/users/u1")
        .send({_token: tokens.u1, first_name: "newFirstName"});
        expect(response.statusCode).toBe(201);
    })

});




afterEach(async function() {
    await db.query("DELETE FROM users");
});
  
afterAll(function() {
    db.end();
});*/