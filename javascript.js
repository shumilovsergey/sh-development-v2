function loadContent() {
    const contentDiv = document.getElementById('content');

    // Check screen width to determine which HTML snippet to load
    if (window.innerWidth <= 1149) {
        // Load mobile.html content
        fetch('mobile.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            });
    } else {
        // Load desktop.html content
        fetch('desktop.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
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