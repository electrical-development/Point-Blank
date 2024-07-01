 function clickoff() {
    const clickofff = localStorage.getItem('clickoff')

    if (clickofff === 'on'){
        localStorage.setItem('clickoff', 'off')
        console.log(`Clickoff Enabled!`)
    }else {
        localStorage.setItem('clickoff', 'on')
        console.log(`Clickoff Disabled!`)
    }
 }