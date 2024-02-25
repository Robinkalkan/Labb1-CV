document.addEventListener('DOMContentLoaded', function() {
    let esterEgg1 = document.querySelector('.esterEgg1');

    esterEgg1.addEventListener('click', function() {
        document.body.classList.toggle('changed-background');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    const code = '1337'; // Din kombination

    let input = '';
    document.addEventListener('keydown', function(event) {
        input += event.key;
        if (input === code) {
            modal.style.display = 'block';
            input = '';
        }
    });

    span.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});