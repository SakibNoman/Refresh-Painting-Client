export const scrollTo = (top, left) => {
    window.scrollTo({
        top: top,
        left: left,
        behavior: 'smooth'
    });
}