class Validator {
    constructor(form) {
        this.patterns = {
            name: /^[a-zA-Zа-яА-Я]+$/g,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/g,
            email: /^['\w._-']+@['\w-'].[a-z]{2,4}$/g,
        }
        this.errors = {
            name: 'Имя должно содержать только буквы',
            phone: 'Неверный формат номера (используйте +7(000)000-0000)',
            email: 'Неверный формат электронной почты',
        }
        this.form = document.querySelector('.validator-form');
        this.validate();
    }
}