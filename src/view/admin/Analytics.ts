import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import { Chart, registerables } from "chart.js";
import UserLayout from "../UserLayout";
import ViewUtil from "../ViewUtil";

export default class AdminAnalytics implements View {

    private container: DomNode;
    private chartDisplay: DomNode<HTMLCanvasElement>;

    constructor() {
        UserLayout.current.title = "Analytics";
        UserLayout.current.content.append(this.container = el(".admin-analytics-view",
            el("header",
                el(".tab-container",
                    el("a", "Links", { click: () => { ViewUtil.go("/admin") } }),
                    el("a", "Appearance", { click: () => { ViewUtil.go("/admin/appearance") } }),
                    el("a", "Settings", { click: () => { ViewUtil.go("/admin/settings") } }),
                    el("a.active", "Analytics", { click: () => { ViewUtil.go("/admin/analytics") } }),
                ),
            ),
            el("article",
                el("h1", "Analytics"),
                el(".date-container",
                    el("input", { type: "date" }),
                ),
                el("h2", "Activity"),
                el("section.activity-container",
                    el(".text-container",
                        el("span", "Views"),
                        el("p", "21"),
                    ),
                    el(".text-container",
                        el("span", "Clicks"),
                        el("p", "1"),
                    ),
                    el(".text-container",
                        el("span", "CTR"),
                        el("p", "4.76%"),
                    ),
                ),
                el("section.chart-container",
                    this.chartDisplay = el("canvas"),
                ),
            ),
        ));
        this.init();
    }

    public init(): void {
        this.loadChart()
    }

    public loadChart(): void {
        const chartData: any = {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [],
            }],
        };

        chartData.labels.push("Views");
        chartData.datasets[0].data.push(21);
        chartData.datasets[0].backgroundColor.push("#FF0000");

        chartData.labels.push("Clicks");
        chartData.datasets[0].data.push(1);
        chartData.datasets[0].backgroundColor.push("#00FF00");

        chartData.labels.push("CTR");
        chartData.datasets[0].data.push(4.75);
        chartData.datasets[0].backgroundColor.push("#0000FF");

        Chart.register(...registerables);

        new Chart(this.chartDisplay.domElement.getContext("2d"), {
            type: "line",
            data: chartData,
            option: {
                responsive: true,
                color: "#ffffff",
            },
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}