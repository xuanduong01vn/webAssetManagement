import mongoose from 'mongoose';

const accountTypeSchema = new mongoose.Schema({
  codeType:{
    type: String,
    required: true,
  },
  nameType :{
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

let AccountType = mongoose.model('AccountType', accountTypeSchema);

export default AccountType;

