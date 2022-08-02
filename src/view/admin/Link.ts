import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import LinkItem from "../../component/LinkItem";
import UserLayout from "../UserLayout";
import ViewUtil from "../ViewUtil";

export default class AdminLink implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "Admin";
        UserLayout.current.content.append(this.container = el(".admin-link-view",
            el("header",
                el(".top-container",
                    el("a", { href: "/" }, "About,Soulink"),
                    el(".stepper-wrapper",
                        el(".line"),
                        el("a.stepper-item", { click: () => { ViewUtil.go("/admin") } },
                            el(".stepper-counter.active", ""),
                            el("p.stepper-title", "Links"),
                        ),
                        el("a.stepper-item", { click: () => { ViewUtil.go("/admin/nfts") } },
                            el(".stepper-counter", ""),
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
                el(".item-container",
                    el(".link", "OPENSEA"),
                    el("input", { placeholder: "links" }),
                    el("a.delete",
                        el("img", { src: "/images/icn/delete.svg", alt: "delete" }),
                    ),
                ),
                el("a.add-button",
                    el("img", { src: "/images/icn/add.svg", alt: "add" }),
                ),
                el("a.save-button", "Save"),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}