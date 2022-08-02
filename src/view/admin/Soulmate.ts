import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import LinkItem from "../../component/LinkItem";
import UserLayout from "../UserLayout";
import ViewUtil from "../ViewUtil";

export default class AdminSoulmate implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "Admin";
        UserLayout.current.content.append(this.container = el(".admin-soulmate-view",
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
                            el(".stepper-counter", ""),
                            el("p.stepper-title", "NFTs"),
                        ),
                        el("a.stepper-item",
                            el(".stepper-counter.active", ""),
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
                el(".tab-container",
                    el("a.active", "Who added me?"),
                    el("a", "I've added whom?"),
                    el("a", "We are soulinked!"),
                ),
                el("hr"),
                el(".content",
                    el(".holder-item .grey",
                        el(".img-container",
                            el("img", { src: "", alt: "" }),
                        ),
                        el("p", "HIM"),
                    ),
                    el(".holder-item .beige",
                        el(".img-container",
                            el("img", { src: "", alt: "" }),
                        ),
                        el("p", "HIM"),
                    ),
                    el(".holder-item .purple",
                        el(".img-container",
                            el("img", { src: "", alt: "" }),
                        ),
                        el("p", "HIM"),
                    ),
                ),
                el("a", "Link Soul :)"),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}