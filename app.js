// Al-Habib Haute Parfumerie Store Logic

const PRODUCTS = [
  {
    id: 'oud-al-habib',
    name: 'Oud Al-Habib',
    category: 'oud',
    badge: 'Signature Blend',
    description: 'Our crown jewel. Rare 25-year aged Cambodian and Hindi agarwood infused with rich amber, Kashmiri saffron, and vintage Taif rose.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_Oud_Al_Habib_6ml_Website_700x700-420x420.jpg',
    basePrice: 1500,
    originalPrice: 1950,
    selectedSize: '6ml',
    sizes: {
      '3ml': 850,
      '6ml': 1500,
      '12ml': 2800
    },
    notes: {
      top: 'Kashmiri Saffron, Bergamot',
      heart: 'Taif Rose, Amber Resin',
      base: 'Aged Cambodian Agarwood, Royal Musk'
    },
    tags: ['Pure Oud', 'Long Lasting 18h+', 'Alcohol Free'],
    longevity: '18+ Hours',
    sillage: 'Enormous'
  },
  {
    id: 'oud-maracuja',
    name: 'Oud Maracuja',
    category: 'oud',
    badge: 'Trending',
    description: 'An electrifying modern fusion of tart tropical passionfruit with smoldering leather and deep Indonesian oud wood.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_Oud_Maracuja_6ml_Website_700x700-420x420.jpg',
    basePrice: 900,
    originalPrice: 1200,
    selectedSize: '6ml',
    sizes: {
      '3ml': 500,
      '6ml': 900,
      '12ml': 1650
    },
    notes: {
      top: 'Passionfruit, Cassis, Peach',
      heart: 'Turkish Rose, Leather Accord',
      base: 'Indonesian Oud, Vanilla, Benzoin'
    },
    tags: ['Fruity Oud', 'Modern Twist', 'Compliment Getter'],
    longevity: '14+ Hours',
    sillage: 'Heavy'
  },
  {
    id: 'rose-gulab',
    name: 'Rose (Gulab)',
    category: 'floral',
    badge: 'Bestseller',
    description: 'Freshly harvested morning roses hydro-distilled in traditional copper degs. A crisp, natural, romantic bouquet that calms the senses.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_Rose_Gulab_6ml_Website_700x700-420x420.jpg',
    basePrice: 900,
    originalPrice: 1100,
    selectedSize: '6ml',
    sizes: {
      '3ml': 500,
      '6ml': 900,
      '12ml': 1650
    },
    notes: {
      top: 'Green Dew, Crisp Petals',
      heart: 'Damask Rose, Pink Peony',
      base: 'White Musk, Warm Sandalwood'
    },
    tags: ['Pure Floral', 'Hydro-Distilled', 'Traditional'],
    longevity: '12+ Hours',
    sillage: 'Intimate to Moderate'
  },
  {
    id: 'white-oud',
    name: 'White Oud',
    category: 'oud',
    badge: 'Customer Favorite',
    description: 'Subtle, powdery, and pristine. White Oud blends crystalline musk with clean blonde woods and soft floral spices.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_White_Oud_6ml_Website_700x700-420x420.jpg',
    basePrice: 700,
    originalPrice: 950,
    selectedSize: '6ml',
    sizes: {
      '3ml': 400,
      '6ml': 700,
      '12ml': 1300
    },
    notes: {
      top: 'White Jasmine, Sweet Mandarin',
      heart: 'Powdery Amber, Cardamom',
      base: 'White Agarwood, Silk Musk'
    },
    tags: ['Clean Scent', 'Office Safe', 'Unisex'],
    longevity: '10+ Hours',
    sillage: 'Moderate'
  },
  {
    id: 'kausar',
    name: 'Kausar',
    category: 'royal',
    badge: 'Prestige Edition',
    description: 'Named after the celestial river, Kausar is an ethereal masterpiece of rare ambergris, saffron, Mysore sandalwood, and velvety florals.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_Kausar_6ml_Website_700x700_Optimized-420x420.jpg',
    basePrice: 1900,
    originalPrice: 2400,
    selectedSize: '6ml',
    sizes: {
      '3ml': 1050,
      '6ml': 1900,
      '12ml': 3500
    },
    notes: {
      top: 'Golden Amber, Neroli',
      heart: 'Mysore Sandalwood, Rare Rose',
      base: 'Celestial Ambergris, Deer Musk Accord'
    },
    tags: ['Royal Blend', 'Ultra Concentrated', 'Artisanal'],
    longevity: '24+ Hours',
    sillage: 'Legendary'
  },
  {
    id: 'mitti-punjab-di',
    name: 'Mitti Punjab Di',
    category: 'earthy',
    badge: 'Artisanal Clay',
    description: 'The intoxicating fragrance of the first monsoon rain hitting parched baked soil (Petrichor). Distilled into pure Indian sandalwood base.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_Mitti_Punjab_Di_6ml_Website_700x700-420x420.jpg',
    basePrice: 1500,
    originalPrice: 1850,
    selectedSize: '6ml',
    sizes: {
      '3ml': 800,
      '6ml': 1500,
      '12ml': 2800
    },
    notes: {
      top: 'Crisp Rainwater, Baked Clay',
      heart: 'Sun-warmed Earth, Petrichor',
      base: 'Hydro-distilled Sandalwood (Chandan)'
    },
    tags: ['True Petrichor', 'Calming Therapy', 'Heritage Method'],
    longevity: '12+ Hours',
    sillage: 'Warm & Close'
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('alhabib_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('alhabib_wishlist') || '[]');
let selectedSizes = {};
let activeCategory = 'all';
let discountPercent = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  PRODUCTS.forEach(p => {
    selectedSizes[p.id] = p.selectedSize;
  });
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderProducts(e.target.value);
    });
  }

  // Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Cart Drawer
  document.getElementById('cartBtn')?.addEventListener('click', toggleCartDrawer);
  document.getElementById('cartCloseBtn')?.addEventListener('click', toggleCartDrawer);
  document.getElementById('cartOverlay')?.addEventListener('click', toggleCartDrawer);

  // Promo Code
  document.getElementById('applyPromoBtn')?.addEventListener('click', applyPromoCode);

  // Checkout Modal
  document.getElementById('checkoutBtn')?.addEventListener('click', openCheckoutModal);
  document.getElementById('checkoutModalClose')?.addEventListener('click', closeCheckoutModal);
  document.getElementById('checkoutOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'checkoutOverlay') closeCheckoutModal();
  });

  // Quick View Modal
  document.getElementById('quickViewClose')?.addEventListener('click', closeQuickView);
  document.getElementById('quickViewOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'quickViewOverlay') closeQuickView();
  });

  // Checkout Form Submission
  document.getElementById('checkoutForm')?.addEventListener('submit', handleCheckoutSubmit);

  // WhatsApp Checkout
  document.getElementById('whatsappCheckoutBtn')?.addEventListener('click', checkoutViaWhatsApp);
}

