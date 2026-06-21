'use strict';

/* ===== DATA ===== */
const MENU_DATA = [
  /* --- Featured / Starter --- */
  { id:1,  name:'Paneer roll',       desc:'Panner cubes grilled, peppers & onions.',  price:79, rating:4.8, reviews:320, img:'assests/Paneer Kathi Roll.jpg', cat:'Starters', type:'veg',     badge:'Popular', popular:true,  vegan:false, gf:true  },
  { id:2,  name:'Egg Chat',      desc:'Boiled Egg With sprinkled pepper and salt.',   price:69, rating:4.7, reviews:285, img:'assests/egg chat.jpg', cat:'Starters', type:'non-veg', badge:'Bestseller', popular:true, vegan:false, gf:true  },
  { id:3,  name:'Egg Roll',   desc:'Golden-fried rolls stuffed with crunchy vegetables and Egg.',          price:79, rating:4.5, reviews:198, img:'assests/egg roll.jpg', cat:'Starters', type:'veg',     badge:'',        popular:false, vegan:false,  gf:false },
  { id:4,  name:'Veg Sandwich',desc:'Toasted bread with fresh vegetables and sauce',       price:69, rating:4.6, reviews:145, img:'assests/sandwich.jpg', cat:'Starters', type:'veg',     badge:'',        popular:false, vegan:false, gf:false },
  /* --- Salad --- */
  { id:5,  name:'Fruits Salad',  desc:'Fresh Apple, Orange, Watermelon Salad',          price:109, rating:4.7, reviews:210, img:'assests/fruits salad.jpg', cat:'salad',       type:'veg',     badge:'',        popular:false, vegan:true,  gf:true  },
  { id:6,  name:'Egg Salad', desc:'Boiled Egg Salad With Fresh Vegetables.',          price:69, rating:4.5, reviews:175, img:'assests/egg bowl.jpg', cat:'salad',       type:'non-veg', badge:'',        popular:false, vegan:false, gf:true  },
  { id:7,  name:'Corn Flakes',    desc:'Fresh Grained Corn with milk.',     price:99, rating:4.8, reviews:130, img:'assests/cornflakes.jpg', cat:'salad',       type:'veg',     badge:'Chef Pick',popular:true, vegan:false, gf:true  },
  /* --- Main Course --- */
  { id:8,  name:'Chicken Rice',     desc:'The iconic Indian classic tender chicken gravy.', price:99, rating:4.9, reviews:840, img:'assests/chicken rice.jpg', cat:'main',       type:'non-veg', badge:'Bestseller', popular:true, vegan:false, gf:true  },
  { id:9,  name:'Momos',desc:'Soft paneer cubes inside a momos. A vegetarian Dish.', price:79, rating:4.8, reviews:620, img:'assests/momos.jpg', cat:'main',       type:'veg',     badge:'Popular', popular:true, vegan:false, gf:true  },
  { id:10, name:'Omlette',        desc:'Double egg slow cooked fluffy omlette.',  price:59, rating:4.7, reviews:410, img:'assests/omlette.jpg', cat:'main',       type:'non-veg',     badge:'',        popular:false, vegan:false, gf:true  },
  { id:11, name:'Chicken Puffs',desc:'Puffs with loaded crispy fried Chickem.',             price:59, rating:4.9, reviews:380, img:'assests/chicken puffs.jpg', cat:'main',       type:'non-veg', badge:'Chef Pick', popular:true, vegan:false, gf:true },
  /* --- Biryani --- */
  { id:12, name:'Chicken Biryani',desc:'Fragrant basmati rice slow-cooked with tender fresh Chicken.', price:199, rating:5.0, reviews:1240, img:'assests/chicken biriyani.jpeg', cat:'biryani',    type:'non-veg', badge:'Bestseller', popular:true, vegan:false, gf:true },
  { id:13, name:'Veg Biryani',    desc:'Aromatic basmati rice cooked with garden vegetables and whole spices.',          price:149, rating:4.7, reviews:560, img:'assests/veg biriyani.jpeg', cat:'biryani',    type:'veg',     badge:'Popular', popular:true, vegan:false, gf:true  },
  { id:14, name:'Egg Biryani',      desc:'Biriyani with Egg.', price:149, rating:4.8, reviews:430, img:'assests/egg biriyani.jpeg', cat:'biryani',    type:'non-veg', badge:'',        popular:false, vegan:false, gf:true  },
  /* --- Pizza --- */
  { id:15, name:'Classic Pizza', desc:'Classic cheese loaded Pizza',   price:149, rating:4.6, reviews:390, img:'assests/chicken pizza.jpeg', cat:'pizza',       type:'veg',     badge:'',        popular:false, vegan:false, gf:false },
  { id:16, name:'BBQ Chicken Pizza',  desc:'Smoky BBQ sauce, grilled chicken, red onion.',             price:179, rating:4.8, reviews:580, img:'assests/bbq pizza.jpeg', cat:'pizza',       type:'non-veg', badge:'Popular', popular:true, vegan:false, gf:false },
  { id:17, name:'Veg Pizza', desc:'Veg Pizza, cherry tomatoes, vegetables and pine nuts.',           price:169, rating:4.7, reviews:270, img:'assests/veg pizza.jpeg', cat:'pizza',       type:'veg',     badge:'',        popular:false, vegan:false, gf:false },
  /* --- Burgers --- */
  { id:18, name:'Classic Smash chicken Burger',desc:'Double chicken smash patty, American cheese, lettuce and house sauce.', price:149, rating:4.8, reviews:480, img:'assests/chicken burger.jpg', cat:'burgers',     type:'non-veg', badge:'Popular', popular:true, vegan:false, gf:false },
  { id:19, name:'Crispy Chicken Burger',desc:'Southern-fried chicken with crispy flavoured Toppings.', price:149, rating:4.7, reviews:390, img:'assests/crispy chicken burger.jpeg', cat:'burgers',     type:'non-veg', badge:'',        popular:false, vegan:false, gf:false },
  { id:20, name:'Mushroom Burger',desc:'Mushroom Burger with double patty.',            price:129, rating:4.6, reviews:220, img:'assests/mushroom burger.jpeg', cat:'burgers',     type:'veg',     badge:'',        popular:false, vegan:false, gf:false },
  /* --- Pasta --- */
  { id:21, name:'Chicken Pasta',desc:'Chicken Pasta Silky eggs and freshly cracked black pepper.',       price:179, rating:4.7, reviews:340, img:'assests/chicken pasta.jpeg', cat:'pasta',       type:'non-veg', badge:'',        popular:false, vegan:false, gf:false },
  { id:22, name:'Creamy Pasta',   desc:'Spicy tomato sauce with garlic and fresh chilli with creamy pasta.',      price:199, rating:4.5, reviews:210, img:'assests/creamy pasta.jpeg', cat:'pasta',       type:'veg',     badge:'',        popular:false, vegan:true,  gf:false },
  /* --- Desserts --- */
  { id:23, name:'Gulab Jamun',        desc:'Tasty Gulab Jamun.',           price:69, rating:4.9, reviews:720, img:'assests/gulab jamun.jpeg', cat:'desserts',    type:'veg',     badge:'Bestseller', popular:true, vegan:false, gf:true },
  { id:24, name:'Chocolate Lava Cake',desc:'Warm dark-chocolate cake with a soft cake, served with vanilla ice cream.',    price:69, rating:4.9, reviews:610, img:'assests/cake.jpeg', cat:'desserts',    type:'veg',     badge:'Popular', popular:true, vegan:false, gf:false },
  { id:25, name:'Mango Kulfi',        desc:'Traditional Indian kulfi made with mangoes and condensed milk.',        price:99, rating:4.7, reviews:390, img:'assests/Kulfi.jpeg', cat:'desserts',    type:'veg',     badge:'',        popular:false, vegan:false, gf:true  },
  /* --- Drinks --- */
  { id:26, name:'Apple Juice',    desc:'Chilled Apple juice with a refreshing taste.',               price:79,  rating:4.6, reviews:280, img:'assests/apple juice.jpg', cat:'drinks',      type:'veg',     badge:'',        popular:false, vegan:true, gf:true   },
  { id:27, name:'Mango Juice',        desc:'Thick, refreshing blend of mango pulp.',            price:69, rating:4.8, reviews:450, img:'assests/Mango juice (1).jpg', cat:'drinks',      type:'veg',     badge:'Popular', popular:true, vegan:false, gf:true  },
  { id:28, name:'Filter Coffee',      desc:'South Indian coffee served with milk in a traditional way.',price:49, rating:4.9, reviews:820, img:'assests/filter cofee.jpeg', cat:'drinks',      type:'veg',     badge:'',        popular:false, vegan:false, gf:true  },
];

