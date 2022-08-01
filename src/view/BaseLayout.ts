import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";

export default class BaseLayout implements View {

    public static current: BaseLayout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        BaseLayout.current = this;

        BodyNode.append(
            (this.container = el(".base-layout",
                el("main",
                    (this.content = el(".content")),
                ),
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