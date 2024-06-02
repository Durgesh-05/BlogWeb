import multer from "multer";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const publicPath = path.join(dirname(__filename), "public");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, publicPath);
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()} - ${file.originalname}`;
    cb(null, fileName);
  },
});

export const upload = multer({ storage });
