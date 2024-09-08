function enlargeImage() {
    const img = document.getElementById('disp-img');
    if (img.width === 640) {
        img.width = 1280;
        img.height = 1024;
    } else {
        img.width = 640;
        img.height = 480;
    }
}