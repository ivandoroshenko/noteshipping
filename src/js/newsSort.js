let postViews = document.querySelectorAll('.post-view__item');
postViews.forEach(function(item) {
  item.addEventListener('click', function(){
        let view = item.classList[1];
        changeView(view);
  });
});

function changeView (view) {
let postWrap = document.querySelector('.post-wrap');
let gridIcon = document.querySelector('.post-view__item.grid');
let listIcon = document.querySelector('.post-view__item.list');
switch (view) {
        case 'list':
        postWrap.classList.remove('grid');
        gridIcon.classList.remove('active');
        listIcon.classList.add('active');
                break;
        case 'grid':
                postWrap.classList.add('grid');
                gridIcon.classList.add('active');
                listIcon.classList.remove('active');
                break;
}        
};