/* ===== REVIEWS DATA ===== */
const REVIEWS_DATA = [
  { name:'Priya Krishnan',   img:'https://i.pravatar.cc/60?img=1',  rating:5, text:'Amazing food! The Chicken Biryani was absolutely divine. Quick delivery and hot food. Will definitely order again!', date:'12 June 2026', verified:true },
  { name:'Arjun Mehta',      img:'https://i.pravatar.cc/60?img=3',  rating:5, text:'Best burger I have had in Chennai. The Classic Smash Burger was perfectly cooked. Fries were crispy too!', date:'10 June 2026', verified:true },
  { name:'Sneha Rajan',      img:'https://i.pravatar.cc/60?img=5',  rating:4, text:'Great variety on the menu. Loved the Paneer Roll and Mango Juice combo. Portions are generous for the price.', date:'8 June 2026', verified:true },
  { name:'Karthik Suresh',   img:'https://i.pravatar.cc/60?img=7',  rating:5, text:'Ordered for a family gathering. Everything arrived on time and was delicious. The Gulab Jamun was heavenly!', date:'5 June 2026', verified:false },
  { name:'Divya Nair',       img:'https://i.pravatar.cc/60?img=9',  rating:4, text:'Healthy salad options and fresh juices. Love that they have vegan choices. Food Corner is my go-to now.', date:'3 June 2026', verified:true },
  { name:'Rahul Bose',       img:'https://i.pravatar.cc/60?img=11', rating:5, text:'The Chocolate Lava Cake deserves its own award. Warm, gooey and perfectly paired with ice cream. Perfection!', date:'1 June 2026', verified:true },
];

