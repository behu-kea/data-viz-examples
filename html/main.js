const body = document.querySelector('body');
console.log(1)
for (let i = 0; i < 10000; i++) {
    const imageElement = document.createElement('img');
    imageElement.src = 'https://benna100.github.io/53-milliarder/images/spandauer.png';
    imageElement.width = '30';
    body.appendChild(imageElement);
}