import express from "express";
import { createPatient , updatePatient, deletePatient, getpatient, getpatients} from "../controllers/patientsinup.js";

const router = express.Router();


router.post('/', createPatient);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);
router.get('/:id', getpatient);
router.get('/', getpatients);

export default router;
