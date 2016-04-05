import * as Common from "cubitt-common"
import {ElementType} from "./ElementType"
import {AbstractElement} from "./AbstractElement"
import {Graph} from "./Graph"

/**
 * Element representing a Model
 */
export class ModelElement extends AbstractElement {

    /**
     * @inheritdoc
     */
    public getType(): ElementType {
        return ElementType.Model;
    }
  }
