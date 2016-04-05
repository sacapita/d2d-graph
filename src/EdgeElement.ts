import * as Common from "cubitt-common"
import {ElementType} from "./ElementType"
import {AbstractElement} from "./AbstractElement"
import {Graph} from "./Graph"

export class EdgeElement extends AbstractElement {

    protected start: Common.Guid;
    protected end: Common.Guid;

    /**
     * @inheritdoc
     */
    public getType(): ElementType {
        return ElementType.Edge;
    }

    /**
     * Returns the start ConnectorID
     */
    public getStartConnector() : Common.Guid {
        return this.start;
    }

    /**
     * Returns the end ConnectorID
     */
    public getEndConnector() : Common.Guid {
        return this.end;
    }

    /**
     * Sets the StartConnector
     *
     * @param ConnectorID ID of the connector
     */
    public addStartConnector(connectorId: Common.Guid) {
        this.start = connectorId;
        this.addConnectorNeighbour(connectorId);
    }

    /**
     * Sets the EndConnector
     *
     * @param ConnectorID ID of the connector
     */
    public addEndConnector(connectorId: Common.Guid) {
        this.end = connectorId;
        this.addConnectorNeighbour(connectorId);
    }
}
