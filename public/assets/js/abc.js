function toggleAutoCloak() {
    var autoCloakCheckbox = document.getElementById("autoCloakCheckbox");
    var win = window.open();
    if (autoCloakCheckbox.checked) {
        localStorage.setItem('autoCloakChecked', true); 
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        var iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.margin = '0';
        iframe.src = 'index.html';
        win.document.body.appendChild(iframe);
    } else {
        localStorage.removeItem('autoCloakChecked');
        win.close();
    }
}

if (localStorage.getItem('autoCloakEnabled') === 'true') {
    console.log('Auto cloaking is enabled');
} else {
    console.log('Auto cloaking is disabled');
}

window.onload = function() {
    var autoCloakCheckbox = document.getElementById("autoCloakCheckbox");
    var savedState = localStorage.getItem('autoCloakChecked');
    if (savedState === 'true') {
        autoCloakCheckbox.checked = true;
    }
};
