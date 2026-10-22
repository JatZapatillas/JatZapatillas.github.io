const products = [
  {
    id: "nube-9060",
    name: "New Balance 9060",
    category: "urbanos",
    categoryLabel: "Urbano · Unisex",
    color: "Arena y rosa palo · consultar color",
    badge: "MÁS ELEGIDO",
    image: "Images/zapatos2/WhatsApp Image 2026-10-21 at 2.01.15 PM.jpeg",
    alt: "New Balance 9060 beige con detalles rosa palo",
    variants: [
      {
        image: "Images/zapatos2/WhatsApp Image 2026-10-21 at 2.01.15 PM.jpeg",
        color: "Arena y rosa palo · consultar color",
        alt: "New Balance 9060 beige con detalles rosa palo"
      },
      {
        image: "Images/zapatos2/WhatsApp Image 2026-10-21 at 2.01.15 PM (1).jpeg",
        color: "Blanco y gris · consultar color",
        alt: "New Balance 9060 blancos y grises"
      },
      {
        image: "Images/zapatos2/WhatsApp Image 2026-10-21 at 2.01.15 PM (2).jpeg",
        color: "Gris claro · consultar color",
        alt: "New Balance 9060 gris claro"
      },
      {
        image: "Images/zapatos2/WhatsApp Image 2026-10-21 at 2.01.15 PM (3).jpeg",
        color: "Gris y marfil · consultar color",
        alt: "New Balance 9060 gris y marfil"
      },
      {
        image: "Images/zapatos2/WhatsApp Image 2026-10-21 at 2.01.17 PM (1).jpeg",
        color: "Beige · consultar color",
        alt: "New Balance 9060 beige"
      },
      {
        image: "Images/zapatos2/WhatsApp Image 2026-10-21 at 2.01.17 PM.jpeg",
        color: "Beige claro · consultar color",
        alt: "New Balance 9060 beige claro"
      }
    ]
  },
  {
    id: "motion-pro",
    name: "Nike Kobe 6 Protro",
    category: "deportivos",
    categoryLabel: "Deportivo · Unisex",
    color: "Naranja vibrante · consultar color",
    badge: "EDICIÓN JAT",
    image: "Images/zapatos1/WhatsApp Image 2026-10-21 at 2.01.30 PM.jpeg",
    alt: "Nike Kobe 6 Protro naranja"
  },
  {
    id: "retro-high",
    name: "Air Jordan 1 Mid",
    category: "clasicos",
    categoryLabel: "Clásico · Unisex",
    color: "Negro, blanco y coral · consultar color",
    badge: "NUEVO",
    image: "Images/zapatos1/WhatsApp Image 2026-10-21 at 2.01.26 PM.jpeg",
    alt: "Air Jordan 1 Mid en negro, blanco y coral"
  },
  {
    id: "urban-soft",
    name: "Air Jordan 1 Low",
    category: "urbanos",
    categoryLabel: "Urbano · Unisex",
    color: "Beige claro · consultar color",
    badge: "",
    image: "Images/zapatos1/WhatsApp Image 2026-10-21 at 2.01.25 PM.jpeg",
    alt: "Air Jordan 1 Low gris claro"
  },
  {
    id: "street-pulse",
    name: "Nike · running retro",
    category: "deportivos",
    categoryLabel: "Deportivo · Unisex",
    color: "Negro y gris · consultar color",
    badge: "",
    image: "Images/zapatos1/WhatsApp Image 2026-10-21 at 2.01.27 PM.jpeg",
    alt: "Zapatillas deportivas Nike para running negras y grises"
  },
  {
    id: "daily-form",
    name: "Nike Air Force 1 Low",
    category: "clasicos",
    categoryLabel: "Clásico · Unisex",
    color: "Blanco y arena · consultar color",
    badge: "PRECIO ESPECIAL",
    image: "Images/zapatos1/WhatsApp Image 2026-10-21 at 2.01.34 PM.jpeg",
    alt: "Nike Air Force 1 Low en color crema"
  },
  {
    id: "new-balance-574",
    name: "New Balance · estilo clásico",
    category: "clasicos",
    categoryLabel: "Clásico · Unisex",
    color: "Negro y blanco · consultar color",
    badge: "",
    image: "Images/zapatos2/WhatsApp Image 2026-10-21 at 2.01.22 PM.jpeg",
    alt: "Zapatillas clásicas negras New Balance"
  },
  {
    id: "nike-cortez",
    name: "Nike Cortez",
    category: "clasicos",
    categoryLabel: "Clásico · Unisex",
    color: "Blanco, rojo y azul · consultar color",
    badge: "",
    image: "Images/zapatos1/WhatsApp Image 2026-10-21 at 2.01.43 PM.jpeg",
    alt: "Nike Cortez blanco con detalles rojos y azules"
  },
  {
    id: "nike-shox",
    name: "Nike Shox",
    category: "deportivos",
    categoryLabel: "Deportivo · Unisex",
    color: "Blanco y gris · consultar color",
    badge: "",
    image: "Images/zapatos1/WhatsApp Image 2026-10-21 at 2.01.34 PM (4).jpeg",
    alt: "Zapatillas Nike deportivas con amortiguación visible"
  },
  {
    id: "nike-vomero",
    name: "Nike Zoom Vomero",
    category: "deportivos",
    categoryLabel: "Running · Unisex",
    color: "Rosa · consultar color",
    badge: "",
    image: "Images/zapatos1/WhatsApp Image 2026-10-21 at 2.01.38 PM.jpeg",
    alt: "Zapatillas Nike running color rosa"
  },
  {
    id: "nike-air-max",
    name: "Nike Air Max",
    category: "deportivos",
    categoryLabel: "Running · Unisex",
    color: "Blanco y azul · consultar color",
    badge: "",
    image: "Images/zapatos1/WhatsApp Image 2026-10-21 at 2.01.40 PM (5).jpeg",
    alt: "Zapatillas Nike Air Max en azul y blanco"
  }
];

