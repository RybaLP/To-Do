import mongoose, { mongo } from "mongoose";
import mongooseSequence from "mongoose-sequence";

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 15
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    index: {
        type: Number,
        unique: true
    }
});
taskSchema.plugin(mongooseSequence(mongoose), {
    inc_field: 'index',
    start_seq: 1,
});

const Task = mongoose.model("Task", taskSchema)
export default Task;

