document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       NAVEGACIÓN ACTIVA
    ========================== */

    const navLinks =
        document.querySelectorAll(".navbar nav a");

    const sections =
        document.querySelectorAll("section");


    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =========================
       NAVBAR AL HACER SCROLL
    ========================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(7, 7, 13, 0.90)";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0, 0, 0, 0.25)";

        } else {

            navbar.style.background =
                "rgba(7, 7, 13, 0.65)";

            navbar.style.boxShadow =
                "none";

        }

    });


    /* =========================
       ANIMACIONES AL APARECER
    ========================== */

    const animatedElements =
        document.querySelectorAll(
            ".section, .project-card, .info-card, .skill"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });


    /* =========================
       EFECTO DE ESCRITURA
    ========================== */

    const typingElement =
        document.querySelector(".hero h2");


    if (typingElement) {

        const texts = [

            "Estudiante · Creadora · Exploradora digital",

            "Aprendiendo · Creando · Experimentando",

            "Tecnología · Programación · Creatividad"

        ];


        let textIndex = 0;

        let characterIndex = 0;

        let deleting = false;


        function typeEffect() {

            const currentText =
                texts[textIndex];


            if (!deleting) {

                typingElement.textContent =
                    currentText.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;


                if (
                    characterIndex ===
                    currentText.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1800
                    );

                    return;
                }

            } else {

                typingElement.textContent =
                    currentText.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;


                if (characterIndex === 0) {

                    deleting = false;

                    textIndex++;

                    if (
                        textIndex >=
                        texts.length
                    ) {

                        textIndex = 0;

                    }

                }

            }


            const speed =
                deleting ? 35 : 70;


            setTimeout(
                typeEffect,
                speed
            );

        }


        typeEffect();

    }


    /* =========================
       PARALLAX DEL PERFIL
    ========================== */

    const profile =
        document.querySelector(".profile");


    document.addEventListener(
        "mousemove",
        (event) => {

            if (!profile) return;


            const x =
                (window.innerWidth / 2 -
                    event.clientX) / 35;


            const y =
                (window.innerHeight / 2 -
                    event.clientY) / 35;


            profile.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );


    /* =========================
       EFECTO 3D DE PROYECTOS
    ========================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -3;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 3;


                card.style.transform =
                    `perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-7px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";

            }
        );

    });


    /* =========================
       LOGO → VOLVER ARRIBA
    ========================== */

    const logo =
        document.querySelector(".logo");


    if (logo) {

        logo.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }

});
