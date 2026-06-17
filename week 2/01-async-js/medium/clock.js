function displayClock() {
    const now = new Date();

    const h24 = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    let h12 = now.getHours();
    const ampm = h12 >= 12 ? "PM" : "AM";

    h12 = h12 % 12;
    h12 = h12 === 0 ? 12 : h12;
    h12 = String(h12).padStart(2, "0");

    console.clear();
    console.log(`24-hour: ${h24}:${m}:${s}`);
    console.log(`12-hour: ${h12}:${m}:${s} ${ampm}`);
}

setInterval(displayClock, 1000);
displayClock();