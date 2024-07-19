const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        // body.style.color = 'black';
        var text = document.getElementsByClassName('text')
        text.color = "black";
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        var text = document.getElementsByClassName('text')
        text.color = "black"
        body.style.transition = '2s';
    }
});