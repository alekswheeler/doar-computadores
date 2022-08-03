"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const routes_1 = require("../../../../routes");
describe("Create Donation", () => {
    test("Should not be able to creat donation with missing required fields", () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            //name: "alex",
            email: "alex44.123@gmail.com",
            phone: "55123456789",
            zip: "10001",
            //city: "Baltimore",
            state: "MD",
            streetAddress: "Delancey St",
            //number: 80,
            complement: "Apartment",
            neighborhood: "ashhjasj",
            deviceCount: 2,
            devices: [
                {
                    type: "screen",
                    condition: "broken"
                },
                {
                    type: "scanner",
                    condition: "working"
                }
            ]
        };
        yield (0, supertest_1.default)(routes_1.router).post("/donation").send(userData).then(response => {
            expect(response.status).toBe(400);
            expect(JSON.parse(response.text)).toHaveProperty("errorMessage");
        });
    }));
    //A mesangem de erro do email muda para cada email recebido
    test("Should not be able to create donation with invalid email", () => __awaiter(void 0, void 0, void 0, function* () {
        //Os emails comentados não são aceitos
        const userData = {
            name: "alex",
            email: "alex@gmail",
            // "email": "alexgmail.com",
            //"email": "alexgmail.com.",
            phone: "55123456789",
            zip: "10001",
            city: "Baltimore",
            state: "MD",
            streetAddress: "Delancey St",
            number: 80,
            complement: "Apartment",
            neighborhood: "ashhjasj",
            deviceCount: 2,
            devices: [
                {
                    type: "screen",
                    condition: "broken"
                },
                {
                    type: "scanner",
                    condition: "working"
                }
            ]
        };
        yield (0, supertest_1.default)(routes_1.router).post("/donation").send(userData).then(response => {
            expect(response.status).toBe(400);
            const resObj = JSON.parse(response.text);
            expect(resObj.error).toBe(true);
            expect(resObj).toHaveProperty("errorMessage");
        });
    }));
    test("Should not be able to create donation with deviceCount from number of devices sent", () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            name: "alex",
            email: "alex44.123@gmail.com",
            phone: "55123456789",
            zip: "10001",
            city: "Baltimore",
            state: "MD",
            streetAddress: "Delancey St",
            number: 80,
            complement: "Apartment",
            neighborhood: "ashhjasj",
            deviceCount: 4,
            devices: [
                {
                    type: "screen",
                    condition: "broken"
                },
                {
                    type: "scanner",
                    condition: "working"
                }
            ]
        };
        yield (0, supertest_1.default)(routes_1.router).post("/donation").send(userData).then(response => {
            expect(response.status).toBe(400);
            const resObj = JSON.parse(response.text);
            expect(resObj.error).toBe(true);
            expect(resObj).toHaveProperty("errorMessage");
        });
    }));
    test("Should not be able to create Donation without devices", () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            name: "alex",
            email: "alex44.123@gmail.com",
            phone: "55123456789",
            zip: "10001",
            city: "Baltimore",
            state: "MD",
            streetAddress: "Delancey St",
            number: 80,
            complement: "Apartment",
            neighborhood: "ashhjasj",
            deviceCount: 2,
        };
        yield (0, supertest_1.default)(routes_1.router).post("/donation").send(userData).then(response => {
            expect(response.status).toBe(400);
            const resObj = JSON.parse(response.text);
            expect(resObj.error).toBe(true);
            expect(resObj).toHaveProperty("errorMessage");
        });
    }));
    test("Should not be able to create Donation with wrong types", () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            name: "alex",
            email: "alex44.123@gmail.com",
            phone: "55123456789",
            zip: "10001",
            city: "Baltimore",
            state: "MD",
            streetAddress: "Delancey St",
            number: 80,
            complement: "Apartment",
            neighborhood: "ashhjasj",
            deviceCount: 2,
            devices: [
                {
                    type: "screennn",
                    condition: "broken"
                },
                {
                    type: "scanner",
                    condition: "working"
                }
            ]
        };
        yield (0, supertest_1.default)(routes_1.router).post("/donation").send(userData).then(response => {
            expect(response.status).toBe(400);
            const resObj = JSON.parse(response.text);
            expect(resObj.error).toBe(true);
            expect(resObj).toHaveProperty("errorMessage");
        });
    }));
    test("Should not be able to create donation with wrong phone number", () => __awaiter(void 0, void 0, void 0, function* () {
        //Os emails comentados não são aceitos
        const userData = {
            name: "alex",
            email: "alex44.123@gmail.com",
            phone: "551234",
            zip: "10001",
            city: "Baltimore",
            state: "MD",
            streetAddress: "Delancey St",
            number: 80,
            complement: "Apartment",
            neighborhood: "ashhjasj",
            deviceCount: 2,
            devices: [
                {
                    type: "screen",
                    condition: "broken"
                },
                {
                    type: "scanner",
                    condition: "working"
                }
            ]
        };
        yield (0, supertest_1.default)(routes_1.router).post("/donation").send(userData).then(response => {
            expect(response.status).toBe(400);
            const resObj = JSON.parse(response.text);
            expect(resObj.error).toBe(true);
            expect(resObj).toHaveProperty("errorMessage");
        });
    }));
    test("Should be able to create donation", () => __awaiter(void 0, void 0, void 0, function* () {
        //Os emails comentados não são aceitos
        const userData = {
            name: "alex",
            email: "alex44.123@gmail.com",
            phone: "55123456789",
            zip: "10001",
            city: "Baltimore",
            state: "MD",
            streetAddress: "Delancey St",
            number: 80,
            complement: "Apartment",
            neighborhood: "ashhjasj",
            deviceCount: 2,
            devices: [
                {
                    type: "screen",
                    condition: "broken"
                },
                {
                    type: "scanner",
                    condition: "working"
                }
            ]
        };
        yield (0, supertest_1.default)(routes_1.router).post("/donation").send(userData).then(response => {
            expect(response.statusCode).toBe(200);
        });
    }));
});
