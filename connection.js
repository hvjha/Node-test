const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Harsh");
const NodeSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    address: String,
    zip: Number,
  },
  { collection: "Node" }
);
// Insert Data in mongoose
const insertInDB = async () => {
  const NodeModel = mongoose.model("Node", NodeSchema);
  let data = new NodeModel({
    name: "Ayush",
    age: 26,
    address: "Biraul",
    zip: 847203,
  });
  let result = await data.save();
  console.log(result);
};
// insertInDB();

// update data in mongoose
const updateInDB = async () =>{
    const NodeModel = mongoose.model("Node", NodeSchema);
    let data = await NodeModel.updateOne(
        {name:"Manohar"},
        {$set:{age:23,address:"Korthu",zip:847202}}
    )
    console.log(data)
}
// updateInDB();

// delete data from mongoose
const deleteInDB =async ()=>{
    const NodeModel = mongoose.model("Node", NodeSchema);
    let data = await NodeModel.deleteOne(
        {name:"Manohar"}
    );
    console.log(data)
}
// deleteInDB();

// Find/Read data in mongoose
const findInDB =async ()=>{
    const NodeModel = mongoose.model("Node", NodeSchema);
    let data = await NodeModel.find();
    console.log(data)
}
findInDB();