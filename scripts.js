const btnTrigger = document.querySelector('.btnTrigger');
const notification = document.querySelector('.small-notif-notification');
const close = document.querySelector('.small-notif-close');

btnTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(btnTrigger);
  if (!notification.classList.contains('small-notif-show')) {
    notification.classList.add('small-notif-show');
    setTimeout(() => {
      notification.classList.remove('small-notif-show');
    }, 3000);
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

close.addEventListener('click', (e) => {
  e.preventDefault();
  notification.classList.remove('small-notif-show');
});
