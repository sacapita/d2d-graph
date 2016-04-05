import * as Common from "cubitt-common";

/**
 * Interface describing basic graph operations
 */
 export interface GraphInterface {
   /**
    * Adds a Node to the Graph
    *
    * @param id Identifier of the Node to add, this GUID should not already exist in the system
    * @param type String representing the type of the node (i.e. "FAM_NODE" or "UML_CLASS")
    * @param modelId Identifier of the model that contains this Node
    * @param properties Dictionary of properties of the Node
    */
   addNode(id: Common.Guid, type: string, modelId: Common.Guid, properties ?: Common.Dictionary<any>);

   /**
    * Adds an Edge to the Graph
    *
    * @param id Identifier of the Edge to add, this GUID should not already exist in the system
    * @param type string String representing the type of the Edge (i.e. "FAM_DATA_FLOW" or "UML_INHERITS")
    * @param modelId Identifier of the model that contains this Edge
    * @param startNodeId Identifier of the node from which this Edge will originate
    * @param StartConnectorId Identifier of the connector from which this Edge will originate
    * @param endNodeId Identifier of the node to which this Edge will go
    * @param endConnectorId Identifier of the connector to which this Edge will go
    * @param properties Dictionary of properties of the Edge
    */
   addEdge(id: Common.Guid, type: string, modelId: Common.Guid, startNodeId:Common.Guid, startConnectorId: Common.Guid, endNodeId: Common.Guid, endConnectorId: Common.Guid, properties ?: Common.Dictionary<any>);

   /**
    * Adds a Connector to the Graph
    *
    * @param id Identifier of the Connector to add, this GUID should not already exist in the system
    * @param type string String representing the type of the connector (i.e. "NETWORK_LAN" or "FAM_DATA_CONNECTOR")
    * @param nodeId Identifier of the Node that contains this Connector
    * @param properties Dictionary of properties of the Connector
    */
   addConnector(id: Common.Guid, type: string, nodeId: Common.Guid, properties ?: Common.Dictionary<any>);

   /**
    * Transforms this Graph to a plain JSON graph
    *
    */
   serialize() : Object;

   /**
    * Creates a new GraphInterface from a JSON Graph
    *
    * For the expected format, please read the documentation
    * The expected format is the same as the format returned by serialize()
    *
    * @param jsonObject JSON Object that should be converted to GraphInterface
    */
    deserialize(jsonObject : Object) : GraphInterface;
 }
