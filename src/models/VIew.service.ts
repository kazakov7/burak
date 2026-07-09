import Errors, { HttpCode, Message } from "../libs/errors";
import { View, ViewInput } from "../libs/types/view.group";
import VIewModels from "../schema/VIew.models";

class ViewService {
  private readonly viewModel;
  constructor() {
    this.viewModel = VIewModels;
  }

  public async checkViewExitence(input: ViewInput): Promise<View> {
    return (await this.viewModel.findOne({
      memberId: input.memberId,
      viewRefId: input.viewRefId,
    })) as unknown as View;
  }

  public async insertMemberView(input: ViewInput): Promise<View> {
    try {
      return (await this.viewModel.create(input)) as unknown as View;
    } catch (err) {
      console.log("Error on insertMemberView", err);
      throw new Errors(HttpCode.OK, Message.CREATED_FAILED);
    }
  }
}

export default ViewService;
