import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";

export default class UserLayout implements View {

    public static current: UserLayout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        UserLayout.current = this;

        BodyNode.append(
            (this.container = el(".user-layout",
                el("header",),
                el("main",
                    (this.content = el(".content")),
                ),
                el("footer",
                    el("a",
                        el("img", { src: "/images/icn/soullink-white.png", alt: "soulink" }),
                    ),
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