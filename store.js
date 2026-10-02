// Al-Habib Haute Parfumerie - Store Logic (White Luxury Edition)

const ATTARS = [
  {
    id: 'oud-al-habib',
    name: 'Oud Al-Habib',
    tagline: 'Signature Royal Blend',
    category: 'oud',
    description: 'Our crown jewel. Distilled from 25-year aged wild Cambodian and Hindi agarwood, infused with Taif rose, Kashmiri saffron, and aged warm ambergris.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_Oud_Al_Habib_6ml_Website_700x700-420x420.jpg',
    basePrice: 1500,
    sizes: { '3ml': 850, '6ml': 1500, '12ml': 2800 },
    notes: {
      top: 'Kashmiri Saffron, Bergamot, Cardamom',
      heart: 'Vintage Taif Rose, Golden Amber Resin',
      base: '25-Year Cambodian Agarwood, Royal Silk Musk'
    },
    longevity: '18+ Hours',
    sillage: 'Royal & Enormous',
    badge: 'Maison Signature'
  },
  {
    id: 'oud-maracuja',
    name: 'Oud Maracuja',
    tagline: 'Exotic Passionfruit & Smokey Woods',
    category: 'oud',
    description: 'An electrifying modern creation marrying tangy tropical passionfruit with smoldering leather and deep Indonesian agarwood oil.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_Oud_Maracuja_6ml_Website_700x700-420x420.jpg',
    basePrice: 900,
    sizes: { '3ml': 500, '6ml': 900, '12ml': 1650 },
    notes: {
      top: 'Passionfruit, Cassis, Ripe Peach',
      heart: 'Turkish Rose Absolute, Smoked Leather',
      base: 'Indonesian Agarwood, Benzoin, Bourbon Vanilla'
    },
    longevity: '14+ Hours',
    sillage: 'Heavy & Alluring',
    badge: 'Connoisseur Pick'
  },
  {
    id: 'rose-gulab',
    name: 'Rose (Gulab)',
    tagline: 'Hydro-Distilled Indian Damask Rose',
    category: 'floral',
    description: 'Handpicked early morning desi gulab petals distilled in heritage copper degs. Crisp, dewy, romantic, and completely free from synthetic oils.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_Rose_Gulab_6ml_Website_700x700-420x420.jpg',
    basePrice: 900,
    sizes: { '3ml': 500, '6ml': 900, '12ml': 1650 },
    notes: {
      top: 'Dewy Green Morning Petals, Mint Whisper',
      heart: 'Hydro-Distilled Damask Rose, Pink Peony',
      base: 'Clean White Musk, Mysore Sandalwood'
    },
    longevity: '12+ Hours',
    sillage: 'Intimate to Moderate',
    badge: 'Pure Hydro-Distillate'
  },
  {
    id: 'white-oud',
    name: 'White Oud',
    tagline: 'Silk Musk & Blonde Woods',
    category: 'oud',
    description: 'A whisper of purity. White Oud combines crystalline silk musk with velvety blonde agarwood, light cardamom, and soft jasmine blossoms.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_White_Oud_6ml_Website_700x700-420x420.jpg',
    basePrice: 700,
    sizes: { '3ml': 400, '6ml': 700, '12ml': 1300 },
    notes: {
      top: 'White Jasmine, Sweet Mandarin Sparkle',
      heart: 'Powdery Cashmeran, Green Cardamom',
      base: 'Clean White Agarwood, Ambergris Silk'
    },
    longevity: '10+ Hours',
    sillage: 'Moderate & Office-Safe',
    badge: 'Everyday Luxury'
  },
  {
    id: 'kausar',
    name: 'Kausar',
    tagline: 'Prestige Amber & Royal Sandal',
    category: 'royal',
    description: 'Named after the celestial fountain, Kausar is an opulent, meditative symphony of rare ambergris, saffron, and aged Mysore sandalwood.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_Kausar_6ml_Website_700x700_Optimized-420x420.jpg',
    basePrice: 1900,
    sizes: { '3ml': 1050, '6ml': 1900, '12ml': 3500 },
    notes: {
      top: 'Golden Amber Resin, Neroli Blossom',
      heart: 'Mysore Sandalwood (Chandan), Red Rose',
      base: 'Celestial Ambergris, Deer Musk Accord'
    },
    longevity: '24+ Hours',
    sillage: 'Legendary',
    badge: 'Prestige Edition'
  },
  {
    id: 'mitti-punjab-di',
    name: 'Mitti Punjab Di',
    tagline: 'Authentic Petrichor (First Monsoon Rain)',
    category: 'earthy',
    description: 'The sacred scent of the first rainfall hitting parched, sun-baked clay soil. Hydro-distilled onto pure sandalwood oil base using traditional Kannauj pots.',
    image: 'https://alhabib.co.in/image/cache/catalog/Al_Habib_Mitti_Punjab_Di_6ml_Website_700x700-420x420.jpg',
    basePrice: 1500,
    sizes: { '3ml': 800, '6ml': 1500, '12ml': 2800 },
    notes: {
      top: 'Fresh Monsoon Raindrops, Baked Clay Vapor',
      heart: 'Sun-warmed Earth, Petrichor Molecule',
      base: 'Pure Indian Hydro-distilled Sandalwood Oil'
    },
    longevity: '12+ Hours',
    sillage: 'Meditative & Calming',
    badge: 'Cultural Heritage'
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('alhabib_bag') || '[]');
let activeCategory = 'all';
let currentSizes = {};

// Initialize state
ATTARS.forEach(p => {
  currentSizes[p.id] = '6ml';
});

// Update Bag Badge Count
function updateBagBadge() {
  const total = cart.reduce((acc, item) => acc + item.qty, 0);
  document.querySelectorAll('.bag-badge').forEach(b => b.textContent = total);
}

// Select Volume
function selectProductVolume(id, size) {
  currentSizes[id] = size;
  const p = ATTARS.find(item => item.id === id);
  if (!p) return;

  const card = document.getElementById(`perfume-${id}`);
  if (card) {
    card.querySelectorAll('.volume-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim() === size);
    });
    const priceEl = card.querySelector('.perfume-price');
    if (priceEl) {
      priceEl.textContent = `₹${p.sizes[size].toLocaleString()}`;
    }
  }
}

