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

