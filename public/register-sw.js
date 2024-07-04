import { SetTransport } from "@mercuryworkshop/bare-mux";

window.wisp_api = location.origin + "/wisp/";

// will register /sw.js and setup bare mux
// reloads the page to activate the sw.js if it wasn't registered
export async function setupServiceWorker() {
  // add your network hostname here or whatever
  // this is any page that does NOT have http: but can register a serviceworker
  const isDev = ["localhost", "127.0.0.1"].includes(location.hostname);

  if (location.protocol !== "https:" && !isDev)
    throw new Error("HTTPS must be enabled to use Ultraviolet.");

  // this provides a HUGE performance improvement
  if (!window.crossOriginIsolated && !isDev)
    console.warn(
      "crossOriginIsolated must be enabled to increase performance."
    );

  if (!navigator.serviceWorker)
    throw new Error("Your browser doesn't support service workers.");

  const reg = await navigator.serviceWorker.getRegistration();
  if (reg) {
    await navigator.serviceWorker.ready;
    console.log("Service worker registered");
  } else {
    await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });
    console.log("Service worker registered");
    console.log("Reloading the page to activate it.");
    location.reload();
    return;
  }

  console.log("Using wisp at", window.wisp_api);
  SetTransport("EpxMod.EpoxyClient", {
    wisp: window.wisp_api,
  });
}