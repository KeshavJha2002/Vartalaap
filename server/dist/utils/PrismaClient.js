"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
let prismaInstance = null;
const getPrismaInstance = () => {
    if (!prismaInstance) {
        prismaInstance = new client_1.PrismaClient();
    }
    return prismaInstance;
};
exports.default = getPrismaInstance;
