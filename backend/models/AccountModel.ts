import mongoose, { Schema } from 'mongoose';
import AccountType from './AccountTypeModel';
import Department from './DepartmentModel';

const accountSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
  },
  fullname:{
    type: String,
    required: true,
  },
  avatar:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  idTypeAccount:{
    type: Schema.Types.ObjectId,
    ref: 'AccountType',
    required: true,
  },
  idDepartment:{
    type: Schema.Types.ObjectId,
    ref: 'Department',
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

let Account = mongoose.model('Account', accountSchema);

export default Account;

