import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import LinkItem from "../../component/LinkItem";
import UserLayout from "../UserLayout";
import ViewUtil from "../ViewUtil";

export default class AdminNft implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "Admin";
        UserLayout.current.content.append(this.container = el(".admin-nft-view",
            el("header",
                el(".top-container",
                    el("a", { href: "/" }, "About,Soulink"),
                    el(".stepper-wrapper",
                        el(".line"),
                        el("a.stepper-item", { click: () => { ViewUtil.go("/admin") } },
                            el(".stepper-counter", ""),
                            el("p.stepper-title", "Links"),
                        ),
                        el("a.stepper-item", { click: () => { ViewUtil.go("/admin/nfts") } },
                            el(".stepper-counter.active", ""),
                            el("p.stepper-title", "NFTs"),
                        ),
                        el("a.stepper-item", { click: () => { ViewUtil.go("/admin/soulmate") } },
                            el(".stepper-counter", ""),
                            el("p.stepper-title", "Soulmates"),
                        ),
                    ),
                    el("a", "Wallet.eth"),
                ),
                el(".img-container",
                    el("img", { src: "", alt: "" }),
                    el("p", "N"),
                    el("img.badge", { src: "/images/icn/add.svg", alt: "add" }),
                ),
                el("h1", "NAME"),
                el(".souler-name", "dilrong.eth"),
            ),
            el("article",
                el(".grid-container",
                    el(".item-container",
                        el(".img-container",
                            el("img", { src: "" }),
                            el("img.hide", { src: "/images/icn/hide.svg" }),
                        ),
                        el("p", "NAME"),
                    ),
                    el(".item-container",
                        el(".img-container",
                            el("img", { src: "" }),
                            el("img.hide", { src: "/images/icn/hide.svg" }),
                        ),
                        el("p", "NAME"),
                    ),
                    el(".item-container",
                        el(".img-container",
                            el("img", { src: "/images/icn/add-large.svg" }),
                        ),
                        el("p", "ADD"),
                    ),
                ),
                el(".button-container",
                    el("a.save-button", "Hide/Show"),
                    el("a.save-button", "Save"),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}