// The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.
const btn = document.querySelector("#btn");
btn.addEventListener("click",smoothScrollToTop);

function smoothScrollToTop() {
    const scrollToTop = () => {
        const currentPosition = window.scrollY;
        if (currentPosition > 0) {
            window.scrollTo(0, currentPosition - currentPosition / 10);
            requestAnimationFrame(scrollToTop);
        }
    };
    requestAnimationFrame(scrollToTop);
};