import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";

export default class Landing implements View {

    private container: DomNode;

    constructor() {
        BodyNode.append(
            (this.container = el(".admin-layout",
            )),
        )
    }

    public set title(title: string) {
        document.title = `${title} | Soulink`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}