import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
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
                el("h1", "Appearance"),
                el("section.profile-container",
                    el(".img-container"),
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
                el("section.custom-container"),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}