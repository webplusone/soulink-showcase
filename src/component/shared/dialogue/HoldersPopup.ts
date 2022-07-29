import { DomNode, el, Popup } from "skydapp-browser";

export default class HoldersPopup extends Popup {

    public content: DomNode;

    constructor(
    ) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.holders-popup",
                el("h6", "Same Holders"),
                el("article",
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
            ),
        );
    }
}
