function adjustScroll() {
    var container = document.getElementById("chat-area");
    container.scrollTop = container.scrollHeight;
}
window.onload = adjustScroll;