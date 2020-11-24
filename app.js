function AnimatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if (input.type === "text" && ValidateUser(input)) {
                NextSlide(parent, nextForm);
            } else if (input.type === "email" && ValidateEmail(input)) {
                NextSlide(parent, nextForm);
            } else if (input.type === "password" && ValidateUser(input)) {
                NextSlide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.5s ease";
            }
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
        });
    });
}

function ValidateUser(user) {
    if (user.value.length < 6) {
        error('rgb(189,87,87)');
    } else {
        error('rgb(87,139,130)');
        return true;
    }
}

function ValidateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error('rgb(87,139,130)');
        return true;
    } else {
        error('rgb(189,87,87)');
    }
}

function NextSlide(parent, nextForm) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) {
    document.body.style.backgroundColor = color;
}

AnimatedForm();