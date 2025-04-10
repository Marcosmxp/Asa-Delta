document.addEventListener('DOMContentLoaded', () => {
    // Array com as avaliações de clientes
    const reviews = [
      { message: "Atendimento rápido e eficiente!", rating: 5, name: "João Silva" },
      { message: "Profissionais extremamente competentes e educados.", rating: 5, name: "Maria Souza" },
      { message: "Chegaram na hora certa, o que fez toda a diferença!", rating: 4, name: "Pedro Oliveira" },
      { message: "Serviço impecável, resolveram o problema com segurança e sem danos.", rating: 5, name: "Ana Costa" },
      { message: "Preço justo aliado a um atendimento de alta qualidade.", rating: 4, name: "Carlos Almeida" },
      { message: "Equipe muito simpática e atenciosa. Senti que estava em boas mãos.", rating: 5, name: "Fernanda Lima" },
      { message: "Serviço seguro e confiável, fiquei tranquilo o tempo todo.", rating: 4, name: "Ricardo Pereira" },
      { message: "Excelente suporte e solução rápida para o imprevisto.", rating: 5, name: "Juliana Barbosa" },
      { message: "Carro rebocado com muito cuidado, sem nenhum arranhão.", rating: 5, name: "Lucas Santos" },
      { message: "Empresa comprometida com a satisfação do cliente.", rating: 5, name: "Mariana Ribeiro" },
      { message: "Serviço 24 horas que nunca me deixou na mão.", rating: 4, name: "Mateus Silva" },
      { message: "Rapidez, segurança e um atendimento de primeira!", rating: 5, name: "Patrícia Melo" },
      { message: "Equipe bem treinada, demonstrou confiança e profissionalismo.", rating: 5, name: "Eduardo Fernandes" },
      { message: "Experiência incrível: atendimento ágil e eficaz.", rating: 4, name: "Larissa Gomes" },
      { message: "Recomendo a todos que precisam de um guincho confiável.", rating: 5, name: "Bruno Rocha" }
    ];
  
    let currentReview = 0;
    const popup = document.getElementById('popup-review');
  
    // Função para gerar as estrelas
    function generateStars(rating) {
      let stars = '';
      for (let i = 0; i < rating; i++) {
        stars += '★';
      }
      for (let i = rating; i < 5; i++) {
        stars += '☆';
      }
      return stars;
    }
  
    // Atualiza o conteúdo do pop-up com uma nova avaliação
    function showReview(review) {
      popup.innerHTML = `
        <img src="/assets/anonimo.png" alt="Foto de perfil" class="profile-photo">
        <div class="review-details">
          <p class="review-message">${review.message}</p>
          <p class="review-rating">${generateStars(review.rating)}</p>
          <p class="review-name">${review.name}</p>
        </div>
      `;
    }
  
    // Atualiza a avaliação com efeito fade-out e fade-in
    function updateReview() {
      popup.classList.remove('show');
      setTimeout(() => {
        showReview(reviews[currentReview]);
        popup.classList.add('show');
        currentReview = (currentReview + 1) % reviews.length;
      }, 500); // tempo para o fade-out
    }
  
    // Inicializa o pop-up e define o intervalo de atualização (3 segundos)
    showReview(reviews[currentReview]);
    popup.classList.add('show');
    currentReview++;
    setInterval(updateReview, 3000);
  });
  