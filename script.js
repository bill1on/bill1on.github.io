const scroll = (event) => {
    const to = event.target.dataset.id
    const el = document.querySelector(`#${to}`);
    el.scrollIntoView({behavior: 'smooth', block: 'start'})
}


document.querySelectorAll('.button').forEach(bu => bu.addEventListener('click', scroll))
document.querySelector('.btt1').addEventListener('click', scroll)