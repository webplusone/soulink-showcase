import { DomNode, el } from "skydapp-browser";

export default class LinkItem extends DomNode {

    constructor(title: string, link: string) {
        super(".link-item");
        this.append(
            el("a", { href: link, target: "_blank" },
                el("p", title),
            ),
        );
    }

    public delete() {
        super.delete();
    }
}
