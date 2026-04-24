console.log("Script chargé !");


document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("discoverBtn");
  const overlay = document.getElementById("transitionOverlay");
  if (btn && overlay) {

  btn.addEventListener("click", function() {
    
    btn.classList.add("clicked");        // effet bouton
    overlay.classList.add("active");     // overlay visible

    // Redirection après la transition
    setTimeout(function() {
      window.location.href = "NOUS.html";
    }, 500); // durée de l’overlay (500ms)
  });
} });


const canvas = document.getElementById('heroParticles');
if (canvas) {
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 60;

for(let i=0; i<particleCount; i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2 + 1,
    speed: Math.random()*0.3 + 0.1,
    angle: Math.random()*Math.PI*2
  });
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    if(p.x>canvas.width) p.x=0;
    if(p.x<0) p.x=canvas.width;
    if(p.y>canvas.height) p.y=0;
    if(p.y<0) p.y=canvas.height;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "rgba(0,255,255,0.15)";
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
  }

const overlay = document.getElementById('transitionOverlay');
document.querySelectorAll('.subcategory-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const link = btn.getAttribute('href');
    overlay.classList.add('active');
    setTimeout(() => {
      window.location.href = link;
    }, 500); // durée de la transition
  });
});


document.addEventListener("DOMContentLoaded", () => {

  let count = 0;
  const cartCount = document.querySelector(".cart-count");
  const miniCart = document.querySelector(".mini-cart");
  const miniCartItems = document.querySelector(".mini-cart-items");
  const cartIcon = document.querySelector(".cart");
let checkoutBtn = document.querySelector(".checkout-btn");
let checkoutForm = document.querySelector(".checkout-form");
let cancelBtn = document.querySelector(".cancel-btn");




  

  // Fonction animation "vol vers le panier"
  function flyToCart(img) {
    if (!img || !cartIcon) return;
    const imgClone = img.cloneNode(true);
    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    imgClone.style.position = "fixed";
    imgClone.style.left = imgRect.left + "px";
    imgClone.style.top = imgRect.top + "px";
    imgClone.style.width = imgRect.width + "px";
    imgClone.style.height = imgRect.height + "px";
    imgClone.style.borderRadius = "8px";
    imgClone.style.transition = "all 0.8s cubic-bezier(0.65, -0.6, 0.35, 1.6)";
    imgClone.style.zIndex = 1000;
    document.body.appendChild(imgClone);

    setTimeout(() => {
      imgClone.style.left = cartRect.left + cartRect.width / 2 - imgRect.width / 2 + "px";
      imgClone.style.top = cartRect.top + "px";
      imgClone.style.width = "0px";
      imgClone.style.height = "0px";
      imgClone.style.opacity = 0;
      imgClone.style.transform = "rotate(720deg)";
    }, 10);

    setTimeout(() => {
      document.body.removeChild(imgClone);
    }, 900);
  }
  

  // Fonction ajouter au mini-cart
  function addToMiniCart(productCard) {
    const nameEl = productCard.querySelector(".product-name");
    const priceEl = productCard.querySelector(".product-price");
    if (!nameEl || !priceEl) return;

    const name = nameEl.textContent;
    const price = priceEl.textContent;

    const item = document.createElement("div");
    item.classList.add("cart-item");

    const text = document.createElement("span");
    text.textContent = `${name} - ${price}`;
    text.style.marginRight = "8px";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      item.remove();
      count = document.querySelectorAll(".cart-item").length;
      cartCount.textContent = count;
    });

    item.appendChild(text);
    item.appendChild(removeBtn);
    miniCartItems.appendChild(item);

    count = document.querySelectorAll(".cart-item").length;
    cartCount.textContent = count;

    miniCart.classList.add("show");
    setTimeout(() => miniCart.classList.remove("show"), 3000);
  }

  // Ajouter au panier
  document.querySelectorAll(".product-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const productCard = btn.closest(".product-card");
      if (!productCard) return;

      const img = productCard.querySelector("img");
      if (img) flyToCart(img);

      addToMiniCart(productCard);

      cartCount.classList.add("bump");
      setTimeout(() => cartCount.classList.remove("bump"), 300);
    });
  });

  // Toggle mini-cart
  if (cartIcon && miniCart) {
  cartIcon.addEventListener("click", () => {
    miniCart.classList.toggle("show");
  });

  // Checkout
  if (checkoutBtn && checkoutForm && cancelBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (count === 0) {
        alert("Votre panier est vide !");
        return;
      }
      checkoutForm.style.display = "block";
    });

    cancelBtn.addEventListener("click", () => {
      checkoutForm.style.display = "none";
    });
  }
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backBtn");

  if (!backBtn) return;

  backBtn.addEventListener("click", () => {
    window.history.back(); // renvoie toujours à la page précédente
  });
});





