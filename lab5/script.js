function openTextWindow(windowId, newText) {
    var main = document.getElementById('page');
    main.style.opacity = 0.5;

    var window = document.getElementById(windowId);
    var newText = document.querySelector(newText);
    newText.style.opacity = 0.5;

    window.style.display = 'block';
    
    window.onclick = function () {
        window.style.display = 'none';
        main.style.opacity = 1;
        newText.style.opacity = 1;
    };
}

function text1() {
    openTextWindow('window_1', '.new-1-text');
}

function text2() {
    openTextWindow('window_2', '.new-2-text');
}

function text3() {
    openTextWindow('window_3', '.new-3-text');
}
