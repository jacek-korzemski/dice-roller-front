import { status } from "stores/status";
import { rolls } from "stores/rolls";
import { host } from "stores/host";

let selectedHost;

host.subscribe((value) => {
    selectedHost = value;
})

const updateLastRolls = () => {
    fetch(selectedHost + "/api/last-rolls", {
        method: "GET",
        cache: "no-cache",
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((res) => {
            rolls.update(() => res);
        })
        .catch(() => {
            status.set("Wystąpił błąd podczas wczytywania rzutów 🔥");
        });
};

export default updateLastRolls;