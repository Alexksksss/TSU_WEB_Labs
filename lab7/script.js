function figure(n, type) {
    for (let i = 0; i < n; i++) {
        if (type === 'square') {
            let square = document.createElement('div');
            square.className = 'square';
            square.style.border = '1px solid black';

            square.style.top = 100 + Math.floor(Math.random() * 500) + 'px';
            square.style.left = 100 + Math.floor(Math.random() * 500) + 'px';
            square.style.width = Math.floor(Math.random() * 200) + 'px';
            square.style.height = square.style.width;

            square.onclick = function () {
                if (square.style.backgroundColor != 'yellow')
                    square.style.backgroundColor = 'yellow';
                else{
                    square.style.backgroundColor = '#ff1a1a'
                }
            };

            square.ondblclick = function () {
                document.body.removeChild(square);
            };

            document.body.appendChild(square);
        } else if (type === 'triangle') {
            let square = document.createElement('div');
            let squaresize = Math.floor(Math.random() * 200);
            square.style.position = 'absolute';
            square.style.width = squaresize + 'px';
            square.style.height = square.style.width;
            square.style.top = 100 + Math.floor(Math.random() * 500) + 'px';
            square.style.left = 100 + Math.floor(Math.random() * 500) + 'px';
            square.style.overflow = 'hidden';

            let tri = document.createElement('div');
            let tri_size = squaresize / Math.sqrt(2);
            tri.className = 'triangle';
            tri.style.width = tri_size + 'px';
            tri.style.height = tri.style.width;
            tri.style.transform = 'rotate(45deg)';
            tri.style.top = squaresize - (tri_size / 2) + 'px';
            tri.style.left = (squaresize - tri_size) / 2 + 'px';

            tri.onclick = function () {
                if (tri.style.backgroundColor != 'yellow')
                    tri.style.backgroundColor = 'yellow';
                else{
                    tri.style.backgroundColor = '#1a1aff'
                }
            };

            tri.ondblclick = function () {
                document.body.removeChild(square);
            };

            document.body.append(square);
            square.append(tri);


        } else if (type === 'circle') {
            let circle = document.createElement('div');
            circle.className = 'circle';
            circle.style.border = '1px solid black';

            circle.style.top = 100 + Math.floor(Math.random() * 500) + 'px';
            circle.style.left = 100 + Math.floor(Math.random() * 500) + 'px';
            circle.style.width = Math.floor(Math.random() * 200) + 'px';
            circle.style.height = circle.style.width;

            circle.onclick = function () {
                if (circle.style.backgroundColor != 'yellow')
                    circle.style.backgroundColor = 'yellow';
                else{
                    circle.style.backgroundColor = '#1aff1a'
                }
            };

            circle.ondblclick = function () {
                document.body.removeChild(circle);
            };

            document.body.appendChild(circle);
        }
    }
}
