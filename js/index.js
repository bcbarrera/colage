const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');

images.forEach(image =>{
    image.addEventListener('clic', ()=>{
        containerImage.classList.toggle('move');
        console.log(image.getAttribute('src'))
    })
})