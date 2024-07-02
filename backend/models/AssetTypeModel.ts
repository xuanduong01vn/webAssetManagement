import mongoose from 'mongoose';

const assetTypeSchema = new mongoose.Schema({
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

let AssetType = mongoose.model('AssetType', assetTypeSchema);

export default AssetType;

