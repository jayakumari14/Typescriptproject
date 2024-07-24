import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/julypost");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

mongoose.model("user", userSchema);

const User = mongoose.model("User", userSchema);

export default User;
