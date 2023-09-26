const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/addtransaction", addTransection);
//Edit transection POST MEthod
router.post("/edittransaction", editTransection);
//Delete transection POST MEthod
router.post("/deletetransaction", deleteTransection);

//get transections
router.post("/gettransaction", getAllTransection);

module.exports = router;
