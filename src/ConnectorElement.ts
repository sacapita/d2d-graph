import * as Common from "cubitt-common"
import {ElementType} from "./ElementType"
import {AbstractElement} from "./AbstractElement"
import {Graph} from "./Graph"

/**
 * Class representing connectors of nodes
 */
export class ConnectorElement extends AbstractElement {

    /**
     * @inheritdoc
     */
    public getType(): ElementType {
        return ElementType.Connector;
    }
  }
