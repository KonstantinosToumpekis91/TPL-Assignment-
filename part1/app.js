const today = new Date();
const $copyright = document.querySelector("#copyright");
$copyright.textContent = `Copyright ${today.getFullYear()}`;
