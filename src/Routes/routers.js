const express = require("express");
const routes  = express.Router();

const {adddata,getdata,customTest} = require("../Controller/contro");
routes.post("/useranswer", adddata);
routes.get("/useranswer", getdata)

routes.post("/customtest/op1",customTest)

module.exports = routes;