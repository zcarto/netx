class Graph {
    constructor() {
        this._nodes = new Map();
        this._attrs = new Map();
        this._degree = new Map();
        let a = new Map();
    }
    get attrs() {
        return this._attrs;
    }
    get nodes() {
        return this._nodes;
    }
    get edges() {
        return new Map();
    }
    get degree() {
        return this._degree;
    }
    addNode() { }
    addNodesFrom() { }
    addEdge() { }
    addEdgesFrom() { }
    addWeightedEdges() { }
    removeNode() { }
    removeNodesFrom() { }
    removeEdge() { }
    removeEdgesFrom() { }
    clear() { }
}
export default Graph;
