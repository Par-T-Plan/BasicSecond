const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    taskname: String,
    taskdescription: String
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
