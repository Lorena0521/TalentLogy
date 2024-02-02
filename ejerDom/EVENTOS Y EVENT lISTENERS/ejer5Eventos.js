document.querySelectorAll('a[href^="#"]').forEach(item =>{ 
    item.addEventListener('click', function(e){
        e.peventDefault()
    })
})
document.querySelector(this.getAtribute('href')).scrollIntoView(
{behavior: 'smooth' });