/* ===== SIMPLE IN-MEMORY USER STORE ===== */
function getUsers() {
  return JSON.parse(localStorage.getItem('ss_users') || '[]');
}
function saveUsers(users) {
  localStorage.setItem('ss_users', JSON.stringify(users));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('ss_current_user') || 'null');
}
function saveCurrentUser(user) {
  localStorage.setItem('ss_current_user', JSON.stringify(user));
}

/* ===== AUTH: SIGN IN ===== */
function handleLogin() {
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl    = document.getElementById('loginError');

  errEl.style.display = 'none';

  if (!email || !password) {
    errEl.textContent = 'Please enter both email and password.';
    errEl.style.display = 'block';
    return;
  }

  const users = getUsers();
  const user  = users.find(u => u.email === email && u.password === password);

  if (!user) {
    errEl.textContent = 'Invalid email or password. Please try again.';
    errEl.style.display = 'block';
    return;
  }

  saveCurrentUser(user);
  closeModal('authModal');
  updateAuthUI(user);
  showToast(`Welcome back, ${user.name}! 🎉`);
}

/* ===== AUTH: SIGN UP ===== */
function handleSignup() {
  const name     = document.getElementById('signupName').value.trim();
  const email    = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const errEl    = document.getElementById('signupError');

  errEl.style.display = 'none';

  if (!name || !email || !password) {
    errEl.textContent = 'Please fill in all fields.';
    errEl.style.display = 'block';
    return;
  }
  if (password.length < 6) {
    errEl.textContent = 'Password must be at least 6 characters.';
    errEl.style.display = 'block';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.textContent = 'Please enter a valid email address.';
    errEl.style.display = 'block';
    return;
  }

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    errEl.textContent = 'An account with this email already exists. Please sign in.';
    errEl.style.display = 'block';
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  saveUsers(users);
  saveCurrentUser(newUser);
  closeModal('authModal');
  updateAuthUI(newUser);
  showToast(`Account created! Welcome, ${name}! 🎉`);
}

/* ===== UPDATE NAVBAR AFTER AUTH ===== */
function updateAuthUI(user) {
  const btn = document.querySelector('.nav-actions .btn-primary[onclick*="authModal"]');
  if (!btn) return;
  if (user) {
    btn.textContent = user.name.split(' ')[0];
    btn.onclick = () => openModal('dashModal');
  } else {
    btn.textContent = 'Sign In';
    btn.onclick = () => openModal('authModal');
  }
}

/* ===== RESTORE SESSION ON LOAD ===== */
function restoreSession() {
  const user = getCurrentUser();
  if (user) updateAuthUI(user);
}

/* ===== COPY PROMO CODE ===== */
function copyCode(code, btn) {
  navigator.clipboard.writeText(code).then(() => {
    const original = btn.innerHTML;
    btn.innerHTML = '✓ Copied';
    btn.style.color = 'var(--primary, #F97316)';
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.color = '';
    }, 2000);
  }).catch(() => {
    showToast(`Code: ${code} — copy it manually!`);
  });
}

/* ===== ADJUST PRICE STEPPER ===== */
function adjustPrice(delta) {
  const range = document.getElementById('priceRange');
  const val   = document.getElementById('priceVal');
  if (!range) return;
  let newVal = Math.min(500, Math.max(50, parseInt(range.value) + delta));
  range.value = newVal;
  maxPrice    = newVal;
  val.textContent = `₹${newVal}`;
  renderMenuItems();
}

/* ===== STATE ===== */
let cart = JSON.parse(localStorage.getItem('ss_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ss_wishlist') || '[]');
let activeMenuCat = 'Starters';
let activeMenuFilter = 'all';
let maxPrice = 500;
let reviewPage = 0;
const REVIEWS_PER_PAGE = 3;

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  restoreSession();
  renderFeatured();
  renderMenuItems();
  renderReviews();
  setupScrollEffects();
  setupNavScroll();
  setupSearch();
  setupPriceRange();
  setupGallery();
  setupMenuCatTabs();
  setupFilterTabs();
  setupReviewNav();
  setupDashTabs();
  updateCartUI();
  setMinDate();
  setTimeout(() => revealOnScroll(), 100);
});

/* ===== THEME ===== */
function initTheme() {
  const saved = localStorage.getItem('ss_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}
document.getElementById('themeToggle').addEventListener('click', () => {
  const curr = document.documentElement.getAttribute('data-theme');
  const next = curr === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('ss_theme', next);
});

/* ===== NAVBAR ===== */
function setupNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    const sections = ['home','categories','menu','full-menu','about','gallery','reservation','contact'];
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
    const btt = document.getElementById('backToTop');
    if (btt) btt.classList.toggle('visible', window.scrollY > 400);
  });
}

