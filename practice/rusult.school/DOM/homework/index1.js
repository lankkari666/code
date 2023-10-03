window.onload = function () {
    const body = document.querySelector('body');
    body.innerHTML = '<form class="create-user-form">\n' +
        '    <label>\n' +
        '        Имя\n' +
        '        <input type="text" name="userName" placeholder="Введите ваше имя">\n' +
        '    </label>\n' +
        '    <label>\n' +
        '        Пароль\n' +
        '        <input type="password" name="password" placeholder="Придумайте Пароль">\n' +
        '    </label>\n' +
        '    <button type="submit">\n' +
        '        Подтвердить\n' +
        '    </button>\n' +
        '</form>';
    const form = document.createElement('form');
    form.className = 'create-user-form';
    body.append(form);
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Имя'
    form.append(nameLabel);
    const nameInput = document.createElement('input')
    nameInput.type = 'text';
    nameInput.name = 'userName';
    nameInput.placeholder = 'Введите ваше имя'
    nameLabel.append(nameInput);
    const pwdLabel = document.createElement('label')
    pwdLabel.textContent = 'Пароль';
    form.append(pwdLabel);
    const pwdInput = document.createElement('input');
    pwdInput.type = 'password';
    pwdInput.name = 'password';
    pwdInput.placeholder = 'Придумайте пароль';
    pwdLabel.append(pwdInput);
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Подтвердить';
    form.append(submitBtn);
}

