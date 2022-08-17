function setTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    let nowTime = document.querySelector("#time");
    nowTime.innerHTML = `${h}:${m}`;

    function checkTime(i) {
        if (i < 10) i = "0" + i;
        return i;
    }
}
function setDate() {
    let today = new Date();
    let nowDate = document.querySelector("#date");
    nowDate.innerHTML = today.toLocaleDateString("en-US", options);
}

let options = {
    weekday: "long",
    month: "short",
    day: "numeric"
}

let t = setInterval(setTime, 500);
let d = setInterval(setDate, 500);