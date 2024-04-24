const mediaQueryMedium = window.matchMedia('(min-width: 768px)')
const mediaQueryBig = window.matchMedia('(min-width: 1024px)')
const mediaQuerySmall = window.matchMedia('(max-width: 640px)')


function switchBackgroundColor(mediaQueryList) {
    if (mediaQueryList.matches) {
        document.body.classList.add('background-medium')
    } else {
        document.body.classList.remove('background-medium')
    }
}

function showBtn(mediaQueryList) {
    if (mediaQueryList.matches){
        document.querySelector('.btn').classList.remove('btn-hidden');
    } else {
        document.querySelector('.btn').classList.add('btn-hidden');
    }
}

function showIcon(mediaQueryList) {
    if (mediaQueryList.matches) {
        document.querySelector('.fa-solid').classList.remove('fa-solid-hidden');
        document.querySelector('.fa-ice-cream').classList.remove('fa-ice-cream-hidden');
        document.querySelector('.connection').textContent = '';
    } else {
        document.querySelector('.fa-solid').classList.add('fa-solid-hidden');
        document.querySelector('.fa-ice-cream').classList.add('fa-ice-cream-hidden');
        document.querySelector('.connection').textContent = '@Connexion...';
    }
}

mediaQueryMedium.addEventListener('change', () => {
    switchBackgroundColor(mediaQueryMedium);
})

mediaQueryBig.addEventListener('change', () => {
    showBtn(mediaQueryBig);
})

mediaQuerySmall.addEventListener('change', () => {
    showIcon(mediaQuerySmall);
})