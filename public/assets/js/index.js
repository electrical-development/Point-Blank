const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");


const Point = [
    "point://dino",
]

async function registerSW() {
    let wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";
    await BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: wispUrl });
    try {
        await navigator.serviceWorker.register("/uv/sw.js",  { scope: __uv$config.prefix }); 
        console.log("Service worker registered.");
    } catch (err) {
        console.error("Failed to register service worker.");
        throw err;
    }   
}

function search(input, template) {
    try {
        return new URL(input).toString();
    } catch (err) {
    }

    try {
        const url = new URL(`http://${input}`);
        if (url.hostname.includes(".")) return url.toString();
    } catch (err) {
    }

    return template.replace("%s", encodeURIComponent(input));
}

function containsPointKeyword(input, PointList) {
    for (let i = 0; i < PointList.length; i++) {
        if (input.includes(PointList[i])) {
            return true;
        }
    }
    return false;
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        await registerSW();
    } catch (err) {
        error.textContent = "Failed to register service worker.";
        errorCode.textContent = err.toString();
        throw err;
    }
    if (containsPointKeyword(address.value, Point)) {
        location.replace('/uv/pbSW/hvtrs8%2F-odfnile%2Fdknm-eaoe%2Cfkrgbcsgarp%2Ccmm')
    }
    else {
        const url = search(address.value, "https://www.google.com/search?q=%s");

        location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    }
});