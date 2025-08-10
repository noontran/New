function checkKey() {
    const key = document.getElementById('keyInput').value;
    if (key === "DINHLONGVIP") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else {
        alert("Invalid Key!");
    }
}
function updateVal(input, id) {
    document.getElementById(id).innerText = input.value;
}
