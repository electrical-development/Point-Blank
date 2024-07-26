addEventListener("DOMContentLoaded", (event) => {
    const searchengine = localStorage.getItem('sengine')
    const clickoff = localStorage.getItem('clickoff')
    const uvadress = document.getElementById('uv-search-engine')
    // On domcontent loaded Load Our Search Engine!
    if (searchengine === 'google') {
        uvadress.value = 'https://google.com/search?q=/'
        console.log('Search Engine Loaded!')
    }
    if (searchengine === 'bing') {
        uvadress.value = 'https://bing.com/search?q='
        console.log('Search Engine Loaded!')
    }
    if (searchengine === 'ddg') {
        uvadress.value = 'https://duckduckgo.com/?t=h_&q='
        console.log('Search Engine Loaded!')
    }
    if (searchengine === 'brave') {
        uvadress.value = 'https://search.brave.com/search?q='
        console.log('Search Engine Loaded!')
    }
    //If No Search Engine Is Selected
    if (searchengine === null) {
        //use the default search engine google
        uvadress.value = 'https://google.com/search?q=/'
        console.log('Search Engine Loaded!')
    }

    //On domcontent loaded get our clickoff settings
    //check if clickoff cloaking is enabled
    if (clickoff === 'on') {
        console.log(`Click Off Cloaking Enabled`)
        //add an event listener for the visibility state
        document.addEventListener("visibilitychange", (event) => {

            if (document.visibilityState == "visible") {
                //if the tab is active currently
                console.log("Tab is active")
                document.title = "Point Blank";
                favicon.setAttribute("href", "/assets/img/favicon.png");
                console.log("Disabling")
            } else {
                //if the tab becomes unactive
                console.log("tab is inactive")
                //set it to google docs
                document.title = "Google Docs";
                favicon.setAttribute("href", "/assets/img/docs.png");
                console.log("Enabling!")
            }
        });
    }
    else {
        //if clickoff cloking is not enabled
        console.log(`Clickoff Cloaking Disabled! Defaulting..`)
    }
});
