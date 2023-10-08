"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUser = void 0;
const PrismaClient_1 = __importDefault(require("../utils/PrismaClient.js"));
const checkUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function*() {
    try {
        const { email } = req.body();
        if (!email)
            return res.json({ msg: "Email is required", status: false });
        const prisma = (0, PrismaClient_1.default)();
        const user = yield prisma.user.findUnique({ where: { email } });
        if (!user)
            return res.json({ msg: "User not found", status: false });
        return res.json({ msg: "User found", status: true, user });
    } catch (e) {
        next(e);
    }
});
exports.checkUser = checkUser;