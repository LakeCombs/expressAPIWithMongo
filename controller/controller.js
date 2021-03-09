const express = require("express");
const studentModel = require("../model/model");
const router = express();
const multer = require("multer");

const storage = multer.diskStorage({
	destinatin: function (req, res, cb) {
		cb: null, "../Photo";
	},
	filename: function (req, res, cb) {
		cb: null, orginal.filename;
	}
});

const uploadPicture = multer({ storage: storage }).single("picture");

const getAllStudent = async (req, res) => {
	try {
		const students = await studentModel.get();
		res.status(200).json(students);
	} catch (error) {
		res.status(400).send(error);
	}
};

const getOneStudent = async (req, res) => {
	try {
		const student = await studentModel.findById(req.params.id);
		res.status(200).json(student);
	} catch (error) {
		res.status(400).send(error);
	}
};

const addStudent = async (req, res) => {
	const newStudent = {
		name: name,
		course: course,
		picture: picture
	};

	try {
		const postStudent = await studentModel.create(newStudent);
		res.status(200).json(postStudent);
	} catch (error) {
		res.status(400).send(error);
	}
};

const deleteOneStudent = async (req, res) => {
	try {
		const deletingStudent = await studentModel.findOneAndDelete(req, params.id);
		res.status(200).json(deletingStudent);
	} catch (error) {
		res.status(400).send(error);
	}
};

const deletingAllStudent = async (req, res) => {
	try {
		const deletingAll = await studentModel.deleteAll();
	} catch (error) {
		res.status(400).send(error);
	}
};

const EditingStudent = async (req, res) => {
	try {
		const editing = await studentModel.findByIdAndUpdate(req.params.id);
		res.status(200).json(editing);
	} catch (error) {
		res.status(400).send(error);
	}
};

module.export = {
	uploadPicture,
	getAllStudent,
	getOneStudent,
	addStudent,
	deleteOneStudent,
	deletingAllStudent,
	EditingStudent
};
