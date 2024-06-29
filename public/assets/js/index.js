const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");

const blocked = [
    //Set the Blocked Keywords
  "porn",
  "sex",
  "xxx",
  "hentai",
  "pornhub.com",
  "xxx.com",
  "4chan.org",
  "test"
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

function containsBlockedKeyword(input, blockedList) {
    for (let i = 0; i < blockedList.length; i++) {
        if (input.includes(blockedList[i])) {
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
    if (containsBlockedKeyword(address.value, blocked)) {
        // Redirect to blockpage
        location.replace('/blocked.html')
    }
    else {
        const url = search(address.value, "https://www.google.com/search?q=%s");

        location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    }
});