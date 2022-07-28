import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import LinkItem from "../component/LinkItem";
import UserLayout from "./UserLayout";

export default class LinkTree implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "@NAME";
        UserLayout.current.content.append(this.container = el(".link-tree-view",
            el("header",
                el(".top-container",
                    el("a", { href: "/" }, "About,Soulink"),
                    el(".stepper-wrapper",
                        el("a.stepper-item",
                            el(".stepper-counter", ""),
                            el("p.stepper-title", "Links"),
                        ),
                        el("a.stepper-item",
                            el(".stepper-counter", ""),
                            el("p.stepper-title", "NFTs"),
                        ),
                        el("a.stepper-item",
                            el(".stepper-counter", ""),
                            el("p.stepper-title", "Soulmate"),
                        ),
                    ),
                    el("a", "Wallet.eth"),
                ),
                el(".img-container",
                    el("img", { src: "", alt: "" }),
                    el("p", "N"),
                ),
                el("h1", "NAME"),
                el("a.add-souler", "ADD Souler"),
            ),
            el("article",
                new LinkItem("OPENSEA", "https://opensea.io/"),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}