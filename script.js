const icon = document.getElementById('solid-icon');
const check = document.getElementById('check');

check.addEventListener('change', () => {
    icon.classList.replace(check.checked ? 'fa-bars' : 'fa-x', check.checked ? 'fa-x' : 'fa-bars')
});

document.querySelectorAll('#menu-toggle a').forEach(button  => {
    button.addEventListener('click', () => {
        check.checked = false;
        icon.classList.replace('fa-x', 'fa-bars');
    });
});