// Render Products
function renderProducts(query = '') {
  const container = document.getElementById('productGrid');
  if (!container) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = (activeCategory === 'all') || (p.category === activeCategory);
    const matchesSearch = !query || 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.notes.top.toLowerCase().includes(query.toLowerCase()) ||
      p.notes.base.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fa fa-search" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--gold-primary);"></i>
        <h3>No fragrances match your selection</h3>
        <p>Try searching for Rose, Oud, Mitti, or select "All Scent Profiles".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const size = selectedSizes[product.id] || '6ml';
    const price = product.sizes[size];
    const isWishlisted = wishlist.includes(product.id);

    return `
      <div class="product-card" id="product-${product.id}">
        <span class="product-badge">${product.badge}</span>
        <button class="wishlist-heart-btn ${isWishlisted ? 'active' : ''}" 
                title="Wishlist" 
                onclick="toggleWishlist('${product.id}')">
          <i class="fa ${isWishlisted ? 'fa-heart' : 'fa-heart-o'}"></i>
        </button>

        <div class="product-image-container">
          <img src="${product.image}" 
               alt="${product.name}" 
               class="product-image" 
               loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80'" />
          <div class="quick-view-overlay">
            <button class="quick-view-btn" onclick="openQuickView('${product.id}')">
              <i class="fa fa-eye"></i> Fragrance Notes
            </button>
          </div>
        </div>

        <div class="product-info">
          <span class="product-category">${product.category} • pure attar</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-notes">${product.description}</p>

          <div class="fragrance-tags">
            ${product.tags.map(t => `<span class="fragrance-tag">${t}</span>`).join('')}
          </div>

          <div class="size-selector">
            <span class="size-label">Volume:</span>
            <div class="size-options">
              ${Object.keys(product.sizes).map(s => `
                <button class="size-pill ${s === size ? 'active' : ''}" 
                        onclick="selectSize('${product.id}', '${s}')">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="product-footer">
            <div class="price-container">
              <span class="price-current" id="price-${product.id}">₹${price.toLocaleString()}</span>
              <span class="price-original">₹${Math.round(price * 1.25).toLocaleString()}</span>
            </div>
            <div class="card-actions">
              <button class="btn-whatsapp-icon" 
                      title="Order on WhatsApp" 
                      onclick="orderProductViaWhatsApp('${product.id}')">
                <i class="fa fa-whatsapp"></i>
              </button>
              <button class="btn-add-cart" onclick="addToCart('${product.id}')">
                <i class="fa fa-shopping-bag"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Select bottle size
function selectSize(productId, size) {
  selectedSizes[productId] = size;
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    const card = document.getElementById(`product-${productId}`);
    if (card) {
      card.querySelectorAll('.size-pill').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === size);
      });
      const priceEl = document.getElementById(`price-${productId}`);
      if (priceEl) {
        priceEl.textContent = `₹${product.sizes[size].toLocaleString()}`;
      }
    }
  }
}

