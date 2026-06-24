/*
 * These scripts are not part of the Drip library.
 * They exist only to wire up its demonstration.
 */

document.addEventListener("DOMContentLoaded", () => {
    const html = document.getElementsByTagName("html")[0];
    const switcher = document.getElementById("switcher");

    switcher.addEventListener("change", (event) => {
        const values = event.target.value.split(",");
        html.setAttribute("dir", values[1]);
        html.setAttribute("class", values[0]);
    });

    const values = switcher.value.split(",");
    html.setAttribute("dir", values[1]);
    html.setAttribute("class", values[0]);
});