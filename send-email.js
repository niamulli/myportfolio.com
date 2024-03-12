(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('feHFd1M24gbHs-F3M');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_p1zkvee', 'template_89y0rvc', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}