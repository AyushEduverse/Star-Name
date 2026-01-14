function goToWelcome() {
    const input = document.getElementById("username");
    const name = input.value.trim();

    if (!name) {
        input.focus();
        return;
    }

    document.getElementById("welcome-text").innerText =
        `Welcome to Starverse, ${name}`;

    document.getElementById("page-input").classList.remove("active");
    document.getElementById("page-welcome").classList.add("active");
}
