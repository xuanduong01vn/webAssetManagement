import mongoose, { Schema } from 'mongoose';

const departmentSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  createAt:{
    type: Date,
    default: Date.now,
  },
  isDeleted:{
    type: Boolean,
    required: true,
  },
},
{
  versionKey: false
});

let Department = mongoose.model('Department', departmentSchema);

export default Department;

