import Errors, { HttpCode, Message } from "../libs/errors";
import { T } from "../libs/types/common";
import { Request, Response } from "express";
import ProductService from "../models/product.service";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { ProductInput, ProductInquery } from "../libs/types/product";
import { ProductCollection } from "../libs/enums/product.enum";

const productService = new ProductService();

const productController: T = {};
productController.getProducts = async (req: Request, res: Response) => {
  try {
    console.log("getProduct");
    const { order, page, limit, productCollection, search } = req.query;
    const inquery: ProductInquery = {
      order: String(order),
      page: Number(page),
      limit: Number(limit),
    };
    if (productCollection) {
      inquery.productCollection = productCollection as ProductCollection;
    }
    if (search) inquery.search = String(search);
    const result = await productService.getProducts(inquery);
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error getProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

productController.getAllProduct = async (req: Request, res: Response) => {
  try {
    console.log("goHame");
    const data = await productService.getAllProduct();
    res.render("products", { products: data });
  } catch (err) {
    console.log("Error getAllProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

productController.getProduct = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getProduct");
    const id = req.params.id;
    const memberId = req.member?._id ?? null,
      result = await productService.getProduct(memberId, id);

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error getProduct:", err);
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