// Add to Bag
function addToBag(id) {
  const p = ATTARS.find(item => item.id === id);
  if (!p) return;

  const size = currentSizes[id] || '6ml';
  const price = p.sizes[size];
  const itemKey = `${id}-${size}`;

  const exists = cart.find(i => i.key === itemKey);
  if (exists) {
    exists.qty += 1;
  } else {
    cart.push({
      key: itemKey,
      id: p.id,
      name: p.name,
      size: size,
      price: price,
      image: p.image,
      qty: 1
    });
  }

  localStorage.setItem('alhabib_bag', JSON.stringify(cart));
  updateBagBadge();
  alert(`Added ${p.name} (${size}) to your bag.`);
}

// WhatsApp Direct Order
function orderWhatsApp(id) {
  const p = ATTARS.find(item => item.id === id);
  if (!p) return;
  const size = currentSizes[id] || '6ml';
  const price = p.sizes[size];

  const msg = `Salam Al-Habib Team! 🌹\nI would like to purchase:\n\n• *Product:* ${p.name}\n• *Volume:* ${size} Pure Attar\n• *Price:* ₹${price}\n\nPlease share payment details (UPI/COD) and dispatch schedule to my address.`;
  window.open(`https://wa.me/917888929993?text=${encodeURIComponent(msg)}`, '_blank');
}

// Render Products Grid
function renderPerfumesGrid(containerId = 'perfumesGrid', category = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = ATTARS.filter(p => category === 'all' || p.category === category);

  container.innerHTML = filtered.map(p => {
    const size = currentSizes[p.id] || '6ml';
    const price = p.sizes[size];

    return `
      <div class="perfume-card" id="perfume-${p.id}">
        <span class="perfume-tag">${p.badge}</span>
        
        <div class="perfume-img-box">
          <a href="product.html?id=${p.id}">
            <img src="${p.image}" alt="${p.name}" class="perfume-img" loading="lazy" />
          </a>
        </div>

        <div class="perfume-body">
          <span class="perfume-family">${p.category} • pure non-alcoholic attar</span>
          <h3 class="perfume-name">
            <a href="product.html?id=${p.id}">${p.name}</a>
          </h3>
          <p class="perfume-excerpt">${p.description}</p>

          <div class="notes-preview">
            <strong>Notes:</strong> ${p.notes.top} • ${p.notes.heart} • ${p.notes.base}
          </div>

          <div class="volume-selector">
            <span class="volume-label">Select Bottle:</span>
            <div class="volume-options">
              ${Object.keys(p.sizes).map(s => `
                <button class="volume-btn ${s === size ? 'active' : ''}" onclick="selectProductVolume('${p.id}', '${s}')">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="perfume-action-row">
            <div class="perfume-price">₹${price.toLocaleString()}</div>
            <div class="perfume-btns">
              <button class="btn-card-wa" title="Order via WhatsApp" onclick="orderWhatsApp('${p.id}')">
                <i class="fa fa-whatsapp"></i>
              </button>
              <button class="btn-card-add" onclick="addToBag('${p.id}')">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// On Page Load
document.addEventListener('DOMContentLoaded', () => {
  updateBagBadge();
  renderPerfumesGrid('perfumesGrid', 'all');

  // Filter tabs click
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-cat') || 'all';
      renderPerfumesGrid('perfumesGrid', cat);
    });
  });
});