document.getElementById('hamburger').addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* ===== SEARCH ===== */
function setupSearch() {
  const toggle   = document.getElementById('searchToggle');
  const wrap     = toggle.closest('.search-wrap');
  const input    = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');

  toggle.addEventListener('click', () => {
    wrap.classList.toggle('open');
    if (wrap.classList.contains('open')) { setTimeout(() => input.focus(), 300); }
    else { dropdown.classList.remove('open'); input.value = ''; }
  });

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { dropdown.classList.remove('open'); return; }
    const results = MENU_DATA.filter(d =>
      d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q)
    ).slice(0, 6);
    if (!results.length) {
      dropdown.innerHTML = '<div class="search-item">No results found</div>';
      dropdown.classList.add('open');
      return;
    }
    dropdown.innerHTML = results.map(r => `
      <div class="search-item" onclick="scrollToItem(${r.id})">
        <img src="${r.img}" alt="${r.name}" style="width:36px;height:36px;object-fit:cover;border-radius:6px;flex-shrink:0" />
        <div>
          <div style="font-weight:600;font-size:0.85rem">${r.name}</div>
          <div style="color:var(--primary);font-size:0.8rem;font-weight:700">₹${r.price}</div>
        </div>
      </div>`).join('');
    dropdown.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) {
      wrap.classList.remove('open');
      dropdown.classList.remove('open');
    }
  });
}

function scrollToItem(id) {
  document.getElementById('full-menu').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('searchDropdown').classList.remove('open');
  document.querySelector('.search-wrap').classList.remove('open');
  setTimeout(() => {
    const item = MENU_DATA.find(d => d.id === id);
    if (item) {
      activateMenuTab(item.cat);
      renderMenuItems();
    }
  }, 600);
}

/* ===== CART ===== */
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('cartToggle').addEventListener('click', openCart);

function addToCart(id) {
  const item = MENU_DATA.find(d => d.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...item, qty: 1 }); }
  saveCart();
  updateCartUI();
  showToast(`${item.name} added to cart!`);
  const badge = document.getElementById('cartBadge');
  badge.style.transform = 'scale(1.4)';
  setTimeout(() => badge.style.transform = '', 300);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); }
}

function saveCart() { localStorage.setItem('ss_cart', JSON.stringify(cart)); }

function updateCartUI() {
  const totalQty = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartBadge').textContent = totalQty;

  const container = document.getElementById('cartItems');
  const footer    = document.getElementById('cartFooter');

  if (!cart.length) {
    container.innerHTML = `<div class="cart-empty">
      <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      <p>Your cart is empty</p><span>Add some delicious items!</span>
    </div>`;
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(c => `
    <div class="cart-item">
      <img src="${c.img}" alt="${c.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-price">₹${c.price}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${c.id},-1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${c.id},1)">+</button>
          <button class="cart-remove" onclick="removeFromCart(${c.id})">Remove</button>
        </div>
      </div>
      <div style="font-weight:700;color:var(--primary);white-space:nowrap">₹${c.price * c.qty}</div>
    </div>`).join('');

  footer.style.display = 'block';
  updateCartTotals();
  renderCheckoutItems();
}

let promoApplied = 0;
function updateCartTotals() {
  const sub      = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const delivery = sub >= 499 ? 0 : 49;
  const tax      = Math.round(sub * 0.05);
  const total    = sub + delivery + tax - promoApplied;
  document.getElementById('cartSubtotal').textContent = `₹${sub}`;
  document.getElementById('cartDelivery').textContent = delivery === 0 ? 'Free' : `₹${delivery}`;
  document.getElementById('cartTax').textContent      = `₹${tax}`;
  document.getElementById('cartTotal').textContent    = `₹${total}`;
}

function applyPromo() {
  const code  = document.getElementById('promoInput').value.trim().toUpperCase();
  const codes = { 'FIRST50':50, 'BURGER50':80, 'COMBO399':60, 'COOKIE4':40 };
  if (codes[code]) {
    promoApplied = codes[code];
    document.getElementById('promoRow').style.display       = 'flex';
    document.getElementById('promoDiscount').textContent    = `-₹${promoApplied}`;
    updateCartTotals();
    showToast(`Promo applied! You saved ₹${promoApplied} 🎉`);
  } else {
    showToast('Invalid promo code. Try FIRST50 or BURGER50.');
  }
}

function renderCheckoutItems() {
  const el = document.getElementById('checkoutItems');
  if (!el) return;
  el.innerHTML = cart.map(c => `
    <div style="display:flex;justify-content:space-between;font-size:0.875rem;padding:6px 0;border-bottom:1px solid var(--border)">
      <span>${c.name} × ${c.qty}</span>
      <span style="font-weight:600">₹${c.price * c.qty}</span>
    </div>`).join('');
  const bd = document.getElementById('checkoutBreakdown');
  if (bd) {
    const sub      = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const delivery = sub >= 499 ? 0 : 49;
    const tax      = Math.round(sub * 0.05);
    const total    = sub + delivery + tax - promoApplied;
    bd.innerHTML = `
      <div class="breakdown-row"><span>Subtotal</span><span>₹${sub}</span></div>
      <div class="breakdown-row"><span>Delivery</span><span>${delivery === 0 ? 'Free' : '₹' + delivery}</span></div>
      <div class="breakdown-row"><span>Tax (5%)</span><span>₹${tax}</span></div>
      <div class="breakdown-row total-row"><span>Total</span><span>₹${total}</span></div>`;
  }
}

/* ===== WISHLIST ===== */
function toggleWishlist(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) { wishlist.push(id); btn.classList.add('active'); showToast('Added to wishlist ♡'); }
  else { wishlist.splice(idx, 1); btn.classList.remove('active'); showToast('Removed from wishlist'); }
  localStorage.setItem('ss_wishlist', JSON.stringify(wishlist));
}

