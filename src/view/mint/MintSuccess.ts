import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import BaseLayout from "../BaseLayout";

export default class MintSuccess implements View {

    private container: DomNode;

    constructor() {
        BaseLayout.current.title = "Success";
        BaseLayout.current.content.append(
            (this.container = el(".mint-success-view",
                el("header",
                    el(".top-container",
                        el("a", { href: "/" }, "About,Soulink"),
                        el(".stepper-wrapper",
                        ),
                        el("a", "Wallet.eth"),
                    ),
                ),
                el("main",
                    el("img", { src: "", alt: "" }),
                    el("p", "Yay! Now",
                        el("p.primary", "soulLink"),
                        "is forever yours !"
                    ),
                ),
            )),
        )
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}