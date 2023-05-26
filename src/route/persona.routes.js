import { Router } from "express";

import { addPersona, getPersonas,getPersonaById,deletePersonaById,updatePersonaById} from '../controllers/persona.controller'

const router = Router();

router.get('/persona', getPersonas);

router.post('/persona', addPersona);

router.get("/persona/:id", getPersonaById);

router.delete("/persona/:id", deletePersonaById);

router.put("/persona/:id", updatePersonaById);


export default router;