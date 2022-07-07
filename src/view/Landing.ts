import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import UserLayout from "./UserLayout";
import ViewUtil from "./ViewUtil";

export default class Landing implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "";
        UserLayout.current.content.append(
            (this.container = el(".landing-view",
                el("h1", "Soulink Router"),
                el("a", "linktree", { click: () => { ViewUtil.go("/dilrong") } }),
                el("a", "graph", { click: () => { ViewUtil.go("/graph") } }),
                el("a", "admin", { click: () => { ViewUtil.go("/admin") } }),
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