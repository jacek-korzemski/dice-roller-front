import updateLastRolls from "api/updateLastRolls";
import { status, uiActive } from "stores/status";
import { host } from "stores/host";

let selectedHost;

host.subscribe((value) => {
    selectedHost = value;
})

const sendRoll = (user, dices) => {
    uiActive.set(false);
    status.set("Rzucam...");
    fetch(selectedHost + "/api/new-roll", {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user, dices: dices }),
    })
        .then(() => {
            status.set("Rzucono!");
            updateLastRolls();
            setTimeout(() => {
                status.set("Gotowy do rzutu");
                uiActive.set(true);
            });
        })
        .catch(() => {
            status.set("Wystąpił błąd podczas rzucania 🔥");
        });
};

export default sendRoll;