const whatsappNumber = "573225337396";
const whatsappGreeting = "Hola!, estoy interesado en estas zapatillas:";
const whatsappClosing = "me podrias brindar mas informacion?";

const photoGroups = [
  ["zapatos1", 25, 5], ["zapatos1", 26, 8], ["zapatos1", 27, 6],
  ["zapatos1", 28, 4], ["zapatos1", 29, 4], ["zapatos1", 30, 3],
  ["zapatos1", 31, 4], ["zapatos1", 32, 1], ["zapatos1", 34, 7],
  ["zapatos1", 36, 6], ["zapatos1", 37, 6], ["zapatos1", 38, 3],
  ["zapatos1", 39, 1], ["zapatos1", 40, 7], ["zapatos1", 41, 4],
  ["zapatos1", 42, 3], ["zapatos1", 43, 3], ["zapatos1", 44, 4],
  ["zapatos1", 45, 5], ["zapatos1", 46, 4], ["zapatos1", 47, 5],
  ["zapatos1", 48, 7], ["zapatos2", 15, 4], ["zapatos2", 16, 2],
  ["zapatos2", 17, 5], ["zapatos2", 18, 3], ["zapatos2", 22, 1],
  ["zapatos2", 23, 6], ["zapatos2", 24, 6], ["zapatos2", 25, 2]
];

function buildPhotoInventory() {
  const inventoryGrid = document.querySelector("#inventory-grid");
  let reference = 0;
  const photos = photoGroups.flatMap(([folder, minute, count]) =>
    Array.from({ length: count }, (_, index) => {
      reference += 1;
      const suffix = index === count - 1 ? "" : ` (${index + 1})`;
      const image = `Images/${folder}/WhatsApp Image 2026-10-21 at 2.01.${minute} PM${suffix}.jpeg`;
      return {
        reference: `JAT-${String(reference).padStart(3, "0")}`,
        image,
        category: folder === "zapatos2" ? "Casual / running · referencia por confirmar" : "Urbano / deportivo · referencia por confirmar"
      };
    })
  );

  inventoryGrid.innerHTML = photos.map((photo) => `
    <article class="inventory-card">
      <img src="${encodeURI(photo.image)}" alt="Calzado JAT, referencia ${photo.reference}" loading="lazy">
      <span>${photo.reference}</span>
      <small>${photo.category}</small>
    </article>
  `).join("");
}

