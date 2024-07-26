const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");

const Point = [
    "point://dino",
]

function search(input, template) {
    try {
        return new URL(input).toString();
    } catch (err) {
    }

    try {
        const url = new URL(`https://${input}`);
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

    if (window.chemicalLoaded) {
        if (containsPointKeyword(address.value, Point)) {
            location.replace('/uv/pbSW/hvtrs8%2F-odfnile%2Fdknm-eaoe%2Cfkrgbcsgarp%2Ccmm')
        }
        else {
            const url = search(address.value, "https://www.google.com/search?q=%s");

            location.href = await window.chemicalEncode(url);
        }
    }
});