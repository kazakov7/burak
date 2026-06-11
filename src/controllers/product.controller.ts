import Errors, { HttpCode, Message } from "../libs/errors";
import { T } from "../libs/types/common";
import { Request, Response } from "express";
import ProductService from "../models/product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";

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
productController.createNewProduct = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("createNewProduct");
    if (!req.files)
      new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATED_FAILED);

    const data: ProductInput = req.body;

    data.productImages = req.files?.map((ele) => {
      return ele.path;
    });

    await productService.createNewProduct(data);
    res.send(
      `<script>alert("succesfullycreation"); window.location.replace('/admin/product/all');</script>`,
    );
  } catch (err) {
    console.log("Error createNewProduct:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_VENT_WRONG;
    res.send(
      `<script>alert("${message}"); window.location.replace('/admin/product/all');</script>`,
    );
  }
};
productController.updateChoosenProduct = async (
  req: Request,
  res: Response,
) => {
  try {
    console.log("updateChoosenProduct");
    const id = req.params.id;
    const result = await productService.updateChoosenProduct(id, req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error updateChoosenProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

export default productController;