/* ===== RENDER FEATURED ===== */
function renderFeatured() {
  const featured = MENU_DATA.filter(d => d.popular).slice(0, 8);
  document.getElementById('featuredGrid').innerHTML = featured.map(foodCard).join('');
}

/* ===== FOOD CARD ===== */
function foodCard(item) {
  const isFav = wishlist.includes(item.id);
  return `
    <div class="food-card reveal">
      <div class="food-img-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        ${item.badge ? `<div class="food-badge ${item.badge === 'Bestseller' ? 'bestseller' : ''}">${item.badge}</div>` : ''}
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleWishlist(${item.id}, this)" aria-label="Add to wishlist">♡</button>
      </div>
      <div class="food-body">
        <div class="food-meta">
          <span class="food-cat-tag">${item.cat}</span>
          <span class="food-type ${item.type}" title="${item.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
        </div>
        <h4 class="food-name">${item.name}</h4>
        <p class="food-desc">${item.desc}</p>
        <div class="food-footer">
          <span class="food-price">₹${item.price}</span>
          <span class="food-rating"><span class="star">★</span> ${item.rating} (${item.reviews})</span>
          <button class="add-btn" onclick="addToCart(${item.id})">+ Add</button>
        </div>
      </div>
    </div>`;
}

/* ===== MENU CATEGORY TABS ===== */
function setupMenuCatTabs() {
  document.querySelectorAll('.menu-cat-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      activateMenuTab(this.dataset.cat);
      renderMenuItems();
    });
  });
}
function activateMenuTab(cat) {
  activeMenuCat = cat;
  document.querySelectorAll('.menu-cat-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
}

function setupFilterTags() {
  document.querySelectorAll('.filter-tag').forEach(tag => {
    tag.addEventListener('click', function() {
      document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      activeMenuFilter = this.dataset.filter;
      renderMenuItems();
    });
  });
}

// Backwards-compatible alias
function setupFilterTabs() { return setupFilterTags(); }

function setupPriceRange() {
  const range = document.getElementById('priceRange');
  const val   = document.getElementById('priceVal');
  range.addEventListener('input', function() {
    maxPrice = parseInt(this.value);
    val.textContent = `₹${maxPrice}`;
    renderMenuItems();
  });
}

function renderMenuItems() {
  let items;
  if (activeMenuFilter && activeMenuFilter !== 'all') {
    items = MENU_DATA.slice();
  } else {
    items = MENU_DATA.filter(d => d.cat === activeMenuCat);
  }

  if (activeMenuFilter === 'veg')              items = items.filter(d => d.type === 'veg');
  else if (activeMenuFilter === 'non-veg')     items = items.filter(d => d.type === 'non-veg');
  else if (activeMenuFilter === 'vegan')       items = items.filter(d => d.vegan);
  else if (activeMenuFilter === 'gluten-free') items = items.filter(d => d.gf);
  else if (activeMenuFilter === 'popular')     items = items.filter(d => d.popular);

  if (!activeMenuFilter || activeMenuFilter === 'all') {
    items = items.filter(d => d.cat === activeMenuCat);
  }

  items = items.filter(d => d.price <= maxPrice);

  const sort = document.getElementById('sortSelect') ? document.getElementById('sortSelect').value : 'default';
  if (sort === 'low-high')      items = [...items].sort((a,b) => a.price - b.price);
  else if (sort === 'high-low') items = [...items].sort((a,b) => b.price - a.price);
  else if (sort === 'rating')   items = [...items].sort((a,b) => b.rating - a.rating);

  const grid = document.getElementById('menuItemsGrid');
  if (!items.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-3)">No items match your filters. Try adjusting them!</div>`;
    return;
  }
  grid.innerHTML = items.map(foodCard).join('');
  setTimeout(() => revealOnScroll(), 50);
}

// Hook up sort select
document.addEventListener('DOMContentLoaded', () => {
  const sortSel = document.getElementById('sortSelect');
  if (sortSel) sortSel.addEventListener('change', renderMenuItems);
});

