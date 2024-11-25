document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-info');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const moreInfo = button.nextElementSibling;
            if (moreInfo.style.display === 'block') {
                moreInfo.style.display = 'none';
                button.textContent = '+ info';
            } else {
                moreInfo.style.display = 'block';
                button.textContent = '- info';
            }
        });
    });
});
