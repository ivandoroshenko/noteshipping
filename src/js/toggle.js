(function selfCall() {
    let toggle = doc.querySelector('#toggle-icon');
    let overlay = doc.querySelector('#overlay');
    let toggleMenu = doc.querySelector('#toggle-menu');
    toggle.addEventListener('click', function () {
        this.classList.toggle('open');
         overlay.classList.toggle('d-none--mob');
         toggleMenu.classList.toggle('hidden');
         document.body.classList.toggle('o-hidden');
    });
    
})();