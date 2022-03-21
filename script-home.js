window.onload = ()=> {
    let loading = document.getElementById('lottie-player-wrapper');
    setTimeout (()=>{
        loading.style.display = 'none';
    },5000);

    let loadingform = document.getElementById('loginPlayRoom');
    setTimeout(()=>{
        loadingform.style.visibility='visible';
    },5000);
}