// Add to Cart
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const size = selectedSizes[productId] || '6ml';
  const price = product.sizes[size];
  const cartItemId = `${productId}-${size}`;

  const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      cartItemId,
      id: product.id,
      name: product.name,
      size,
      price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${product.name} (${size}) to Cart`);
  openCartDrawer();
}

function updateCartQty(cartItemId, delta) {
  const index = cart.findIndex(item => item.cartItemId === cartItemId);
  if (index > -1) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeCartItem(cartItemId) {
  cart = cart.filter(item => item.cartItemId !== cartItemId);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart');
}

function saveCart() {
  localStorage.setItem('alhabib_cart', JSON.stringify(cart));
}

// Update Cart UI
function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const itemsContainer = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountEl = document.getElementById('cartDiscount');
  const totalEl = document.getElementById('cartTotal');
  const shippingProgressBar = document.getElementById('shippingProgressBar');
  const shippingText = document.getElementById('shippingProgressText');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (countEl) countEl.textContent = totalItems;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = Math.round(subtotal * (discountPercent / 100));
  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;
  const finalTotal = subtotal - discount + shipping;

  // Free shipping threshold ₹999
  if (shippingProgressBar && shippingText) {
    const progress = Math.min(100, Math.round((subtotal / 999) * 100));
    shippingProgressBar.style.width = `${progress}%`;
    if (subtotal === 0) {
      shippingText.innerHTML = `Add items worth <strong>₹999</strong> for Free Shipping`;
    } else if (subtotal >= 999) {
      shippingText.innerHTML = `✨ <strong>You unlocked Free Express Shipping!</strong>`;
    } else {
      shippingText.innerHTML = `Add <strong>₹${(999 - subtotal).toLocaleString()}</strong> more for Free Shipping`;
    }
  }

  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-cart-state">
          <i class="fa fa-shopping-bag"></i>
          <h4>Your Cart is Empty</h4>
          <p>Discover pure artisanal attars and indulge your senses.</p>
          <button class="btn btn-secondary" style="margin-top: 15px;" onclick="toggleCartDrawer()">Explore Fragrances</button>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-details">
            <div>
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-meta">${item.size} • Pure Attar</div>
            </div>
            <div class="cart-item-controls">
              <div class="qty-control">
                <button class="qty-btn" onclick="updateCartQty('${item.cartItemId}', -1)">-</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn" onclick="updateCartQty('${item.cartItemId}', 1)">+</button>
              </div>
              <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</span>
              <button class="cart-item-remove" onclick="removeCartItem('${item.cartItemId}')">
                <i class="fa fa-trash-o"></i>
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
  if (discountRow) discountRow.style.display = discountPercent > 0 ? 'flex' : 'none';
  if (discountEl) discountEl.textContent = `-₹${discount.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `₹${finalTotal.toLocaleString()}`;
}

// Promo Code
function applyPromoCode() {
  const input = document.getElementById('promoInput');
  const code = input ? input.value.trim().toUpperCase() : '';
  if (code === 'ALHABIB10' || code === 'FIRST10') {
    discountPercent = 10;
    updateCartUI();
    showToast('Promo code applied: 10% OFF!');
  } else {
    showToast('Invalid promo code. Try "ALHABIB10"');
  }
}

// Cart Drawer Toggles
function toggleCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  drawer?.classList.toggle('open');
  overlay?.classList.toggle('open');
}

function openCartDrawer() {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
}

// Wishlist
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(productId);
    showToast('Saved to wishlist');
  }
  localStorage.setItem('alhabib_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const countEl = document.getElementById('wishlistCount');
  if (countEl) countEl.textContent = wishlist.length;
}

// WhatsApp Integration
function orderProductViaWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const size = selectedSizes[productId] || '6ml';
  const price = product.sizes[size];

  const text = `Salam Al-Habib Team! 🌹\nI would like to order:\n\n*Product:* ${product.name}\n*Volume:* ${size}\n*Price:* ₹${price}\n\nPlease share payment details (UPI/COD) and dispatch schedule.`;
  window.open(`https://wa.me/917888929993?text=${encodeURIComponent(text)}`, '_blank');
}

