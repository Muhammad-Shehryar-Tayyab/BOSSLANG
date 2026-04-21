import Visitor from ".";
import { ASTNode } from "boss-lang-parser";

export default class StringLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}

