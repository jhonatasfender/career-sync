import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport";

@Injectable()
export class DummyStrategy extends PassportStrategy(Strategy, "dummy") {
  public authenticate() {
    this.fail();
  }

  public validate(): Promise<never> {
    return Promise.reject(new Error("Dummy strategy always fails"));
  }
}
