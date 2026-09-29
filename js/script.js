document.addEventListener("DOMContentLoaded", () => {


const header = document.querySelector(".header");
const faqItems = document.querySelectorAll(".faq-item");
const animatedElements = document.querySelectorAll(
    ".section-heading, .identification-card, .step, .pillar, .benefit, .audience-box, .receive-placeholder, .story-text, .story-image, .testimonial-placeholder-card, .offer-card"
);

const currentYear = document.querySelector(".footer p");

const handleHeaderScroll = () => {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }

};

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

faqItems.forEach((item) => {

    item.addEventListener("toggle", () => {

        if (!item.open) {
            return;
        }

        faqItems.forEach((otherItem) => {

            if (otherItem !== item) {
                otherItem.removeAttribute("open");
            }

        });

    });

});

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");

                observerInstance.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach((element) => {

        element.classList.add("animate-on-scroll");

        observer.observe(element);

    });

} else {

    animatedElements.forEach((element) => {
        element.classList.add("is-visible");
    });

}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.add("button-clicked");

        setTimeout(() => {
            button.classList.remove("button-clicked");
        }, 250);

    });

});

if (currentYear) {

    currentYear.textContent =
        `Projeto Vida Nossa © ${new Date().getFullYear()}`;

}

faqItems.forEach((item) => {

    const summary = item.querySelector("summary");

    if (!summary) {
        return;
    }

    summary.setAttribute("tabindex", "0");

});

console.log("Projeto Vida Nossa carregado com sucesso.");


});
