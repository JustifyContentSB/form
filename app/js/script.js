$(function() {
    $.fn.datepicker.language['ru'] = {
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        today: 'Сегодня',
        clear: 'Очистить',
        dateFormat: 'dd.mm.yyyy',
        timeFormat: 'hh:ii',
        firstDay: 1
    };

    $('.form__datepicker').datepicker({
        language: 'ru',
        clearButton: true,
        keyboardNav: true,
    });
    $('.form__datepicker-rehabilitation').datepicker({
        minDate: new Date(),
    });
    $('.form__tel').mask('(999) 999-99-99');


    const smartFocus = labelElement => {
        const input = labelElement.querySelector('.form__inputs input')
        input.addEventListener('focus', e => {
            labelElement.classList.toggle('active', e.target.value)
        })
    }

    document.querySelectorAll('.form__label').forEach(smartFocus)

    const smartInput = labelElement => {
        const input = labelElement.querySelector('.form__inputs input')
        input.addEventListener('input', e => {
            labelElement.classList.toggle('fill', e.target.value)
        })
    }

    document.querySelectorAll('.form__label').forEach(smartInput)

});