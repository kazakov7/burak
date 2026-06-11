import Errors, { HttpCode, Message } from "../libs/errors";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }
  //SSR
  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return (await this.productModel.create(input)) as unknown as Product;
    } catch (err) {
      console.error("Error, model:createNewProduct", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
    }
  }
}

export default ProductService;
