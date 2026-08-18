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

/* =====================================================
   PHOTO GALLERY / LIGHTBOX
===================================================== */

const galleryModal =
    document.getElementById("galleryModal");

const galleryImage =
    document.getElementById("galleryImage");

const galleryTitle =
    document.getElementById("galleryTitle");

const galleryDescription =
    document.getElementById("galleryDescription");

const galleryCounter =
    document.getElementById("galleryCounter");

const galleryClose =
    document.getElementById("galleryClose");

const galleryPrev =
    document.getElementById("galleryPrev");

const galleryNext =
    document.getElementById("galleryNext");

const galleryImages =
    document.querySelectorAll(".gallery-image");


let currentGallery = [];

let currentIndex = 0;



/* Open gallery */

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        const galleryName =
            image.dataset.gallery;

        currentGallery =
            Array.from(galleryImages)
                .filter(
                    item =>
                        item.dataset.gallery ===
                        galleryName
                );

        currentIndex =
            currentGallery.indexOf(image);

        updateGallery();

        galleryModal.classList.add("active");

        galleryModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    });

});



/* Update gallery */

function updateGallery() {

    const image =
        currentGallery[currentIndex];


    galleryImage.src =
        image.src;


    galleryImage.alt =
        image.alt;


    galleryTitle.textContent =
        image.dataset.title || "";


    galleryDescription.textContent =
        image.dataset.description || "";


    galleryCounter.textContent =
        `${currentIndex + 1} / ${currentGallery.length}`;

}



/* Next */

function nextImage() {

    if (currentGallery.length === 0)
        return;


    currentIndex++;

    if (
        currentIndex >=
        currentGallery.length
    ) {

        currentIndex = 0;

    }
    updateGallery();

}



/* Previous */

function previousImage() {

    if (currentGallery.length === 0)
        return;

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            currentGallery.length - 1;

    }
    updateGallery();

}



/* Buttons */

galleryNext.addEventListener(
    "click",
    nextImage
);

galleryPrev.addEventListener(
    "click",
    previousImage
);



/* Close */

function closeGallery() {

    galleryModal.classList.remove(
        "active"
    );

    galleryModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


galleryClose.addEventListener(
    "click",
    closeGallery
);



/* Click outside image to close */

galleryModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            galleryModal
        ) {

            closeGallery();
        }
    }
);



/* Keyboard controls */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !galleryModal.classList.contains(
                "active"
            )
        ) {

            return;

        }

        if (event.key === "ArrowRight") {
            nextImage();
        }


        if (event.key === "ArrowLeft") {
            previousImage();
        }


        if (event.key === "Escape") {
            closeGallery();

        }
    }
);
