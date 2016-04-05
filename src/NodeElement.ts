import * as Common from "cubitt-common"
import {ElementType} from "./ElementType"
import {AbstractElement} from "./AbstractElement";
import {Graph} from "./Graph";

/**
 * Element representing a true higher-level Node in the graph, see documentation for more information
 */
export class NodeElement extends AbstractElement {

    /**
     * @inheritdoc
     */
    public getType(): ElementType {
        return ElementType.Node;
    }
}
