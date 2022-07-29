import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import LinkItem from "../component/LinkItem";
import NftItem from "../component/NftItem";
import HoldersPopup from "../component/shared/dialogue/HoldersPopup";
import UserLayout from "./UserLayout";

export default class NftTree implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "@NAME - NFT";
        UserLayout.current.content.append(this.container = el(".nft-tree-view",
            el("header",
                new HoldersPopup(),
                el(".top-container",
                    el("a", { href: "/" }, "About, Soulink"),
                    el(".stepper-wrapper",
                        el(".line"),
                        el("a.stepper-item",
                            el(".stepper-counter", ""),
                            el("p.stepper-title", ""),
                        ),
                        el("a.stepper-item",
                            el(".stepper-counter", ""),
                            el("p.stepper-title.active", "NFTs"),
                        ),
                        el("a.stepper-item",
                            el(".stepper-counter", ""),
                            el("p.stepper-title", ""),
                        ),
                    ),
                    el("a", "Wallet.eth"),
                ),
                el(".img-container",
                    el("img", { src: "", alt: "" }),
                    el("p", "N"),
                ),
                el("h1", "NAME"),
            ),
            el("article",
                new NftItem("name"),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}