import { msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import AdminAnalytics from "./view/admin/Analytics";
import AdminAppearance from "./view/admin/Appearance";
import AdminLink from "./view/admin/Link";
import AdminSettings from "./view/admin/Settings";
import GraphTree from "./view/GraphTree";
import Landing from "./view/Landing";
import LinkTree from "./view/LinkTree";
import NftTree from "./view/NftTree";
import UserLayout from "./view/UserLayout";

(async () => {

    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", UserLayout);
    SkyRouter.route("", Landing);
    SkyRouter.route("dilrong", LinkTree);
    SkyRouter.route("dilrong/nft", NftTree);
    SkyRouter.route("graph", GraphTree);
    SkyRouter.route("admin", AdminLink);
    SkyRouter.route("admin/appearance", AdminAppearance);
    SkyRouter.route("admin/settings", AdminSettings);
    SkyRouter.route("admin/analytics", AdminAnalytics);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();
