(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('feHFd1M24gbHs-F3M');
})();

const messageContainer = document.querySelectorAll('#contact .row .col')[1];
const formContainer = messageContainer.firstElementChild;
const messageSentFeedback = document.querySelector('.email-sent-feedback');
console.log(messageSentFeedback);
const messageSuccess = () => {
  formContainer.style.display = 'none';
  messageSentFeedback.style.display = "flex";

}

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_p1zkvee', 'template_89y0rvc', this)
            .then(function() {
                console.log('SUCCESS!');
                messageSuccess();
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}