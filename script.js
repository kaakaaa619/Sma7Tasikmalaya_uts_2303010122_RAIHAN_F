document.addEventListener("DOMContentLoaded", () => {

    
    const idHeader = "raihan_header";
    const idNavMenu = "raihan_nav_menu";
    const idNavToggle = "raihan_nav_toggle";
    const idGuestForm = "raihan_guestbook_form";
    
    const classScrolled = "raihan_scrolled";
    const classMobileActive = "raihan_mobile_active";
    const classFadeUp = "raihan_fade_up";
    const classVisible = "raihan_visible";
    

    const header = document.getElementById(idHeader);
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add(classScrolled);
            } else {
                header.classList.remove(classScrolled);
            }
        });
    }

    
    const navMenu = document.getElementById(idNavMenu);
    const navToggle = document.getElementById(idNavToggle);
    if (navMenu && navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle(classMobileActive);
            navToggle.classList.toggle(classMobileActive);
        });
    }

    
    const guestForm = document.getElementById(idGuestForm);
    if (guestForm) {
        guestForm.addEventListener("submit", (event) => {
            
            event.preventDefault(); 
            
            
            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const pesan = document.getElementById("pesan").value;

            if (nama === "" || email === "" || pesan === "") {
                alert("Harap isi semua kolom yang wajib diisi!");
            } else {
                
                alert(`Terima kasih, ${nama}! Pesan Anda telah terkirim.`);
                guestForm.reset(); 
            }
        });
    }
    const fadeUpElements = document.querySelectorAll("." + classFadeUp);
    
    if (fadeUpElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(classVisible);
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1 
        });

        fadeUpElements.forEach(el => {
            observer.observe(el);
        });
    }
    const lightbox = document.getElementById("raihan_lightbox");
    const lightboxImg = document.getElementById("raihan_lightbox_img");
    const lightboxClose = document.getElementById("raihan_lightbox_close");
    

    if (lightbox && lightboxImg && lightboxClose) {
        
        
        const galleryItems = document.querySelectorAll(".raihan_gallery_item");

        galleryItems.forEach(item => {
            item.addEventListener("click", () => {
                const mediaElement = item.querySelector("img, video");
                
                if (mediaElement) {
                    const mediaSrc = mediaElement.getAttribute("src");
                    
                    lightboxImg.setAttribute("src", mediaSrc);
                    
                    
                    lightbox.classList.add("raihan_active");
                }
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove("raihan_active");
            lightboxImg.setAttribute("src", ""); 
        };


        lightboxClose.addEventListener("click", closeLightbox);


        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});