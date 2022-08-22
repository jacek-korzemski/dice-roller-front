import updateLastRolls from "api/updateLastRolls";
import { status, uiActive } from "stores/status";
import { host } from "stores/host";
import { user } from "stores/user";
import { advantage } from "stores/advantage";

let selectedHost;
let currentPlayer;
let hasAdvantage;

host.subscribe((value) => {
    selectedHost = value;
})

user.subscribe((value) => {
    currentPlayer = value;
})

advantage.subscribe((value) => {
    hasAdvantage = value;
})

const sendRoll = (dices) => {
    uiActive.set(false);
    status.set("Rzucam...");
    fetch(selectedHost + "/api/new-roll", {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: currentPlayer, dices: dices, advantage: hasAdvantage }),
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