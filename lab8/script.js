function add() {
    let table = document.querySelector('table');
    let tr = document.createElement('tr');
    
    for (let i = 0; i < 5; i++) {
        let td = document.createElement('td');

        if (i < 2) {
            let input = document.createElement('input');
            td.appendChild(input);
        } else {
            let button = document.createElement('button');

            if (i === 2) {
                button.textContent = "↑";
                button.onclick = function() {
                    let a = this.parentElement.parentElement.previousElementSibling;
                    if (a) {
                        this.parentElement.parentElement.after(a);
                    }
                };
            } else if (i === 3) {
                button.textContent = "↓";
                button.onclick = function() {
                    let b = this.parentElement.parentElement.nextElementSibling;
                    if (b) {
                        this.parentElement.parentElement.before(b);
                    }
                };
            } else if (i === 4) {
                button.textContent = "x";
                button.onclick = function() {
                    this.parentElement.parentElement.remove();
                };
            }

            td.appendChild(button);
        }

        tr.appendChild(td);
    }

    table.appendChild(tr);
}


function print() {
    str = "{";
    let table = document.getElementById('main');
    let tr = table.children;
    for(let i = 0; i < tr.length;i++)
        {
            let td = tr[i].children;
            str += '"' + td[0].firstChild.value + '"' + ':' + ' '+ '"'
            + td[1].firstChild.value + '"'; 
            if( i != tr.length -1)
                str += ',' + ' ';
        }
    str += "}";
    p = document.createElement("p");
    p.textContent = str;
    document.body.appendChild(p);    
}