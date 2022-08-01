import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import UserLayout from "./UserLayout";
import ViewUtil from "./ViewUtil";

export default class BusinessCard implements View {

    private container: DomNode;

    constructor() {
        UserLayout.current.title = "dilrong";
        UserLayout.current.content.append(
            (this.container = el(".business-card-view",
                el("header",
                    el(".top-container",
                        el("a", { href: "/" }, "About,Soulink"),
                        el(".stepper-wrapper",
                        ),
                        el("a", "Wallet.eth"),
                    ),
                ),
                el("main",
                    el(".img-container",
                        el("img", { src: "", alt: "" }),
                        el("p", "N"),
                    ),
                    el("h1", "NAME"),
                    el("p", "I am an artist, and souled I love NFTs\nGood to meet you"),
                    el(".qr-container",
                        el("img", { src: "/images/img/qr-mock.png", alt: "qr-code" }),
                    ),
                    el("a.add-souler", "ADD Souler"),
                ),
            )),
        )
    }

    public set title(title: string) {
        document.title = `${title} | Soulink`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}