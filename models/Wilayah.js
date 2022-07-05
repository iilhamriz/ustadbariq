import mongoose from "mongoose";

const Wilayah = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    ketinggian: String,
    suhu: String
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Wilayah", Wilayah);
