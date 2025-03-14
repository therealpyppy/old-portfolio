window.onload = function () {
    const backgrounds = ['Assets/bg.jpg', 'Assets/bg3.jpg', 'Assets/bg4.jpg'];
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    document.querySelector('.background').style.backgroundImage = `url('${randomBg}')`;
    document.querySelector('.background').style.opacity = "0.8";
};
