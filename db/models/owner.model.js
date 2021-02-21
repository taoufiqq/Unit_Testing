const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Owner = new Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    cin: {
      type: String,
      required: true,
    }
    
  },
  {
    versionKey: false
}
);

const OwnersList = mongoose.model("Owner", Owner);
module.exports = OwnersList;
