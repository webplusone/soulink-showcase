import { DomNode, el } from "skydapp-browser";

export default class NftItem extends DomNode {

    constructor(name: string) {
        super("a.nft-item");
        this.append(
            el(".img-container"),
            el("p", name),
        );
    }

    public delete() {
        super.delete();
    }
}