/* ===== CATEGORY QUICK-FILTER ===== */
function filterByCategory(cat) {
  document.getElementById('full-menu').scrollIntoView({ behavior: 'smooth' });
  const catMap = {
    'Egg bowl':   'salad',
    'Burger':     'burgers',
    'Fried Rice': 'main',
    'Puffs':      'main',
    'Chinese':    'main',
    'Juice':      'drinks',
    'MilkShake':  'drinks',
    'Salad':      'salad',
    'Pizza':      'pizza',
    'Biryani':    'biryani',
    'Desserts':   'desserts',
  };
  const target = catMap[cat] || 'Starters';
  setTimeout(() => { activateMenuTab(target); renderMenuItems(); }, 500);
}

/* ===== REVIEWS ===== */
function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  const start = reviewPage * REVIEWS_PER_PAGE;
  const slice = REVIEWS_DATA.slice(start, start + REVIEWS_PER_PAGE);
  grid.innerHTML = slice.map(r => `
    <div class="review-card reveal">
      <div class="review-header">
        <img src="${r.img}" alt="${r.name}" class="review-avatar" />
        <div>
          <div class="review-name">${r.name}</div>
          ${r.verified ? '<div class="review-verified">✓ Verified Customer</div>' : ''}
        </div>
        <div class="review-stars" style="margin-left:auto">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
      </div>
      <p class="review-text">${r.text}</p>
      <div class="review-date">${r.date}</div>
    </div>`).join('');
  renderRevDots();
  setTimeout(() => revealOnScroll(), 50);
}

function renderRevDots() {
  const dotsEl = document.getElementById('revDots');
  if (!dotsEl) return;
  const pages = Math.ceil(REVIEWS_DATA.length / REVIEWS_PER_PAGE);
  dotsEl.innerHTML = Array.from({length: pages}, (_, i) =>
    `<div class="rev-dot ${i === reviewPage ? 'active' : ''}" onclick="goToRevPage(${i})"></div>`
  ).join('');
}

function setupReviewNav() {
  const prev = document.getElementById('revPrev');
  const next = document.getElementById('revNext');
  if (prev) prev.addEventListener('click', () => {
    const pages = Math.ceil(REVIEWS_DATA.length / REVIEWS_PER_PAGE);
    reviewPage = (reviewPage - 1 + pages) % pages;
    renderReviews();
  });
  if (next) next.addEventListener('click', () => {
    const pages = Math.ceil(REVIEWS_DATA.length / REVIEWS_PER_PAGE);
    reviewPage = (reviewPage + 1) % pages;
    renderReviews();
  });
}

function goToRevPage(page) { reviewPage = page; renderReviews(); }

/* ===== GALLERY ===== */
function setupGallery() {
  document.querySelectorAll('.gallery-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.gtab;
      document.querySelectorAll('.gal-item').forEach(item => {
        const match = filter === 'all' || item.dataset.gtag === filter;
        item.style.opacity       = match ? '1' : '0.2';
        item.style.pointerEvents = match ? 'all' : 'none';
      });
    });
  });
  // Lightbox
  document.querySelectorAll('.gal-item img').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('lightboxImg').src = img.src;
      document.getElementById('lightbox').classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== MODALS ===== */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
  if (id === 'checkoutModal') renderCheckoutItems();
  if (id === 'dashModal') {
    setTimeout(() => {
      const tabs = Array.from(document.querySelectorAll('.dash-tab'));
      if (!tabs.length) return;
      tabs.forEach(t => t.classList.remove('active'));
      const prof = tabs.find(t => t.textContent.trim().toLowerCase().startsWith('profile')) || tabs[0];
      prof.classList.add('active');
      renderDashProfile();
    }, 40);
  }
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOnBg(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

function switchAuth(type, btn) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('loginForm').style.display  = type === 'login'  ? 'block' : 'none';
  document.getElementById('signupForm').style.display = type === 'signup' ? 'block' : 'none';
  ['loginError','signupError'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.display = 'none'; el.textContent = ''; }
  });
}

/* ===== DASHBOARD TABS ===== */
function setupDashTabs() {
  const tabs = Array.from(document.querySelectorAll('.dash-tab'));
  const content = document.querySelector('.dash-content');
  if (!tabs.length || !content) return;

  const renderers = {
    'Profile':     renderDashProfile,
    'Orders':      renderDashOrders,
    'Favourites':  renderDashFavourites,
    'Addresses':   renderDashAddresses,
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const key = this.textContent.trim();
      const fn = renderers[key];
      if (fn) fn();
    });
  });

  const initial = tabs.find(t => t.classList.contains('active')) || tabs[0];
  if (initial) initial.click();
}

