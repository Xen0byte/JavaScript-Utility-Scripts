// https://www.app.queryhub.tk/qh/qh-app/
// author: Xen0byte, The Opcodemancer

if (document.title == "Query Hub | Job Log") {
    var dqm = document.querySelector("div.baskets-grid-actions-wrapper button.active[title='DQM']");

    if (dqm.style["border-bottom-color"] != "transparent") {
        var errors = document.querySelectorAll("div.ag-cell[col-id='ERRMESSAGE']");
        var message = "";

        errors.forEach(error => {
            message += error.querySelector("span.cell-link").textContent + "\n"
        });

        alert(message);
    }
}
