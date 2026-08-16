/* =====================================================
   BRIGHTON LE — PORTFOLIO JAVASCRIPT
===================================================== */


/* =========================
   OPEN MODAL
========================= */

function openModal(modalId) {
   
    const modal =
        document.getElementById(modalId);
   
    if (!modal) {
        return;
    }
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE MODAL
========================= */

function closeModal(modalId) {

    const modal =
        document.getElementById(modalId);

    if (!modal) {
        return;
    }

    modal.classList.remove("active");
    document.body.style.overflow = "";
}


/* =========================
   CLICK OUTSIDE MODAL
========================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains("modal")
        ) {

            event.target.classList.remove("active");
            document.body.style.overflow = "";

        }
    }
);


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            const openModal =
                document.querySelector(
                    ".modal.active"
                );

            if (openModal) {
               
                openModal.classList.remove(
                    "active"
                );

                document.body.style.overflow = "";

            }
        }
    }
);
