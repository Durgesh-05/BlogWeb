import multer from "multer";
import path from "path";
const publicPath = path.join(__dirname, "public");

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
