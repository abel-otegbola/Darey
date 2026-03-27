export const gadgets = [
    {
      id: "0",
      title: "Brand New iPhone 16 (Teal/White)",
      price: 1000000,
      slug: "iphone-15-pro-max",
      description: `<div class="container"><h1>🔥 Brand New iPhone 16 Deal 🔥</h1><p>
      Get your hands on a <strong>100% original, brand new iPhone 16</strong> – 
      just activated with <strong>0 battery cycle count</strong> 
      <span class="highlight">(never used)</span>.
    </p>
    <ul>
      <li>✅ 1-Year Apple Warranty (Fully Active)</li>
      <li>✅ Clean, untouched condition – no repairs, no refurbishing</li>
      <li>✅ Available in Teal & White (very clean colors)</li>
      <li>✅ Reliable performance + premium feel</li>
    </ul>
    <p class="price">💰 Price: ₦1,000,000 (Best value in Lagos)</p>
    <p>
      Buy with confidence — what you see is exactly what you get. 
      No hidden issues, no stories.
    </p>
    <div class="footer">
      📍 Available for pickup or delivery within Lagos
    </div>
    </div>`,
      tags: ["smartphone", "Apple", "iOS", "5G"],
      category: "iphone",
      condition: "Brand new",
      warranty: "1 year warranty",
      stocks: 150,
      images: [
        "/products/iphone16.png",
        "/products/iphone16-2.png",
        "/products/iphone16-3.png",
      ],
      variations: {
        colors: [
          { name: "Teal/white", img: "/products/iphone16.png", hex: "#C1E0E2" },
        ],
        size: [
          { name: "256GB", img: "/products/iphone16.png", price: 1000000 },
        ],
      },
      offers: [
        { name: "Free Shipping", code: "FREESHIP" },
      ],
      createdAt: "2024-11-14T10:00:00Z",
      updatedAt: "2024-11-14T10:00:00Z",
      rating: 4.8,
      store: "DAREY",
    },
    {
        id: "1",
        title: "Brand New iPhone 15 Pro (128GB / 256GB)",
        price: 960000,
        slug: "iphone-15-pro",
        description: `<div class="container">
            <h1>🔥 Brand New iPhone 15 Pro 🔥</h1>

            <p>
            Experience premium performance with the <strong>100% original iPhone 15 Pro</strong> — 
            sleek, powerful, and built for everyday luxury.
            </p>

            <ul>
            <li>✅ Available in <strong>128GB & 256GB</strong></li>
            <li>✅ <strong>Active Apple Warranty</strong></li>
            <li>✅ Clean, untouched condition – no repairs, no refurbishing</li>
            <li>✅ Smooth performance, pro camera & premium design</li>
            </ul>

            <p class="price">
            💰 128GB – ₦920,000 <br/>
            💰 256GB – ₦960,000
            </p>

            <p>
            Buy with confidence — original product, no hidden issues, no stories.
            </p>

            <div class="footer">
            📍 Available for pickup or delivery within Lagos
            </div>
        </div>`,
        tags: ["smartphone", "Apple", "iOS", "5G"],
        category: "iphone",
        condition: "Brand new",
        warranty: "Active Apple warranty",
        stocks: 120,
        images: [
            "/products/iphone15-pro.png",
            "/products/iphone15-pro-2.png",
        ],
        variations: {
            colors: [
            { name: "Natural Titanium", img: "/products/iphone15-pro.png", hex: "#E5E0DC" },
            { name: "Blue Titanium", img: "/products/iphone15-pro.png", hex: "#1D2F53" },
            ],
            size: [
            { name: "128GB", img: "/products/iphone15-pro.png", price: 950000 },
            { name: "256GB", img: "/products/iphone15-pro.png", price: 990000 }
            ]
        },
        offers: [
            { name: "Free Delivery within Lagos", code: "LAGOSFREE" }
        ],
        createdAt: "2026-03-27T10:00:00Z",
        updatedAt: "2026-03-27T10:00:00Z",
        rating: 4.7,
        store: "DAREY"
    },  
];
