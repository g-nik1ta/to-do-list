class SetTime {
    constructor(value) {
        this.options = value;
    }

    currentTimeDate() {
        this.today = new Date();

        this.h = this.today.getHours();
        this.m = this.today.getMinutes();
        this.s = this.today.getSeconds();

        this.h = this.checkTime(this.h);
        this.m = this.checkTime(this.m);
        this.s = this.checkTime(this.s);
    }

    checkTime(i) {
        if (i < 10) i = "0" + i;
        return i;
    }

    writeIn() {
        document.querySelector("#date").innerHTML = this.today.toLocaleDateString("en-US", this.options);
        document.querySelector("#time").innerHTML = `${this.h}:${this.m}`;
    }
}

let options = {
    weekday: "long",
    month: "short",
    day: "numeric"
}

let time = new SetTime(options);
setInterval(() => {
    time.currentTimeDate();
    time.writeIn();
}, 1000);