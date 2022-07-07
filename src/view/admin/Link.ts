import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import LinkItem from "../../compoent/LinkItem";
import UserLayout from "../UserLayout";
import ViewUtil from "../ViewUtil";

export default class AdminLink implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "Admin";
        UserLayout.current.content.append(this.container = el(".admin-link-view",
            el("header",
                el(".tab-container",
                    el("a.active", "Links", { click: () => { ViewUtil.go("/admin") } }),
                    el("a", "Appearance", { click: () => { ViewUtil.go("/admin/appearance") } }),
                    el("a", "Settings", { click: () => { ViewUtil.go("/admin/settings") } }),
                    el("a", "Analytics", { click: () => { ViewUtil.go("/admin/analytics") } }),
                ),
            ),
            el("article",
                el(".setting-container",
                    el("h1", "Links"),
                    el(".button-container",
                        el("a", "Add New Link"),
                    ),
                    el(".new-link-item",
                        el("header",
                            el("input", { placeholder: "Title" }),
                            el("a",
                                el("img", { src: "./images/icn/delete.svg", alt: "delete" }),
                            ),
                        ),
                        el("input", { placeholder: "Url" }),
                    ),
                ),
                el(".preview-container",
                    el("header",
                        el(".link-container",
                            el("h2", "My Soulink"),
                            el("a", { href: "https://soul.ink/dilrong" }, "https://soul.ink/dilrong"),
                        ),
                        el("a", "Share"),
                    ),
                    el("article",
                        el(".preview-container",
                            el(".content",
                                el("header",
                                    el(".img-container",
                                        el("img", { src: "", alt: "" }),
                                        el("p", "D"),
                                    ),
                                    el("h1", "@dilrong"),
                                ),
                                el("article",
                                    new LinkItem("dilrong", "https://blog.naver.com/dilrong", "/images/img/mock.png"),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}