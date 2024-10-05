const Response = require("../models/Response");
const CustomTest = require("../models/Customtest");

const getdata = async (req, res) => {
  try {
    const timeApi = await Response.find();
    res.status(200).json(timeApi);
  } catch (error) {
    res.status(404).json(error);
  }
};

const adddata = async (req, res) => {
  console.log(req.body);
  const FetchResponse = new Response({
    QuestionNo: req.body.QuestionNo,
    selectedAnswer: req.body.selectedAnswer,
    status: req.body.status,
    markForReview: req.body.markForReview,
  });
  try {
    const saveResponse = await FetchResponse.save();
    res.status(200).json(saveResponse);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const customTest = async (req, res) => {
  console.log(req.body);
  const FetchResponse = new CustomTest({
    Question: req.body.Question,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    Answer: req.body.Answer,
  });

  try {
    const saveResponse = await FetchResponse.save();
    res.status(200).json(saveResponse);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = { adddata, getdata, customTest };
