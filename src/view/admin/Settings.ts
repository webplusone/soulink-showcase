import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import UserLayout from "../UserLayout";
import ViewUtil from "../ViewUtil";

export default class AdminSettings implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "Settings";
        UserLayout.current.content.append(this.container = el(".admin-settings-view",
            el("header",
                el(".tab-container",
                    el("a", "Links", { click: () => { ViewUtil.go("/admin") } }),
                    el("a", "Appearance", { click: () => { ViewUtil.go("/admin/appearance") } }),
                    el("a.active", "Settings", { click: () => { ViewUtil.go("/admin/settings") } }),
                    el("a", "Analytics", { click: () => { ViewUtil.go("/admin/analytics") } }),
                ),
            ),
            el("article",
                el("h1", "Settings"),
                el("h2", "Support Banner"),
                el("section",
                    el("header",
                        el("h3", "Show your support"),
                        el("a.on", "On"),
                    ),
                    el("p", "Show your support for important causes with a profile banner. Only one banner can be active at a time.")
                ),
                el("h2", "Graph"),
                el("section",
                    el("header",
                        el("h3", "Show your graph"),
                        el("a.on", "On"),
                    ),
                    el("p", "Show your support for important causes with a profile graph. ")
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}