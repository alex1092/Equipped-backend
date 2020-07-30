var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
const { request } = require("http");
const { url } = require("inspector");
let should = chai.should();
chai.use(chaiHttp);

const URL = 'https://rocky-badlands-48514.herokuapp.com/'


it("Should fetch all quotes", (done) => {
    chai.request('https://rocky-badlands-48514.herokuapp.com/api')
    .get("/quotes/")
    .end((err, res) => {
        res.should.have.status(200)
        console.log("Got",res.body.data, "docs 👍")

        done()
    })
})
it("Should fetch all Products", (done) => {
    chai.request('https://rocky-badlands-48514.herokuapp.com/api')
    .get("/products/")
    .end((err, res) => {
        res.should.have.status(200)
        console.log("Got",res.body.data, "docs 👍")

        done()
    })
})

it("Should fetch latested products", (done) => {
    chai.request('https://rocky-badlands-48514.herokuapp.com/api/quotes')
    .get("/getLatest/")
    .end((err, res) => {
        res.should.have.status(200)
        console.log("Got",res.body, "docs 👍")

        done()
    })
})

it("Should fetch pending aproval products", (done) => {
    chai.request('https://rocky-badlands-48514.herokuapp.com/api/quotes')
    .get("/getpending/")
    .end((err, res) => {
        res.should.have.status(200)
        console.log("Got",res.body, "docs 👍")

        done()
    })
})
