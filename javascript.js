function loadContent() {
    const contentDiv = document.getElementById('content');

    if (window.innerWidth <= 1149) {
        // Load mobile.html content
        fetch('mobile.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
                // Load mobile-specific JavaScript
                const script = document.createElement('script');
                script.src = 'mobile.js';
                document.body.appendChild(script);
            });
    } else {
        // Load desktop.html content
        fetch('desktop.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
                // Load desktop-specific JavaScript
                const script = document.createElement('script');
                script.src = 'desktop.js';
                document.body.appendChild(script);
            });
    }
}

loadContent();
window.addEventListener('resize', loadContent);


function copyToClipboard() {
    const textToCopy = "wumilovsergey@gmail.com";

    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('почтовый адрес wumilovsergey@gmail.com скопирован!');
}
