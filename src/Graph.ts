class Graph<N = any> {
  private _nodes = new Map<N, any>();
  private _attrs = {};
  private _degree = new Map();
  private _adj = new Map();

  constructor() {
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

  addNode(n: N, attrs = {}) {
    if (!this._nodes.has(n)) {
      this._adj.set(n, new Map());
      this.nodes.set(n, attrs);
    } else {
      Object.assign(this.nodes.get(n), attrs);
    }
  }
  addNodesFrom(ns: N[], attrs = {}) {
    ns.forEach(n => this.addNode(n, attrs));
  }
  addEdge(u: N, v: N, attrs = {}) {
    if (!this._nodes.has(u)) {
      this._nodes.set(u, {});
      this._adj.set(u, new Map());
    }
    if (!this._nodes.has(v)) {
      this._nodes.set(v, {});
      this._adj.set(v, new Map());
    }
    let adj = this._adj.get(u);

    let edgeAttrs = { ...this._adj.get(u)["v"], ...attrs };
  }
  addEdgesFrom() {}
  addWeightedEdges() {}
  removeNode(n: N) {}
  removeNodesFrom() {}
  removeEdge() {}
  removeEdgesFrom() {}
  clear() {}
}

export default Graph;
