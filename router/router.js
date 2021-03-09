const express = require("express");
const { Router } = require("express");

const {
	uploadPicture,
	getAllStudent,
	getOneStudent,
	addStudent,
	deleteOneStudent,
	deletingAllStudent,
	EditingStudent
} = require("../controller/controller");

const router = express.Router();

router.post("/", addStudent, uploadPicture);
router.get("/", getAllStudent, uploadPicture);
router.get("/:id", getOneStudent, uploadPicture);
router.delete("/", deletingAllStudent, uploadPicture);
router.delete("/:id", deleteOneStudent, uploadPicture);
router.put("/:id", EditingStudent, uploadPicture);

module.exports = router;