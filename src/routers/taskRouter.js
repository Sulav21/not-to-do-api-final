import express from "express";
import { deleteTask, getAllTask, getTask, insertTask, updateTask } from "../models/task/TaskList.model.js";
const router = express.Router();

router.get("/:_id?", async (req, res) => {
    const {_id} = req.params
    console.log(_id)

    const result =_id ? await getTask(_id): await getAllTask()
  res.json({
      status:"Success",
    message: "Get Method",
    result,
  });
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    // send data to database
    const result = await insertTask(data);
    console.log(result);
  
    res.json({
      message: "Post Method",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

router.patch("/",async (req,res)=>{
    try{
       const result = await updateTask(req.body)
       console.log(result)
       res.json({
           status:"success",
           message:"the task has been updated",
           result
       })

    }catch(error){
res.json({
    status:"error",
    message:error.message
})
    }
})

router.delete("/:_id", async(req, res) => {
    const {_id} = req.params
    const result = await deleteTask(_id)
  res.json({
      status:"Success", 
    message: "Delete Method",
    result
  });
});

export default router;
