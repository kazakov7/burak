import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/errors";
import { Member, memberInput } from "../libs/types/member";
import MemberModels from "../schema/Member.models";

class MemberService {
  private readonly memberModel;
  constructor() {
    this.memberModel = MemberModels;
  }

  public async processSignup(input: memberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTARAUNT })
      .exec();

    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
    console.log("exis", exist);
    try {
      const result = await this.memberModel.create(input);
      result.MemberPassword = "";
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
    }
  }
}

export default MemberService;
