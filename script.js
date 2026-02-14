const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonContainer = this.parentElement;
        
        const list = buttonContainer.querySelector('.list');
        
        const allLists = document.querySelectorAll('.list');
        allLists.forEach(otherList => {
            if (otherList !== list) {
                otherList.classList.remove('active');
            }
        });
        
        list.classList.toggle('active');
    });
});