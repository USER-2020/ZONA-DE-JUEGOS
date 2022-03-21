window.onload = () =>{
    let loading = document.getElementById('lottie-player-wrapper');
    setTimeout (()=>{
        loading.style.display = 'none';
    },5000);

    let loadingProducts = document.getElementById('products');
    setTimeout(()=>{
        loadingProducts.style.visibility = 'visible';
    },5000)
}