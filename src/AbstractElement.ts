import * as Common from "cubitt-common"
import {ElementType} from "./ElementType"
import {Graph} from "./Graph"

export abstract class AbstractElement {
    protected id: Common.Guid;
	  protected type: ElementType;
	  protected properties: Common.Dictionary<any>;
    protected nodeNeighbours: Common.Dictionary<Common.Guid>;
    protected edgeNeighbours: Common.Dictionary<Common.Guid>;
    protected connectorNeighbours: Common.Dictionary<Common.Guid>;
    protected modelNeighbours: Common.Dictionary<Common.Guid>;

  /**
   * @param id GUID of the Element that is created
   * @param properties of the Element
   */
   constructor(id: Common.Guid, properties: Common.Dictionary<any> = {}) {
        this.id = id;
        this.properties = properties;
   }

   /**
    * Returns identifier of this element
    */
    get Id(): Common.Guid {
		    return this.id;
	  }

    /**
     * Returns type of this element
     */
    public abstract getType(): ElementType;

    /**
     * Adds a neighbour of type Node to this Element
     *
     * @param id Guid of the element that should be added
     */
    public addNodeNeighbour(id : Common.Guid) {
        this.nodeNeighbours[id.toString()] = id;
    }

    /**
     * Adds a Neighbour of type Edge to this Element
     *
     * @param id Guid of the element that should be added
     */
    public addEdgeNeighbour(id : Common.Guid) {
        this.edgeNeighbours[id.toString()] = id;
    }

    /**
     * Adds a neighbour of type Connector to this Element
     *
     * @param id Guid of the element that should be added
     */
    public addConnectorNeighbour(id : Common.Guid) {
        this.connectorNeighbours[id.toString()] = id;
    }

    /**
     * Adds a neighbour of type Model to this Element
     *
     * @param id Guid of the element that should be added
     */
    public addModelNeighbour(id: Common.Guid) {
        this.modelNeighbours[id.toString()] = id;
    }

    /**
     * Sets a property on this Element
     *
     * @param name Name of the property to set
     * @param value desired value
     */
    public setProperty(name: string, value: any) {
        this.properties[name] = value;
    }

    /**
     * Returns a value of a property of this Element
     *
     * @param name Name of the property to retrieve
     */
    public getProperty(name: string) : any {
        return this.properties[name];
    }

    /**
     * Returns all properties of this Element
     */
    public getProperties() : Common.Dictionary<any> {
        return this.properties;
    }
}
