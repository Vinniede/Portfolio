document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // --------- Send via Email ---------
    const subject = `New Contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const mailtoLink = `mailto:vinniezuri@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");

    // --------- Send via WhatsApp ---------
    const whatsappMessage = `New Contact:%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappLink = `https://wa.me/+254790406839?text=${whatsappMessage}`; 
    window.open(whatsappLink, "_blank");
});