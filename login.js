// Create login Function here.

function Login() {

    player_name = document.getElementById("playername").ariaValueMax;
    localStorage.setItem("playername", player_name);

    window.location = gamepage.html
}