import Graph from "graphology";
import Sigma from "sigma";
import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import UserLayout from "./UserLayout";

export default class GraphTree implements View {

    private container: DomNode;
    private graphContainer: DomNode;

    constructor() {
        UserLayout.current.title = "@dilrong";
        UserLayout.current.content.append(this.container = el(".graph-tree-view",
            el("header",
                el(".img-container",
                    el("img", { src: "", alt: "" }),
                    el("p", "D"),
                ),
                el("h1", "@dilrong"),
            ),
            this.graphContainer = el("section",
            ),
        ));
        this.init();
    }

    public init() {
        this.loadGraph(this.graphContainer.domElement)
    }

    public loadGraph(container: HTMLElement) {

        const graph = new Graph();

        graph.addNode("GENESIS", { x: 0, y: 10, size: 10, label: "GAIA GENESIS", color: "rgba(177, 156, 118, 1)" });
        graph.addNode("SUPERNOVA", { x: 5, y: 10, size: 10, label: "GAIA SUPERNOVA", color: "rgba(153, 0, 19, 1)" });
        graph.addNode("STABLEDAO", { x: 10, y: 10, size: 10, label: "GAIA STABLEDAO", color: "rgba(0, 68, 90, 1)" });
        graph.addNode("DSC", { x: 10, y: 0, size: 10, label: "DSC", color: "black" });

        graph.addEdge("GENESIS", "SUPERNOVA");
        graph.addEdge("SUPERNOVA", "DSC");
        graph.addEdge("STABLEDAO", "DSC");
        graph.addEdge("GENESIS", "DSC");

        const renderer = new Sigma(graph, container);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}