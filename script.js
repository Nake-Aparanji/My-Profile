document.querySelector('.sidebar-option[data-url="education.html"]')
    .addEventListener('click', function() {
        window.location.href = this.getAttribute('data-url');
    }
    );

document.querySelector('.sidebar-option[data-url="skills.html"]')
    .addEventListener('click', function() {
        window.location.href = this.getAttribute('data-url');
    }
    );    

document.querySelector('.sidebar-option[data-url="projects.html"]')
    .addEventListener('click', function() {
        window.location.href = this.getAttribute('data-url');
    }
    );     

document.querySelector('.sidebar-option[data-url="experience.html"]')
    .addEventListener('click', function() {
        window.location.href = this.getAttribute('data-url');
    }
    );  

document.querySelector('.sidebar-option[data-url="certifications.html"]')
    .addEventListener('click', function() {
        window.location.href = this.getAttribute('data-url');
    }
    );  
    
document.getElementById('cvResume').addEventListener('click', function() {
    /*window.location.href = 'https://drive.google.com/drive/folders/1qMQe8NuJBJjgPaaqkWW-8IT4OFEgslNW?usp=sharing';*/
    window.open('https://drive.google.com/drive/folders/1qMQe8NuJBJjgPaaqkWW-8IT4OFEgslNW?usp=sharing', '_blank');
});

document.getElementById('contactInfo').addEventListener('click', function() {
    let contactDetails = document.getElementById('contactDetails');
    if (contactDetails.style.display === "none") {
        contactDetails.style.display = "block";
    } else {
        contactDetails.style.display = "none";
    }
});