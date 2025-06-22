const express = require('express');
const router = express.Router();
const Question=require('../models/Question');

router.post('/',async(req,res)=>{
    try{
        const { question, options, correctAnswer } = req.body;
        const newQuestion = new Question({
            question,
            options,
            correctAnswer
        });
        await newQuestion.save();
        res.status(201).json({message:'Question created successfully',question:newQuestion});
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    }
})
router.get('/',async(req,res)=>{
    try{
        const questions=await Question.find();
        res.status(200).json(questions);
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    }
})
router.delete("/:id", async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: "Question deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete question" });
  }
});
module.exports = router;