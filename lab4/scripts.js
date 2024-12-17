document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        const formMessage = document.getElementById('form-message');

        // Проверка данных при вводе (валидация - пункт 5)
        form.name.addEventListener('input', () => {
            form.name.style.borderColor = form.name.value.trim() === '' ? 'red' : '';
        });

        form.email.addEventListener('input', () => {
            form.email.style.borderColor = !form.email.value.includes('@') ? 'red' : '';
        });

        form.message.addEventListener('input', () => {
            form.message.style.borderColor = form.message.value.trim() === '' ? 'red' : '';
        });

        // Отправка POST-запроса при нажатии кнопки (пункт 4)
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (form.name.value.trim() === '' || !form.email.value.includes('@') || form.message.value.trim() === '') {
                alert('Пожалуйста, корректно заполните все поля.');
                return;
            }

            const data = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                message: form.message.value.trim()
            };

            try {
                const response = await fetch('http://localhost:8000/lab4/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    throw new Error('Network error');
                }

                formMessage.style.display = 'block';
                formMessage.style.color = 'green';
                formMessage.textContent = 'Сообщение успешно отправлено!';
                form.reset();
            } catch (error) {
                formMessage.style.display = 'block';
                formMessage.style.color = 'red';
                formMessage.textContent = 'Ошибка при отправке сообщения. Попробуйте позже.';
            }
        });
    }
});
