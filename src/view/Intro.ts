import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import BaseLayout from "./BaseLayout";
import ViewUtil from "./ViewUtil";

export default class Intro implements View {

    private container: DomNode;

    constructor() {
        BaseLayout.current.title = "Intro";
        BaseLayout.current.content.append(this.container = el(".intro-view",
            el("header",
                el(".top-container",
                    el("a", { href: "/" }, "About,Soulink"),
                    el(".stepper-wrapper",
                    ),
                    el("a", "Wallet.eth"),
                ),
            ),
            el("main",
                el(".left-container",
                    el("h1",
                        el(".primary", "Link your web3's"),
                        el("p", "Soul"),
                        el("img", { src: "", alt: "soullink" }),
                    ),
                ),
                el(".right-container",
                    el("p", "It all started when",
                        el("..white-both", "BTC"),
                        "became the new gold."),
                    el("p",
                        el(".white-right", "ETH"),
                        "became the new cash."),
                    el("p",
                        el(".white-right", "DeFi"),
                        "is replacing banks."),
                    el("p",
                        el(".white", "NFT"),
                        "s have become a means of storing value."),
                    el("p",
                        el(".white", "PFP"),
                        "s replaced our faces."),
                    el("p", "And now, thanks to",
                        el(".white-left", "SBT"),
                        "s",
                    ),
                    el("p",
                        el(".primary", "Soulink"),
                        "will be synonymous to",
                        el(".white-left", "connect"),
                        "."
                    ),
                    el("p", "Welcome to web3."),
                    el(".link-container",
                        el("h6",
                            el(".primary", "Let's"),
                            el("span", "Link!"),
                        ),
                        el("a", { click: () => { ViewUtil.go("/mint") } },
                            el(".primary", "Mint"),
                            el("span", "Soullink"),
                        ),
                    ),
                    el("h6",
                        el(".primary", "Let's"),
                        el("span", "Link!"),
                    ),
                ),
            ),
            el("footer",
                el(".logo-container",
                    el(""),
                    el("p", "SoulLink"),
                ),
                el(".sns-container",
                    el("a", "About"),
                    el("a", "Team"),
                    el("a", "Twitter"),
                    el("a", "Discord"),
                ),
            ),
        ))
    }

    public set title(title: string) {
        document.title = `${title} | Soulink`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}