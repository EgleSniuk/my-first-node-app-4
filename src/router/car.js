
import express from "express";
import { 
  getAllCars, 
  getCarById, 
  insertCar, 
  updateCarById,
  deleteCarById } from "../controller/car.js";

// import auth from "../middleware/auth.js";

const router = express.Router();

// router.get("/cars", auth, getAllCars);

// router.get("/cars/:id", auth, getCarById);

// router.post("/cars", auth, insertCar);

// router.put("/cars/:id", auth, updateCarById);

// router.delete("/cars/:id", auth, deleteCarById);


router.get("/cars", getAllCars);

router.get("/cars/:id", getCarById);

router.post("/cars", insertCar);

router.put("/cars/:id", updateCarById);

router.delete("/cars/:id", deleteCarById);

export default router;
