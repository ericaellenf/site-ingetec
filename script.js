// Função para ativar animação das seções ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.card');
  
    // Função para verificar se a seção está visível
    function checkVisibility() {
      const windowHeight = window.innerHeight;
  
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= windowHeight * 0.8) {
          section.classList.add('active');
        }
      });
  
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop <= windowHeight * 0.8) {
          card.classList.add('active');
        }
      });
    }
  
    // Verifica se as seções estão visíveis ao carregar e ao rolar a página
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    // Função para ativar animação das seções ao rolar a página
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.card');
  
    // Função para verificar se a seção está visível
    function checkVisibility() {
      const windowHeight = window.innerHeight;
  
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= windowHeight * 0.8) {
          section.classList.add('active');
        }
      });
  
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop <= windowHeight * 0.8) {
          card.classList.add('active');
        }
      });
    }
  
    // Verifica se as seções estão visíveis ao carregar e ao rolar a página
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
  
    // Função para enviar a mensagem para o WhatsApp
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Pega os valores dos campos do formulário
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const defeito = document.getElementById("defeito").value;
  
      // Prepara a mensagem a ser enviada para o WhatsApp
      const whatsappMessage = `*Mensagem de Contato*\n\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}\n Defeito: ${defeito}\n `;
  
      // Substitua pelo número do seu WhatsApp (incluindo o código do país)
      const whatsappNumber = "5584999540000";
  
      // Cria a URL para o WhatsApp
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
      // Abre o WhatsApp com a mensagem composta
      window.open(whatsappURL, "_blank");
    });
  });
  