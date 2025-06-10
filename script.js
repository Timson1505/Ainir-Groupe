function sendToWhatsApp() {
  const name = document.getElementById('clientName').value;
  const phone = document.getElementById('clientPhone').value;
  const service = document.getElementById('serviceType').value;
  const date = document.getElementById('appointmentDate').value;
  const time = document.getElementById('appointmentTime').value;
  const message = document.getElementById('clientMessage').value;

  // Валидация
  if (!name || !phone || !service || !date || !time) {
    alert('Пожалуйста, заполните все обязательные поля');
    return;
  }

  if (!/^\+?\d{10,15}$/.test(phone)) {
    alert('Пожалуйста, введите корректный номер телефона');
    return;
  }

  const formattedDate = new Date(date).toLocaleDateString('ru-RU');
  const whatsappNumber = '996509601501'; // Ваш номер без +
  
  const text = `Новая запись в салон:
Имя: ${name}
Телефон: ${phone}
Услуга: ${service}
Дата: ${formattedDate}
Время: ${time}
Сообщение: ${message || 'нет'}`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
  
  // Открываем WhatsApp
  console.log(whatsappUrl);

  window.open(whatsappUrl, '_blank');
  
  // Показываем уведомление
  alert('Сейчас откроется WhatsApp для подтверждения записи. Пожалуйста, отправьте сообщение!');
  
  // Сбрасываем форму только после подтверждения
  document.getElementById('appointmentForm').reset();
}