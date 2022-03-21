window.onload = ()=> {
    let loading = document.getElementById('lottie-player-wrapper');
    setTimeout (()=>{
        loading.style.display = 'none';
    },5000);

    let registerform = document.getElementById('registerPlayRoom');
    setTimeout(()=>{
        registerform.style.visibility='visible';
    },5000);

    
}