

function equalizeHeight (list) {
    let arr = [];
    for(let i = 0; i < list.length; i++) {
    let currHeight = list[i].offsetHeight;
    arr.push(currHeight);
    
    }
    var max = Math.max.apply(null, arr);
    posts.forEach(function(item){
    item.style.minHeight = max + 'px';
    });
}

let posts = document.querySelectorAll('article.post');
equalizeHeight(posts);