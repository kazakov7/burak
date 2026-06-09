import Errors from "../libs/errors";
import { T } from "../libs/types/common";
import { Request, Response } from "express";
import ProductService from "../models/product.service";

const productService = new ProductService();

const productController: T = {};
productController.getAllProduct = async (req: Request, res: Response) => {
  try {
    console.log("goHame");
    res.render("products");
  } catch (err) {
    console.log("Error goHome:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};
productController.createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("createNewProduct");
  } catch (err) {
    console.log("Error createNewProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};
productController.updateChoosenProduct = async (
  req: Request,
  res: Response,
) => {
  try {
    console.log("updateChoosenProduct");
  } catch (err) {
    console.log("Error updateChoosenProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

export default productController;
