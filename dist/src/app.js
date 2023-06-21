"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = __importDefault(require("./db"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", false);
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`);
  (0, db_1.default)();
  (0, routes_1.default)(app);
});
