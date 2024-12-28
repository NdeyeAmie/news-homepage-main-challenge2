// Fonction pour menu icon
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav ul");
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });

    const navLinks = document.querySelectorAll(".nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.style.color = "#f15e2c"; 
        link.style.textDecoration = "none";
      });
  
      link.addEventListener("mouseout", () => {
        link.style.color = "#333"; 
        link.style.textDecoration = "none"; 
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {

  
    // Gestion des survols (hover) pour les liens de navigation
   
  
  
    // Gestion des survols pour les boutons
    // const buttons = document.querySelectorAll(".btn");
  
    // buttons.forEach((button) => {
    //   button.addEventListener("mouseover", () => {
    //     button.style.backgroundColor = "#d14e1d"; // Couleur survol
    //   });
  
    //   button.addEventListener("mouseout", () => {
    //     button.style.backgroundColor = "#f15e2c"; // Couleur par défaut
    //   });
    // });
  });
  

  