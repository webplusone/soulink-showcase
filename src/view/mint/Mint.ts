import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import BaseLayout from "../BaseLayout";

export default class Mint implements View {

    private container: DomNode;

    constructor() {
        BaseLayout.current.title = "Mint";
        BaseLayout.current.content.append(
            (this.container = el(".mint-view",
                el("header",
                    el(".top-container",
                        el("a", { href: "/" }, "About,Soulink"),
                        el(".stepper-wrapper",
                        ),
                        el("a", "Wallet.eth"),
                    ),
                ),
                el("main",
                    el("h1", "SOULINK"),
                    el(".divider"),
                    el(".content",
                        el("img", { src: "", alt: "mint" }),
                        el(".mint-container",
                            el("h6",
                                el(".primary", "Let's "),
                                "Link!"),
                            el(".stepper-wrapper",
                                el(".line"),
                                el("a.stepper-item.frist",
                                    el(".stepper-counter.active", ""),
                                    el("p.stepper-title", "Promotion"),
                                ),
                                el("a.stepper-item",
                                    el(".stepper-counter", ""),
                                    el("p.stepper-title", "Privit Presale"),
                                ),
                                el("a.stepper-item",
                                    el(".stepper-counter", ""),
                                    el("p.stepper-title", "Presale"),
                                ),
                                el("a.stepper-item",
                                    el(".stepper-counter", ""),
                                    el("p.stepper-title", "Public Sale"),
                                ),
                                el("a.stepper-item",
                                    el(".stepper-counter", ""),
                                    el("p.stepper-title", "LFG"),
                                ),
                            ),
                            el(".info-container",
                                el(".content",
                                    el(".status"),
                                    el("p.caption", "Quantity : MAX 1 per wallet :"),
                                    el("p.amount", "1"),
                                ),
                                el(".content.right",
                                    el(".status"),
                                    el("p.caption", "Price :"),
                                    el("p.amount",
                                        "0.1",
                                        el("p.unit", "eth"),
                                    ),
                                ),
                            ),
                            el(".button-container",
                                el("a", "Connect Wallet"),
                                el("a", "Soul Mint!"),
                            ),
                            el("p", "It is designed with an SBT token, so once you buy it, you cannot sell is back. It is attached to your crypto wallet"),
                        ),
                    ),
                    el(".divider"),
                ),
                el("footer",
                    el("a",
                        el("img", { src: "/images/icn/soullink-color.png", alt: "soulink" }),
                        el("p", "SoulLink"),
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