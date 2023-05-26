"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _persona = require("../controllers/persona.controller");
var router = (0, _express.Router)();
router.get('/persona', _persona.getPersonas);
router.post('/persona', _persona.addPersona);
router.get("/persona/:id", _persona.getPersonaById);
router["delete"]("/persona/:id", _persona.deletePersonaById);
router.put("/persona/:id", _persona.updatePersonaById);
var _default = router;
exports["default"] = _default;