function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  let orderSummary = cart.map(i => `• ${i.name} (${i.size}) x${i.qty} = ₹${i.price * i.qty}`).join('\n');
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const text = `Salam Al-Habib Team! 🌹\nI want to place an order from your website:\n\n${orderSummary}\n\n*Total Amount:* ₹${subtotal.toLocaleString()}\n\nPlease confirm availability and payment methods (UPI/COD).`;
  window.open(`https://wa.me/917888929993?text=${encodeURIComponent(text)}`, '_blank');
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalBody = document.getElementById('quickViewBody');
  if (modalBody) {
    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 30px; align-items: center;">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-subtle);" />
        <div>
          <span style="color: var(--gold-primary); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;">${product.category} • Artisanal Attar</span>
          <h2 style="font-family: var(--font-serif); font-size: 2rem; color: #fff; margin: 6px 0 14px;">${product.name}</h2>
          <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.7; margin-bottom: 20px;">${product.description}</p>
          
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <h4 style="font-size: 0.85rem; color: var(--gold-light); margin-bottom: 10px; text-transform: uppercase;">Fragrance Pyramid</h4>
            <div style="font-size: 0.8rem; margin-bottom: 6px;"><strong>Top Notes:</strong> <span style="color: var(--text-secondary);">${product.notes.top}</span></div>
            <div style="font-size: 0.8rem; margin-bottom: 6px;"><strong>Heart Notes:</strong> <span style="color: var(--text-secondary);">${product.notes.heart}</span></div>
            <div style="font-size: 0.8rem;"><strong>Base Notes:</strong> <span style="color: var(--text-secondary);">${product.notes.base}</span></div>
          </div>

          <div style="display: flex; gap: 20px; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 24px;">
            <div><i class="fa fa-clock-o" style="color: var(--gold-primary);"></i> Longevity: <strong style="color: #fff;">${product.longevity}</strong></div>
            <div><i class="fa fa-bullhorn" style="color: var(--gold-primary);"></i> Sillage: <strong style="color: #fff;">${product.sillage}</strong></div>
          </div>

          <button class="btn btn-primary" style="width: 100%;" onclick="addToCart('${product.id}'); closeQuickView();">
            <i class="fa fa-shopping-bag"></i> Add to Bag (₹${product.basePrice})
          </button>
        </div>
      </div>
    `;
  }

  document.getElementById('quickViewOverlay')?.classList.add('open');
}

function closeQuickView() {
  document.getElementById('quickViewOverlay')?.classList.remove('open');
}

// Checkout Modal
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }
  toggleCartDrawer();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = Math.round(subtotal * (discountPercent / 100));
  const shipping = subtotal >= 999 ? 0 : 99;
  const finalTotal = subtotal - discount + shipping;

  const amountEl = document.getElementById('checkoutTotalAmount');
  if (amountEl) amountEl.textContent = `₹${finalTotal.toLocaleString()}`;

  document.getElementById('checkoutOverlay')?.classList.add('open');
}

function closeCheckoutModal() {
  document.getElementById('checkoutOverlay')?.classList.remove('open');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  const address = document.getElementById('custAddress').value;
  const pincode = document.getElementById('custPincode').value;
  const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'UPI';

  const orderId = 'AH-' + Math.floor(100000 + Math.random() * 900000);

  const modalBody = document.getElementById('checkoutFormContainer');
  if (modalBody) {
    modalBody.innerHTML = `
      <div style="text-align: center; padding: 20px 10px;">
        <div style="width: 64px; height: 64px; background: rgba(16, 185, 129, 0.15); border: 2px solid #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; color: #10b981; font-size: 2rem;">
          <i class="fa fa-check"></i>
        </div>
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff; margin-bottom: 8px;">Order Confirmed!</h3>
        <p style="color: var(--gold-light); font-weight: 600; margin-bottom: 6px;">Order ID: ${orderId}</p>
        <p style="color: var(--text-secondary); font-size: 0.88rem; max-width: 400px; margin: 0 auto 24px;">
          Thank you, <strong>${name}</strong>! Your order will be carefully bottled and dispatched from Bharuch within 24 hours. A tracking link has been sent to <strong>${phone}</strong>.
        </p>
        
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 16px; margin-bottom: 24px; text-align: left; font-size: 0.85rem;">
          <div style="color: var(--gold-light); margin-bottom: 6px;"><strong>Delivery Destination:</strong> ${address}, Pincode: ${pincode}</div>
          <div style="color: var(--text-muted);"><strong>Payment Mode:</strong> ${paymentMethod}</div>
        </div>

        <button class="btn btn-primary" onclick="closeCheckoutModal(); resetCart();">
          Continue Shopping
        </button>
      </div>
    `;
  }

  // Clear Cart
  cart = [];
  saveCart();
  updateCartUI();
}

function resetCart() {
  setTimeout(() => {
    location.reload();
  }, 300);
}

// Toast Alert
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa fa-check-circle" style="color: var(--gold-primary);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
