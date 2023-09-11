const token = '6223964324:AAFmROWBHbHz8eXxSI5-e8hPCKt3bj-LI0Q';
const chatId = '-1001923711193';
const URL_API = 'https://api.telegram.org/'

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', (event) => {
   // event.preventDefault();
   const message = 'Клиент представился :' + sendName.value + "\n" + 'Возможный заказ: ' + messageInput.value + "\n " + 'Введен телефон:' + " " + sendTel.value;
   if (message) {
      axios.post(`${URL_API}bot${token}/sendMessage`, {
         chat_id: chatId,
         text: message,
      })
         .then(response => console.log(response), alert('Ваше сообщение:' + ' ' + messageInput.value + ' ' + 'Ваш телефон:' + ' ' + sendTel.value))
         .catch(error => console.error(error));
   }
});