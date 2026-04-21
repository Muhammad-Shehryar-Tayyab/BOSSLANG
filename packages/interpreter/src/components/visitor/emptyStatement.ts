import Visitor from ".";
import { ASTNode } from "boss-lang-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}

