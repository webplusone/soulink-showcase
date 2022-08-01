import { msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import AdminAnalytics from "./view/admin/Analytics";
import AdminAppearance from "./view/admin/Appearance";
import AdminLink from "./view/admin/Link";
import AdminSettings from "./view/admin/Settings";
import BaseLayout from "./view/BaseLayout";
import BusinessCard from "./view/BusinessCard";
import GraphTree from "./view/GraphTree";
import Intro from "./view/Intro";
import Landing from "./view/Landing";
import LinkTree from "./view/LinkTree";
import Mint from "./view/mint/Mint";
import MintFail from "./view/mint/MintFail";
import MintSuccess from "./view/mint/MintSuccess";
import NftTree from "./view/NftTree";
import UserLayout from "./view/UserLayout";

(async () => {

    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", UserLayout, ["intro", "mint", "mint/success", "mint/fail"]);
    // SkyRouter.route("", Landing);

    SkyRouter.route("dilrong", LinkTree);
    SkyRouter.route("dilrong/nft", NftTree);
    SkyRouter.route("dilrong/card", BusinessCard);
    SkyRouter.route("graph", GraphTree);

    SkyRouter.route("admin", AdminLink);
    SkyRouter.route("admin/appearance", AdminAppearance);
    SkyRouter.route("admin/settings", AdminSettings);
    SkyRouter.route("admin/analytics", AdminAnalytics);

    SkyRouter.route(["intro", "mint", "mint/success", "mint/fail"], BaseLayout);
    SkyRouter.route("intro", Intro);

    SkyRouter.route("mint", Mint);
    SkyRouter.route("mint/success", MintSuccess);
    SkyRouter.route("mint/fail", MintFail);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();