const productGrid = document.querySelector("#product-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const cartDrawer = document.querySelector(".cart-drawer");
const cartBackdrop = document.querySelector(".drawer-backdrop");
const cartItems = document.querySelector(".cart-items");
const cartEmpty = document.querySelector(".cart-empty");
const cartSummary = document.querySelector(".cart-summary");
const cartCount = document.querySelector(".cart-count");
const toast = document.querySelector(".toast");
let activeFilter = "todos";
let toastTimeout;
let cart = loadCart();

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem("jat-cart") || "[]");
    if (!Array.isArray(savedCart)) throw new TypeError("El carrito guardado no tiene un formato válido.");
    return savedCart
      .filter((item) => products.some((product) => product.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0)
      .map((item) => ({ id: item.id, quantity: item.quantity }));
  } catch (error) {
    console.error("No se pudo recuperar el carrito guardado.", error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("jat-cart", JSON.stringify(cart));
  } catch (error) {
    console.error("No se pudo guardar el carrito en este navegador.", error);
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function getVisibleProducts() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase("es");
  const visibleProducts = products.filter((product) => {
    const matchesCategory = activeFilter === "todos" || product.category === activeFilter;
    const matchesSearch = `${product.name} ${product.categoryLabel} ${product.color}`.toLocaleLowerCase("es").includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (sortSelect.value === "name") return visibleProducts.sort((a, b) => a.name.localeCompare(b.name, "es"));
  return visibleProducts;
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${encodeURI(product.image)}" alt="${product.alt}" loading="lazy">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <button class="favorite-button" type="button" data-favorite="${product.id}" aria-label="Guardar ${product.name} en favoritos" aria-pressed="false">♡</button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.categoryLabel}</span>
        <div class="product-title-row"><h3 class="product-title">${product.name}</h3><span class="product-price">Consultar precio</span></div>
        <p class="product-color">${product.color}</p>
        ${product.variants?.length > 1 ? `<div class="variant-thumbnails" aria-label="Colores disponibles">${product.variants.map((variant, index) => `<button class="variant-thumb${index === 0 ? " is-selected" : ""}" type="button" data-variant="${product.id}" data-variant-index="${index}" aria-label="${variant.color}" aria-pressed="${index === 0}"><img src="${encodeURI(variant.image)}" alt=""></button>`).join("")}</div>` : ""}
        <button class="add-to-cart" type="button" data-add="${product.id}">Agregar al carrito <span aria-hidden="true">+</span></button>
      </div>
    </article>
  `).join("");
  emptyState.hidden = visibleProducts.length > 0;
}

function updateCart() {
  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = String(totalCount);
  cartItems.innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    if (!product) return "";
    return `
      <article class="cart-item">
        <img src="${encodeURI(product.image)}" alt="">
        <div>
          <h3>${product.name}</h3>
          <p>Precio por consultar · ${product.color}</p>
          <div class="quantity-control" aria-label="Cantidad de ${product.name}">
            <button type="button" data-quantity="${product.id}" data-change="-1" aria-label="Quitar uno">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-quantity="${product.id}" data-change="1" aria-label="Agregar uno">+</button>
          </div>
        </div>
        <span class="cart-item-price">Consultar</span>
      </article>
    `;
  }).join("");

  const isEmpty = cart.length === 0;
  cartEmpty.hidden = !isEmpty;
  cartSummary.hidden = isEmpty;
}

function setCartOpen(isOpen) {
  cartDrawer.classList.toggle("is-open", isOpen);
  cartDrawer.setAttribute("aria-hidden", String(!isOpen));
  cartBackdrop.hidden = !isOpen;
  document.body.classList.toggle("no-scroll", isOpen);
  if (isOpen) {
    window.requestAnimationFrame(() => cartBackdrop.classList.add("is-visible"));
    cartDrawer.querySelector(".close-cart").focus();
  } else {
    cartBackdrop.classList.remove("is-visible");
  }
}

productGrid.addEventListener("click", (event) => {
  const variantButton = event.target.closest("[data-variant]");
  const addButton = event.target.closest("[data-add]");
  const favoriteButton = event.target.closest("[data-favorite]");

  if (variantButton) {
    const product = products.find((item) => item.id === variantButton.dataset.variant);
    const variant = product?.variants[Number(variantButton.dataset.variantIndex)];
    if (!product || !variant) return;
    product.image = variant.image;
    product.color = variant.color;
    product.alt = variant.alt;
    const card = variantButton.closest(".product-card");
    card.querySelector(".product-image img").src = encodeURI(variant.image);
    card.querySelector(".product-image img").alt = variant.alt;
    card.querySelector(".product-color").textContent = variant.color;
    card.querySelectorAll("[data-variant]").forEach((button) => {
      const isSelected = button === variantButton;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });
  }

  if (addButton) {
    const product = products.find((item) => item.id === addButton.dataset.add);
    if (!product) return;
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) cartItem.quantity += 1;
    else cart.push({ id: product.id, quantity: 1 });
    saveCart();
    updateCart();
    showToast(`${product.name} se agregó a tu carrito`);
  }

  if (favoriteButton) {
    const isFavorite = favoriteButton.getAttribute("aria-pressed") !== "true";
    favoriteButton.setAttribute("aria-pressed", String(isFavorite));
    favoriteButton.classList.toggle("is-favorite", isFavorite);
    favoriteButton.textContent = isFavorite ? "♥" : "♡";
    showToast(isFavorite ? "Guardado en tus favoritos" : "Quitado de tus favoritos");
  }
});

cartItems.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  if (!quantityButton) return;
  const productId = quantityButton.dataset.quantity;
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity += Number(quantityButton.dataset.change);
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== productId);
  saveCart();
  updateCart();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);
document.querySelector(".cart-trigger").addEventListener("click", () => setCartOpen(true));
document.querySelector(".close-cart").addEventListener("click", () => setCartOpen(false));
document.querySelector(".continue-shopping").addEventListener("click", () => setCartOpen(false));
cartBackdrop.addEventListener("click", () => setCartOpen(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setCartOpen(false);
});

document.querySelector(".checkout-button").addEventListener("click", () => {
  if (cart.length === 0) return;
  const shoeList = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return product ? `- ${product.name} (${product.color}) · Cantidad: ${item.quantity}` : null;
  }).filter(Boolean).join("\n");
  const message = `${whatsappGreeting}\n${shoeList}\n${whatsappClosing}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  mainNav.classList.toggle("is-open", isOpen);
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

const searchBox = document.querySelector(".search-box");
searchInput.addEventListener("focus", () => searchBox.classList.add("is-open"));
searchInput.addEventListener("blur", () => {
  if (!searchInput.value) searchBox.classList.remove("is-open");
});

document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#form-message").textContent = "Gracias por tu interés. Esta demo todavía no envía suscripciones.";
  document.querySelector("#form-message").classList.add("is-success");
  event.currentTarget.reset();
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
renderProducts();
updateCart();
buildPhotoInventory();
