import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import LinkItem from "../component/LinkItem";
import UserLayout from "./UserLayout";

export default class LinkTree implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "@dilrong";
        UserLayout.current.content.append(this.container = el(".link-tree-view",
            el("header",
                el(".img-container",
                    el("img", { src: "", alt: "" }),
                    el("p", "D"),
                ),
                el("h1", "@dilrong"),
            ),
            el("article",
                new LinkItem("dilrong", "https://blog.naver.com/dilrong", "https://d1fdloi71mui9q.cloudfront.net/BqAUnvzJSJaHXymbLCNB_20180607225726_2.jpeg"),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}