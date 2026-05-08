import express from 'express'
import {createIncident} from '../controllers/createIncident.js'

const router = express.Router();

router.post("/create" , createIncident);

export default router;