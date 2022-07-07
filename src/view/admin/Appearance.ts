import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import LinkItem from "../../compoent/LinkItem";
import UserLayout from "../UserLayout";
import ViewUtil from "../ViewUtil";

export default class AdminAppearance implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "Appearance";
        UserLayout.current.content.append(this.container = el(".admin-appearance-view",
            el("header",
                el(".tab-container",
                    el("a", "Links", { click: () => { ViewUtil.go("/admin") } }),
                    el("a.active", "Appearance", { click: () => { ViewUtil.go("/admin/appearance") } }),
                    el("a", "Settings", { click: () => { ViewUtil.go("/admin/settings") } }),
                    el("a", "Analytics", { click: () => { ViewUtil.go("/admin/analytics") } }),
                ),
            ),
            el("article",
                el(".setting-container",
                    el("h1", "Appearance"),
                    el("section.profile-container",
                        el(".img-container",
                            el("img", { src: "/images/img/mock.png", alt: "Profile" }),
                            el("a", "Pick an image"),
                            el("a.remove", "Remove"),
                        ),
                        el(".input-container",
                            el("p", "Profile Title"),
                            el("input", { placeholder: "Write Title" }),
                        ),
                        el(".input-container",
                            el("p", "Bio"),
                            el("textarea", { placeholder: "Write Bio" }),
                        ),
                    ),
                    el("h2", "Custom Appearance"),
                    el("p", "Completely customize your Linktree profile. Change your background with colours, gradients and images. Choose a button style, change the typeface and more."),
                    el("h3", "Background"),
                    el("section.background-container",
                        el(".grid",
                            el(".item",
                                el(".content"),
                                el("p", "Flat Colour"),
                            ),
                            el(".item",
                                el(".content"),
                                el("p", "Gradient"),
                            ),
                            el(".item",
                                el(".content"),
                                el("p", "Image"),
                            ),
                        ),
                        el("p", "Background color"),
                        el(".input-container",
                            el(".color"),
                            el("input", { value: "#888888" }),
                        ),
                    ),
                    el("h3", "Buttons"),
                    el("section.button-container",
                        el("p", "Fill"),
                        el(".grid",
                            el(".item",
                                el(".fill-base"),
                            ),
                            el(".item",
                                el("..fill-round"),
                            ),
                            el(".item",
                                el("..fill-round-large"),
                            ),
                        ),
                        el("p", "Outline"),
                        el(".grid",
                            el(".item",
                                el(".outline-base"),
                            ),
                            el(".item",
                                el(".outline-round"),
                            ),
                            el(".item",
                                el(".outline-round-large"),
                            ),
                        ),
                        el("p", "Button color"),
                        el(".input-container",
                            el(".color"),
                            el("input", { value: "#888888" }),
                        ),
                        el("p", "Button Font color"),
                        el(".input-container",
                            el(".color"),
                            el("input", { value: "#888888" }),
                        ),
                    ),
                ),
                el(".preview-container",
                    el("header",
                        el(".link-container",
                            el("h2", "My Soulink"),
                            el("a", { href: "https://so.link/dilrong" }, "https://so.link/dilrong"),
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