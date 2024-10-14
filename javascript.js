function loadContent() {
    const contentDiv = document.getElementById('content');
    const link = document.createElement('link');
    link.rel = 'stylesheet';


    if (window.innerWidth <= 1149) {
        // Load mobile.html content
        fetch('mobile.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
                link.href = 'mobile.css';

            });
    } else {
        // Load desktop.html content
        fetch('desktop.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
                link.href = 'desktop.css';

            });
    }
    document.head.appendChild(link);
    // document.addEventListener('DOMContentLoaded', loadCSS);
    // window.removeEventListener('resize', loadContent);
}


// window.addEventListener('resize', loadContent);


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

function showContainer(containerId) {
    var borderId = containerId + "-b"
    // Hide all containers
    document.getElementById('c0').style.display = 'none';
    document.getElementById('c1').style.display = 'none';
    document.getElementById('c2').style.display = 'none';
    document.getElementById('c3').style.display = 'none';
    
    // Hide all borders
    document.getElementById('c0-b').style.display = 'none';
    document.getElementById('c1-b').style.display = 'none';
    document.getElementById('c2-b').style.display = 'none';
    document.getElementById('c3-b').style.display = 'none';

    // Show the selected container
    document.getElementById(containerId).style.display = 'block';
    // Show the selected border
    document.getElementById(borderId).style.display = 'block';
}  


loadContent();