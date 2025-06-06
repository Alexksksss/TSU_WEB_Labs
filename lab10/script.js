let veil = document.getElementById("veil");
let rabbit = document.getElementById("rabbit");
let wizard = document.getElementById("wizard");
let hat = document.getElementById("hat");
let bird = document.getElementById("bird");
let triangle = document.getElementById("triangle");
let flag = false;
let rabbitBird = false;

function startAnimation(start, duration, update, onComplete) {
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        if (timePassed >= duration) {
            clearInterval(timer);
            if (onComplete) onComplete();
            return;
        }

        update(timePassed);
    });
}

function animationUp(div) {
    let start = Date.now();

    if (div === 1) {
        startAnimation(start, 1000,
            function (timePassed) {
                veil.style.bottom = timePassed * 5 + 'vh';
            }
        );
    } else if (div === 2) {
        startAnimation(start, 40,
            function (timePassed) {
                veil.style.bottom = timePassed / 8 + 'vh';
            }
        );
    } else if (div === 3) {
        startAnimation(start, 40,
            function () {
                veil.style.bottom = '1px';
            }
        );
    } else if (div === 4) {
        if (rabbitBird === false) {
            startAnimation(start, 200,
                function (timePassed) {
                    rabbit.style.bottom = 30 - timePassed / 10 + 'vh';
                    bird.style.bottom = 10 + timePassed / 10 + 'vh';
                },
                function () {
                    rabbitBird = true;
                }
            );
        } else {
            startAnimation(start, 200,
                function (timePassed) {
                    rabbit.style.bottom = 10 + timePassed / 10 + 'vh';
                    bird.style.bottom = 30 - timePassed / 10 + 'vh';
                },
                function () {
                    rabbitBird = false;
                }
            );
        }
    }
}

function startOpacityAnimation(start, duration, update, onComplete) {
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        if (timePassed >= duration) {
            clearInterval(timer);
            if (onComplete) onComplete();
            return;
        }

        update(timePassed);
    });
}

function light() {
    if (flag === false) {
        let start = Date.now();
        startOpacityAnimation(start, 800,
            function (timePassed) {
                wizard.style.opacity = timePassed / 800;
                hat.style.opacity = timePassed / 800;
                bird.style.opacity = timePassed / 800;
                rabbit.style.opacity = timePassed / 800;
                if (triangle.style.opacity < 0.5)
                    triangle.style.opacity = timePassed / 800;
            },
            function () {
                flag = true;
            }
        );
    } else {
        let start = Date.now();
        startOpacityAnimation(start, 800,
            function (timePassed) {
                wizard.style.opacity = 1 - timePassed / 800;
                hat.style.opacity = 1 - timePassed / 800;
                bird.style.opacity = 1 - timePassed / 800;
                rabbit.style.opacity = 1 - timePassed / 800;
                triangle.style.opacity = 0.5 - timePassed / 800;
            },
            function () {
                flag = false;
            }
        );
    }
}
