function toggleAutoCloak() {
    var autoCloakCheckbox = document.getElementById("autoCloakCheckbox");
    var win = window.open();
    if (autoCloakCheckbox.checked) {
        localStorage.setItem('autoCloakEnabled', true); 
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
        localStorage.removeItem('autoCloakEnabled');
        win.close();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var autoCloakCheckbox = document.getElementById("autoCloakCheckbox");
    autoCloakCheckbox.addEventListener('change', toggleAutoCloak);

    if (localStorage.getItem('autoCloakEnabled') === 'true') {
        toggleAutoCloak();
    }
});
