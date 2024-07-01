import mongoose, { Schema } from 'mongoose';
import AssetType from './AssetTypeModel';

const assetSchema = new mongoose.Schema({
  codeAsset:{
    type: String,
    required: true,
  },
  nameAsset:{
    type: String,
    required: true,
  },
  idTypeAsset:{
    type: Schema.Types.ObjectId,
    ref: 'AssetType',
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

let Asset = mongoose.model('Asset', assetSchema);

export default Asset;

