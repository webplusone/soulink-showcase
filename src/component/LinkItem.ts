import { DomNode, el } from "skydapp-browser";

export default class LinkItem extends DomNode {

    private imgDisplay: DomNode;

    constructor(title: string, link: string, thumbnail?: string) {
        super(".link-item");
        this.append(
            el("a", { href: link, target: "_blank" },
                this.imgDisplay = el("img", { src: thumbnail, alt: title }),
                el("p", title),
            ),
        );

        this.init(thumbnail!);
    }

    public init(thumbnail: string) {
        this.imgDisplay.empty();
    }

    public delete() {
        super.delete();
    }
}
