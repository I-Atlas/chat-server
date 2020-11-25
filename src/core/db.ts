import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://iliya:helloworldiliya@atlas.7gaar.mongodb.net/chat?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MongoDB connected.");
  }).catch((error: any) => {
    console.log(`Something went wrong: ${error}`);
    process.exit(1);
  });
