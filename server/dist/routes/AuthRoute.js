"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = require("../controller/AuthController.js");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/check-user', AuthController_1.checkUser);
exports.default = router;