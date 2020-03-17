let table = document.getElementById('vessel-data');
let tbody = table.querySelector('tbody');
let trs = tbody.querySelectorAll('tr');
let list = document.querySelector('.vessel-tabs');
let items = list.querySelectorAll('.tabs-item');

items.forEach(element => {
        element.addEventListener('click', function(){
            items.forEach(function(item){
                item.classList.remove('active');
            });
            element.classList.add('active');
            let target = element.classList[1];
            console.log(target);
            
            trs.forEach(function(tr, index){
                if(tr.classList.contains(target)) {
                    tr.classList.remove('d-none');
                    console.log(index);
                    tbody.prepend(tr);
                } else {
                    tr.classList.add('d-none');
                }
            });
            
        });
    });
   
