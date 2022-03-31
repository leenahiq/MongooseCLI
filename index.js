require("dotenv").config();
const mongoose = require("mongoose");
// estabilish connection to database server
(async () => {
  mongoose.connect(process.env.MONGO_URI);

  const Cat = mongoose.model("Cat", {
    name: { type: String, unique: true },
  });

  await Cat.deleteMany({});

  //   const cat = new Cat({ name: "Zildjian" });
  //   await cat.save();
  //   console.log(cat);
  //   const foundCat = await Cat.findById("624436df8a4e3ad6af7dd8f2");

  //    console.log(foundCat);

  mongoose.connect(process.env.MONGO_URI);
  //closing coneection database server
  mongoose.connection.close();
})();
