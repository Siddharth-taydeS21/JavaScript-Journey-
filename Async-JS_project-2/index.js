let insert = document.querySelector(".insert");

window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
    <div id="insert">
        <p>Press any key on keyboard and see the magic!</p>
     <table>
        <tr>
            <td>Key</td>
            <td>Keycode</td>
            <td>Code</td>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>
    `;
})