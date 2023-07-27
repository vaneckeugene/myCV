const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 700) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function openModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeModal();
    }
};

const closeBtn = document.querySelector('.modal-header .close');
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal)
}