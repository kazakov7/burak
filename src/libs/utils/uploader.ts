import path from "path";
import multer from "multer";
import { SocketAddress } from "net";
const { v4 } = require("uuid");

function getTargetImageStroage(address: any) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./uploads/${address}`);
    },
    filename: function (req, file, cb) {
      console.log(file);
      const extension = path.parse(file.originalname).ext;
      const random_name = v4() + extension;
      cb(null, random_name);
    },
  });
}

const makeUploader = (address: string) => {
  const storage = getTargetImageStroage(address);
  return multer({ storage: storage });
};

export default makeUploader;
// const product_storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/products");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     const extension = path.parse(file.originalname).ext;
//     const random_name = v4() + extension;
//     cb(null, random_name);
//   },
// });

// export const uploadProductImage = multer({ storage: product_storage });