/* ===== DASHBOARD: PROFILE ===== */
function renderDashProfile() {
  const content = document.querySelector('.dash-content');
  const user = getCurrentUser() || {};

  content.innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label>Name</label>
        <input id="dashName" type="text" value="${escapeHtml(user.name || '')}" placeholder="Enter your name">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input id="dashEmail" type="email" value="${escapeHtml(user.email || '')}" placeholder="Enter your email">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>Gender</label>
        <select id="dashGender">
          <option value="">Select</option>
          <option value="Male"   ${user.gender === 'Male'   ? 'selected' : ''}>Male</option>
          <option value="Female" ${user.gender === 'Female' ? 'selected' : ''}>Female</option>
          <option value="Other"  ${user.gender === 'Other'  ? 'selected' : ''}>Other</option>
        </select>
      </div>
      <div class="form-group">
        <label>Place</label>
        <input id="dashPlace" type="text" value="${escapeHtml(user.place || '')}" placeholder="Enter your place">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>City</label>
        <input id="dashCity" type="text" value="${escapeHtml(user.city || '')}" placeholder="Enter your city">
      </div>
    </div>

    <button class="btn-primary" id="dashSave">Save Profile</button>
  `;

  document.getElementById('dashSave').onclick = () => {
    const name  = document.getElementById('dashName').value.trim();
    const email = document.getElementById('dashEmail').value.trim();

    if (!name || !email) {
      showToast('Name and email are required.');
      return;
    }

    const updatedUser = {
      ...user,
      name,
      email,
      gender: document.getElementById('dashGender').value,
      place:  document.getElementById('dashPlace').value.trim(),
      city:   document.getElementById('dashCity').value.trim(),
    };

    // Update in users array so login still works
    const users = getUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx !== -1) users[idx] = { ...users[idx], ...updatedUser };
    else users.push(updatedUser);
    saveUsers(users);

    saveCurrentUser(updatedUser);
    updateAuthUI(updatedUser);
    showToast('Profile saved successfully! ✅');
  };
}

/* ===== DASHBOARD: ORDERS ===== */
function renderDashOrders() {
  const content = document.querySelector('.dash-content');
  const orders = JSON.parse(localStorage.getItem('ss_orders') || '[]');
  if (!orders.length) {
    content.innerHTML = `<p>No orders yet. Your past orders will appear here.</p>`;
    return;
  }
  content.innerHTML = `<div class="orders-list">${orders.map(o => `
    <div class="order-row">
      <div>${escapeHtml(o.date || 'Unknown')}</div>
      <div>${escapeHtml(o.items || '')}</div>
      <div>₹${o.total || 0}</div>
    </div>`).join('')}</div>`;
}

/* ===== DASHBOARD: FAVOURITES ===== */
function renderDashFavourites() {
  const content = document.querySelector('.dash-content');
  const favs = JSON.parse(localStorage.getItem('ss_wishlist') || '[]');
  if (!favs.length) { content.innerHTML = '<p>You have no favourites yet.</p>'; return; }
  const items = favs.map(id => MENU_DATA.find(m => m.id === id)).filter(Boolean);
  content.innerHTML = `<div class="fav-grid">${items.map(i => `
    <div class="fav-item">
      <img src="${i.img}" alt="">
      <div>
        <strong>${escapeHtml(i.name)}</strong>
        <div>₹${i.price}</div>
        <button class="btn-sm remove-fav" data-id="${i.id}">Remove</button>
      </div>
    </div>`).join('')}</div>`;
  content.querySelectorAll('.remove-fav').forEach(btn => btn.addEventListener('click', () => {
    const id = parseInt(btn.dataset.id);
    toggleWishlist(id, btn);
    renderDashFavourites();
    updateCartUI();
  }));
}

/* ===== DASHBOARD: ADDRESSES ===== */
function renderDashAddresses() {
  const content = document.querySelector('.dash-content');
  const addrs = JSON.parse(localStorage.getItem('ss_addresses') || '[]');
  content.innerHTML = `
    <div class="addresses-list">${addrs.map(a => `
      <div class="addr-row">
        <div class="addr-main">${escapeHtml(a.address)}</div>
        <div class="addr-meta">${escapeHtml(a.place || '')} ${a.landmark ? '- ' + escapeHtml(a.landmark) : ''} ${a.phone ? '<br/>Phone: ' + escapeHtml(a.phone) : ''}</div>
      </div>`).join('') || '<p>No saved addresses.</p>'}
    </div>
    <div style="margin-top:12px">
      <div class="form-group"><label>Address</label><textarea id="newAddr_address" rows="2" placeholder="Street address"></textarea></div>
      <div class="form-row">
        <div class="form-group"><label>Place</label><input id="newAddr_place" type="text" placeholder="Place/Locality" /></div>
        <div class="form-group"><label>Landmark</label><input id="newAddr_landmark" type="text" placeholder="Landmark (optional)" /></div>
      </div>
      <div class="form-group"><label>Phone</label><input id="newAddr_phone" type="tel" placeholder="Phone number" /></div>
      <button id="saveAddr" class="btn-primary btn-sm">Save Address</button>
    </div>
  `;
  document.getElementById('saveAddr').addEventListener('click', () => {
    const address  = document.getElementById('newAddr_address').value.trim();
    const place    = document.getElementById('newAddr_place').value.trim();
    const landmark = document.getElementById('newAddr_landmark').value.trim();
    const phone    = document.getElementById('newAddr_phone').value.trim();
    if (!address) { showToast('Enter an address'); return; }
    const arr = JSON.parse(localStorage.getItem('ss_addresses') || '[]');
    arr.push({ address, place, landmark, phone });
    localStorage.setItem('ss_addresses', JSON.stringify(arr));
    showToast('Address saved');
    renderDashAddresses();
  });
}

/* ===== UTILITY ===== */
function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]);
}

/* ===== FORMS ===== */
function submitReservation(e) {
  e.preventDefault();
  showToast('Table reserved! Confirmation sent to your phone. 🎉');
  e.target.reset();
}

function submitContact(e) {
  e.preventDefault();
  showToast("Message sent! We'll get back to you within 24 hours.");
  e.target.reset();
}

function placeOrder() {
  cart = [];
  promoApplied = 0;
  saveCart();
  updateCartUI();
  closeModal('checkoutModal');
  closeCart();
  showToast('Order placed! Estimated delivery: 30–45 min. 🛵');
}

function setMinDate() {
  const input = document.getElementById('resDate');
  if (input) {
    input.setAttribute('min', new Date().toISOString().split('T')[0]);
  }
}

/* ===== TOAST ===== */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ===== SCROLL REVEAL ===== */
function revealOnScroll() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

function setupScrollEffects() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.cat-card, .offer-card, .delivery-card, .contact-card, .about-stat').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/* ===== KEYBOARD ESC ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['authModal','checkoutModal','dashModal'].forEach(closeModal);
    closeLightbox();
    closeCart();
  }
});

/* ===== PASSIVE SCROLL REVEAL ===== */
window.addEventListener('scroll', () => { revealOnScroll(); }, { passive: true });

/* ===== PAYMENT METHOD TOGGLE ===== */
document.querySelectorAll('.pay-opt input').forEach(radio => {
  radio.addEventListener('change', function() {
    const cardFields = document.querySelector('.card-fields');
    if (cardFields) cardFields.style.display = this.value === 'card' ? 'flex' : 'none';
  });
});

function scrollPromo(direction) {
  const el = document.getElementById('promoScroll');
  const scrollAmount = el.offsetWidth * 0.8;
  el.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

/* ===== PROMO CAROUSEL ===== */
(function () {
  const track    = document.getElementById('promoTrack');
  const outer    = document.getElementById('promoTrackOuter');
  const leftBtn  = document.getElementById('promoLeft');
  const rightBtn = document.getElementById('promoRight');
  const dotsEl   = document.getElementById('promoDots');

  if (!track || !outer || !leftBtn || !rightBtn || !dotsEl) return;

  const items   = track.querySelectorAll('.promo-item');
  let current   = 0;
  let autoTimer = null;

  /* --- cards visible at once --- */
  function getVisible() {
    const w = outer.offsetWidth;
    if (w < 580) return 1;
    if (w < 900) return 2;
    return 3;
  }

  /* --- total pages --- */
  function totalPages() {
    return Math.ceil(items.length / getVisible());
  }

  /* --- set each item width to exactly 1/visible of the outer width --- */
  function sizeItems() {
    const visible  = getVisible();
    const itemPct  = 100 / visible;
    items.forEach(item => {
      item.style.width = itemPct + '%';
    });
  }

  /* --- build dot buttons --- */
  function buildDots() {
    dotsEl.innerHTML = '';
    for (let i = 0; i < totalPages(); i++) {
      const btn = document.createElement('button');
      btn.className = 'promo-dot' + (i === current ? ' active' : '');
      btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      btn.addEventListener('click', () => { goTo(i); resetAuto(); });
      dotsEl.appendChild(btn);
    }
  }

  /* --- update active dot --- */
  function updateDots() {
    dotsEl.querySelectorAll('.promo-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  /* --- slide to page idx --- */
  function goTo(idx) {
    const pages  = totalPages();
    current      = Math.max(0, Math.min(idx, pages - 1));

    const visible   = getVisible();
    /* each item is exactly (100/visible)% of outer width
       so moving 1 page = visible items = 100% of outer width */
    const offsetPct = current * 100;

    track.style.transform = `translateX(-${offsetPct}%)`;

    leftBtn.disabled  = current === 0;
    rightBtn.disabled = current >= pages - 1;

    updateDots();
  }

  /* --- arrows --- */
  leftBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  rightBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  /* --- auto-play --- */
  function startAuto() {
    autoTimer = setInterval(() => {
      goTo(current + 1 >= totalPages() ? 0 : current + 1);
    }, 4000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  /* --- pause on hover --- */
  outer.addEventListener('mouseenter', () => clearInterval(autoTimer));
  outer.addEventListener('mouseleave', () => startAuto());

  /* --- touch swipe --- */
  let touchStartX = 0;
  let touchStartY = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      goTo(current + (dx < 0 ? 1 : -1));
      resetAuto();
    }
  }, { passive: true });

  /* --- keyboard --- */
  document.addEventListener('keydown', e => {
    const rect = outer.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === 'ArrowLeft')  { goTo(current - 1); resetAuto(); }
      if (e.key === 'ArrowRight') { goTo(current + 1); resetAuto(); }
    }
  });

  /* --- resize rebuild --- */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      sizeItems();
      buildDots();
      goTo(0);
    }, 200);
  });

  /* --- init --- */
  sizeItems();
  buildDots();
  goTo(0);
  startAuto();

})();



const backTopBtn = document.getElementById("backTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
});

backTopBtn.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

  
