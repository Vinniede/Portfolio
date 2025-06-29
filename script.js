const toggle = document.getElementById('menu-toggle');
  const popup = document.getElementById('nav-popup');

  toggle.addEventListener('click', () => {
    popup.classList.toggle('show');
  });

  // Optional: Close popup when clicking outside
  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !toggle.contains(e.target)) {
      popup.classList.remove('show');
    }
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  function activateLink() {
    let scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; // adjust for sticky header height
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateLink);

  const blogData = {
    async: {
      title: "Mastering Async/Await in Node.js",
      date: "2025-01-14",
      content: `
        <p>Async/await simplifies handling asynchronous operations in Node.js, making your code more readable and maintainable.</p>
        <p>This blog walks you through how async functions work, the role of Promises, and best practices for avoiding callback hell.</p>
        <ul>
          <li>Understanding Promises</li>
          <li>Using async/await</li>
          <li>Common mistakes to avoid</li>
        </ul>
      `
    },
    vincent: {
      title: "Who is Sir Vincent?",
      date: "2025-06-07",
      content: `
        <p>A deep dive into the life, journey, and impact of Sir Vincent — a passionate software developer, cloud enthusiast, and tech educator.</p>
        <p>From humble beginnings to launching Vintech Solutions, this blog reflects on resilience, learning, and vision.</p>
      `
    },
    docker: {
      title: "Getting Started with Docker",
      date: "2025-04-10",
      content: `
        <p>This guide introduces Docker, a containerization platform that lets you package your app with its dependencies.</p>
        <p>You'll learn to create your first Dockerfile, run containers, and use Docker Hub for image sharing.</p>
        <ul>
          <li>What is Docker?</li>
          <li>Installing Docker</li>
          <li>Creating your first container</li>
        </ul>
      `
    }
  };
  document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav-popup").classList.remove("show");
  });
});

  function openBlogModal(id) {
    const data = blogData[id];
    if (data) {
      document.getElementById("blogModalTitle").innerText = data.title;
      document.getElementById("blogModalDate").innerText = data.date;
      document.getElementById("blogModalContent").innerHTML = data.content;
      document.getElementById("blogModal").style.display = "block";
    }
  }

  function closeBlogModal() {
    document.getElementById("blogModal").style.display = "none";
  }

  // Optional: Close modal when clicking outside content
  window.onclick = function (event) {
    const modal = document.getElementById("blogModal");
    if (event.target === modal) {
      closeBlogModal();
    }
  };

    function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    // Construct message
    const fullMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    // WhatsApp message link
    const whatsappNumber = "254790406839";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    document.getElementById("whatsappLink").href = whatsappLink;

    // Gmail message link
    const gmailSubject = encodeURIComponent(subject);
    const gmailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=vinniezuri@gmail.com&su=${gmailSubject}&body=${gmailBody}`;
    document.getElementById("emailLink").href = gmailLink;

    // Show the modal
    openModal("contactOptionModal");
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "block";
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
  }

  // Optional: close modal when clicking outside
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("contactOptionModal");
    if (event.target === modal) {
      closeModal("contactOptionModal");
    }
  });