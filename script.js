/**
 * ==========================================================================
 * MASTER APP ARCHITECTURE LEDGER CONTROL SCRIPT
 * ==========================================================================
 */

// CORE DATA REGISTRY - 40 COMPLETE LUXURY/STREET FASHION ASSETS MATRIX
const PRODUCT_DATASET = [
    { id: 1, name: "Premium Heavyweight Trench", brand: "AESTHETE", category: "Winter Wear", gender: "Men", price: 189.00, originalPrice: 245.00, discount: 23, rating: 4.8, images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=500&q=80"], sizes: ["M", "L", "XL"], colors: ["#2B2A29", "#C4A482"], stock: 12, tags: ["Premium", "Minimalist", "Coats"], dateAdded: "2026-01-10", popularity: 95, material: "80% Virgin Wool, 20% Nylon Cashmere Blend" },
    { id: 2, name: "Structured Linen Blazer", brand: "CORE STUDIOS", category: "Jackets", gender: "Women", price: 145.00, originalPrice: 145.00, discount: 0, rating: 4.6, images: ["https://images.unsplash.com/photo-1548624149-f7b1468172da?auto=format&fit=crop&w=500&q=80"], sizes: ["S", "M", "L"], colors: ["#F5F5DC", "#FFFFFF"], stock: 8, tags: ["Blazers", "Linen", "Formal"], dateAdded: "2026-02-14", popularity: 82, material: "100% Organic Flax Linen" },
    { id: 3, name: "Minimalist Utility Parka", brand: "NORDIC FORM", category: "Jackets", gender: "Unisex", price: 210.00, originalPrice: 280.00, discount: 25, rating: 4.9, images: ["https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80"], sizes: ["S", "M", "L", "XL"], colors: ["#2E3B29", "#111827"], stock: 4, tags: ["Streetwear", "Waterproof", "Utility"], dateAdded: "2026-03-01", popularity: 99, material: "Gore-Tex Recycled Tech-Shell" },
    { id: 4, name: "Custom Knit Oversized Hoodie", brand: "KINETIC APPAREL", category: "Hoodies", gender: "Men", price: 85.00, originalPrice: 110.00, discount: 22, rating: 4.4, images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80"], sizes: ["M", "L", "XL", "XXL"], colors: ["#708090", "#111827"], stock: 25, tags: ["Streetwear", "Heavyweight", "Cozy"], dateAdded: "2025-12-20", popularity: 88, material: "450GSM Organic Loopback Cotton" },
    { id: 5, name: "Raw Denim Tapered Jeans", brand: "CORE STUDIOS", category: "Jeans", gender: "Men", price: 120.00, originalPrice: 120.00, discount: 0, rating: 4.5, images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80"], sizes: ["30", "32", "34", "36"], colors: ["#0F1E36"], stock: 15, tags: ["Denim", "Classic", "Selvedge"], dateAdded: "2026-02-18", popularity: 76, material: "14oz Japanese Selvedge Denim" },
    { id: 6, name: "Silk Asymmetric Midi Dress", brand: "AESTHETE", category: "Dresses", gender: "Women", price: 240.00, originalPrice: 320.00, discount: 25, rating: 4.7, images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80"], sizes: ["XS", "S", "M"], colors: ["#800020", "#111827"], stock: 6, tags: ["Luxury", "Evening", "Silk"], dateAdded: "2026-04-02", popularity: 91, material: "100% Mulberry Crepe de Chine Silk" },
    { id: 7, name: "Chrono Heritage Steel Watch", brand: "CHRONO LAB", category: "Watches", gender: "Unisex", price: 450.00, originalPrice: 450.00, discount: 0, rating: 4.9, images: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#E2E8F0"], stock: 5, tags: ["Luxury", "Accents", "Chrono"], dateAdded: "2026-01-15", popularity: 94, material: "316L Stainless Steel, Sapphire Crystal Glass" },
    { id: 8, name: "Premium Leather Backpack", brand: "NORDIC FORM", category: "Backpacks", gender: "Unisex", price: 195.00, originalPrice: 250.00, discount: 22, rating: 4.6, images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#4A3B32", "#111827"], stock: 0, tags: ["Leather", "Travel", "Utility"], dateAdded: "2026-02-28", popularity: 64, material: "Full-Grain Vegetable Tanned Calfskin" },
    { id: 9, name: "Vanguard Court Sneakers", brand: "KINETIC APPAREL", category: "Sneakers", gender: "Unisex", price: 130.00, originalPrice: 160.00, discount: 18, rating: 4.5, images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80"], sizes: ["8", "9", "10", "11"], colors: ["#FFFFFF", "#111827"], stock: 18, tags: ["Shoes", "Minimalist", "Leather"], dateAdded: "2026-03-12", popularity: 89, material: "Italian Nappa Leather Lining" },
    { id: 10, name: "Luxe Acetate Sunglasses", brand: "CHRONO LAB", category: "Sunglasses", gender: "Unisex", price: 95.00, originalPrice: 130.00, discount: 26, rating: 4.3, images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#111827", "#D4AF37"], stock: 40, tags: ["Summer", "Accents", "UV"], dateAdded: "2026-05-01", popularity: 73, material: "Block Cellulose Acetate, CR-39 Lenses" },
    { id: 11, name: "Organic Pima Cotton Tee", brand: "CORE STUDIOS", category: "T-Shirts", gender: "Men", price: 38.00, originalPrice: 38.00, discount: 0, rating: 4.2, images: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80"], sizes: ["S", "M", "L", "XL"], colors: ["#FFFFFF", "#708090", "#111827"], stock: 50, tags: ["Basics", "Organic", "Tee"], dateAdded: "2026-01-05", popularity: 81, material: "100% Long-Staple Peruvian Pima Cotton" },
    { id: 12, name: "Kids French Terry Romper", brand: "NORDIC FORM", category: "Kids' Clothing", gender: "Kids", price: 45.00, originalPrice: 60.00, discount: 25, rating: 4.7, images: ["https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=500&q=80"], sizes: ["2T", "3T", "4T"], colors: ["#E0F2FE", "#FEE2E2"], stock: 10, tags: ["Kids", "Cozy", "Organic"], dateAdded: "2026-03-25", popularity: 70, material: "100% Organic Cotton French Terry Blend" },
    { id: 13, name: "Geometric Silk Ethnic Kurta", brand: "AESTHETE", category: "Ethnic Wear", gender: "Men", price: 160.00, originalPrice: 200.00, discount: 20, rating: 4.8, images: ["https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=500&q=80"], sizes: ["M", "L", "XL"], colors: ["#FFD700", "#FFFFFF"], stock: 9, tags: ["Ethnic", "Formal", "Tradition"], dateAdded: "2026-04-18", popularity: 92, material: "Tussar Silk with Brocade Trims" },
    { id: 14, name: "Performance Breathable Shorts", brand: "KINETIC APPAREL", category: "Shorts", gender: "Men", price: 55.00, originalPrice: 55.00, discount: 0, rating: 4.4, images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500&q=80"], sizes: ["S", "M", "L"], colors: ["#111827", "#64748B"], stock: 30, tags: ["Sportswear", "DryFit", "Gym"], dateAdded: "2026-02-10", popularity: 75, material: "88% Recycled Polyester, 12% Spandex" },
    { id: 15, name: "Tailored Wool Trousers", brand: "CORE STUDIOS", category: "Trousers", gender: "Women", price: 135.00, originalPrice: 180.00, discount: 25, rating: 4.6, images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80"], sizes: ["XS", "S", "M", "L"], colors: ["#111827", "#64748B"], stock: 14, tags: ["Formal", "Wool", "Office"], dateAdded: "2026-03-05", popularity: 84, material: "Super 100s Lightweight Merino Wool" },
    { id: 16, name: "Aerofit Carbon Running Shoes", brand: "KINETIC APPAREL", category: "Running Shoes", gender: "Unisex", price: 175.00, originalPrice: 175.00, discount: 0, rating: 4.9, images: ["https://images.unsplash.com/photo-1514989940723-e8e5163ccbe8?auto=format&fit=crop&w=500&q=80"], sizes: ["7", "8", "9", "10", "11"], colors: ["#EF4444", "#FFFFFF"], stock: 11, tags: ["Shoes", "Marathon", "Carbon"], dateAdded: "2026-05-10", popularity: 97, material: "Carbon Fiber Plate, Pebax Foam Matrix" },
    { id: 17, name: "Handcrafted Calfskin Brogues", brand: "AESTHETE", category: "Formal Shoes", gender: "Men", price: 220.00, originalPrice: 295.00, discount: 25, rating: 4.7, images: ["https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=500&q=80"], sizes: ["8", "9", "10"], colors: ["#4A2E1B"], stock: 6, tags: ["Shoes", "Formal", "Leather"], dateAdded: "2026-01-30", popularity: 86, material: "Italian Full-Grain Calfskin Leather" },
    { id: 18, name: "Minimalist Leather Sandal", brand: "NORDIC FORM", category: "Sandals", gender: "Women", price: 70.00, originalPrice: 90.00, discount: 22, rating: 4.3, images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"], sizes: ["6", "7", "8", "9"], colors: ["#C4A482", "#111827"], stock: 22, tags: ["Summer", "Sandals", "Minimalist"], dateAdded: "2026-04-15", popularity: 79, material: "Vegetable Tanned Leather Straps, Cork Bed" },
    { id: 19, name: "Merino Wool Socks Tri-Pack", brand: "CORE STUDIOS", category: "Socks", gender: "Unisex", price: 28.00, originalPrice: 28.00, discount: 0, rating: 4.5, images: ["https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=500&q=80"], sizes: ["M", "L"], colors: ["#64748B"], stock: 100, tags: ["Basics", "Socks", "Merino"], dateAdded: "2025-11-01", popularity: 90, material: "75% Merino Wool, 23% Nylon, 2% Lycra" },
    { id: 20, name: "Water-Resistant Technical Cap", brand: "KINETIC APPAREL", category: "Caps", gender: "Unisex", price: 35.00, originalPrice: 45.00, discount: 22, rating: 4.1, images: ["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#111827", "#64748B"], stock: 45, tags: ["Accents", "Utility", "Caps"], dateAdded: "2026-03-20", popularity: 68, material: "Ripstop Nylon with DWR Coating" },
    { id: 21, name: "Premium Saffiano Leather Belt", brand: "CHRONO LAB", category: "Belts", gender: "Men", price: 65.00, originalPrice: 65.00, discount: 0, rating: 4.4, images: ["https://images.unsplash.com/photo-1624222247344-550fb8ef9466?auto=format&fit=crop&w=500&q=80"], sizes: ["32", "34", "36", "38"], colors: ["#111827", "#4A2E1B"], stock: 14, tags: ["Leather", "Formal", "Accents"], dateAdded: "2026-02-02", popularity: 71, material: "Saffiano Calf Leather, Solid Brass Hardware" },
    { id: 22, name: "Minimalist Bi-Fold Wallet", brand: "CHRONO LAB", category: "Wallets", gender: "Men", price: 50.00, originalPrice: 75.00, discount: 33, rating: 4.6, images: ["https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#111827", "#4A2E1B"], stock: 8, tags: ["Leather", "RFID", "Accents"], dateAdded: "2026-01-22", popularity: 83, material: "Full-Grain Leather with RFID Shielding" },
    { id: 23, name: "Solid Brass Statement Cuff", brand: "AESTHETE", category: "Jewellery", gender: "Women", price: 110.00, originalPrice: 150.00, discount: 26, rating: 4.8, images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#D4AF37"], stock: 3, tags: ["Jewelry", "Luxury", "Brass"], dateAdded: "2026-05-14", popularity: 90, material: "18k Gold Plated Hypoallergenic Solid Brass" },
    { id: 24, name: "Women's Oversized Cotton Shirt", brand: "CORE STUDIOS", category: "Shirts", gender: "Women", price: 68.00, originalPrice: 68.00, discount: 0, rating: 4.3, images: ["https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80"], sizes: ["XS", "S", "M", "L"], colors: ["#FFFFFF", "#E0F2FE"], stock: 29, tags: ["Basics", "Shirts", "Oversized"], dateAdded: "2026-04-01", popularity: 85, material: "100% Organic Egyptian Poplin Cotton" },
    { id: 25, name: "Kids Knit Cardigan", brand: "NORDIC FORM", category: "Kids' Clothing", gender: "Kids", price: 58.00, originalPrice: 78.00, discount: 25, rating: 4.5, images: ["https://images.unsplash.com/photo-1611073123048-2884334ed68a?auto=format&fit=crop&w=500&q=80"], sizes: ["3T", "4T", "5T"], colors: ["#C4A482", "#708090"], stock: 12, tags: ["Kids", "Knit", "Winter"], dateAdded: "2026-03-11", popularity: 69, material: "100% Fine Merino Wool Knit Yarn" },
    { id: 26, name: "Waterproof Travel Duffle Bag", brand: "NORDIC FORM", category: "Bags", gender: "Unisex", price: 150.00, originalPrice: 200.00, discount: 25, rating: 4.7, images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#111827"], stock: 0, tags: ["Bags", "Travel", "Waterproof"], dateAdded: "2026-02-20", popularity: 78, material: "1680D Ballistic Nylon Tarpaulin Compound" },
    { id: 27, name: "Performance Compression Tights", brand: "KINETIC APPAREL", category: "Sportswear", gender: "Women", price: 75.00, originalPrice: 75.00, discount: 0, rating: 4.6, images: ["https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=500&q=80"], sizes: ["XS", "S", "M"], colors: ["#111827", "#800020"], stock: 24, tags: ["Sportswear", "Compression", "Yoga"], dateAdded: "2026-03-30", popularity: 87, material: "Nylon-Spandex High Interlock Fabric Matrix" },
    { id: 28, name: "Sterling Silver Link Necklace", brand: "AESTHETE", category: "Jewellery", gender: "Unisex", price: 135.00, originalPrice: 180.00, discount: 25, rating: 4.8, images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#E2E8F0"], stock: 7, tags: ["Jewelry", "Luxury", "Silver"], dateAdded: "2026-05-02", popularity: 93, material: "Solid 925 Sterling Silver Mirror Polished" },
    { id: 29, name: "Premium Aviator Sunglasses", brand: "CHRONO LAB", category: "Sunglasses", gender: "Unisex", price: 160.00, originalPrice: 160.00, discount: 0, rating: 4.5, images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#D4AF37", "#111827"], stock: 15, tags: ["Luxury", "Accents", "Classic"], dateAdded: "2026-04-10", popularity: 82, material: "Titanium Chassis, Polarized Glass Elements" },
    { id: 30, name: "Linen Drawstring Trouser", brand: "CORE STUDIOS", category: "Trousers", gender: "Men", price: 90.00, originalPrice: 120.00, discount: 25, rating: 4.3, images: ["https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=500&q=80"], sizes: ["30", "32", "34", "36"], colors: ["#F5F5DC", "#64748B"], stock: 19, tags: ["Linen", "Summer", "Casual"], dateAdded: "2026-05-18", popularity: 88, material: "100% Belgian Flax Organic Linen Base" },
    { id: 31, name: "Anorak Grid Windbreaker", brand: "KINETIC APPAREL", category: "Jackets", gender: "Men", price: 110.00, originalPrice: 110.00, discount: 0, rating: 4.2, images: ["https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=500&q=80"], sizes: ["M", "L", "XL"], colors: ["#111827", "#708090"], stock: 13, tags: ["Utility", "Windbreaker", "Active"], dateAdded: "2026-02-22", popularity: 74, material: "Ripstop Honeycomb Polyester Membrane" },
    { id: 32, name: "Premium Knit Winter Beanie", brand: "NORDIC FORM", category: "Winter Wear", gender: "Unisex", price: 40.00, originalPrice: 50.00, discount: 20, rating: 4.5, images: ["https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#111827", "#64748B", "#C4A482"], stock: 35, tags: ["Winter", "Knit", "Accents"], dateAdded: "2025-12-15", popularity: 80, material: "100% Fine Merino Ribbed Construction" },
    { id: 33, name: "Silk Wrap Floral Dress", brand: "AESTHETE", category: "Dresses", gender: "Women", price: 280.00, originalPrice: 350.00, discount: 20, rating: 4.7, images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=500&q=80"], sizes: ["S", "M", "L"], colors: ["#800020", "#FFFFFF"], stock: 4, tags: ["Luxury", "Dress", "Floral"], dateAdded: "2026-04-20", popularity: 91, material: "100% Mulberry Habotai Silk Filament" },
    { id: 34, name: "Kids Organic Cotton Tee", brand: "CORE STUDIOS", category: "Kids' Clothing", gender: "Kids", price: 22.00, originalPrice: 22.00, discount: 0, rating: 4.4, images: ["https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=500&q=80"], sizes: ["2T", "4T", "6T"], colors: ["#FFFFFF", "#E0F2FE"], stock: 60, tags: ["Kids", "Basics", "Organic"], dateAdded: "2026-03-01", popularity: 65, material: "100% Certified Ring-Spun Organic Cotton" },
    { id: 35, name: "Minimalist Suede Loafers", brand: "AESTHETE", category: "Shoes", gender: "Men", price: 185.00, originalPrice: 240.00, discount: 23, rating: 4.6, images: ["https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=500&q=80"], sizes: ["8", "9", "10", "11"], colors: ["#C4A482", "#4A2E1B"], stock: 10, tags: ["Shoes", "Suede", "Casual"], dateAdded: "2026-03-18", popularity: 84, material: "Premium English Split Suede Leather Upper" },
    { id: 36, name: "Structured Canvas Tote Bag", brand: "NORDIC FORM", category: "Bags", gender: "Women", price: 75.00, originalPrice: 75.00, discount: 0, rating: 4.3, images: ["https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80"], sizes: ["One Size"], colors: ["#F5F5DC", "#111827"], stock: 25, tags: ["Bags", "Canvas", "Minimalist"], dateAdded: "2026-04-05", popularity: 77, material: "24oz Heavy Duty Organic Cotton Duck Canvas" },
    { id: 37, name: "Tech Elite Track Jacket", brand: "KINETIC APPAREL", category: "Sportswear", gender: "Men", price: 95.00, originalPrice: 130.00, discount: 26, rating: 4.5, images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80"], sizes: ["S", "M", "L", "XL"], colors: ["#111827", "#EF4444"], stock: 16, tags: ["Sportswear", "Athleisure", "ZipUp"], dateAdded: "2026-01-28", popularity: 82, material: "Double-Knit Spun Tech Spacer Fleece" },
    { id: 38, name: "Premium Woven Corduroy Shirt", brand: "CORE STUDIOS", category: "Shirts", gender: "Men", price: 78.00, originalPrice: 78.00, discount: 0, rating: 4.4, images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80"], sizes: ["M", "L", "XL"], colors: ["#4A2E1B", "#64748B"], stock: 20, tags: ["Shirts", "Corduroy", "Retro"], dateAdded: "2025-11-15", popularity: 79, material: "16-Wale Ultrafine Premium Cotton Corduroy" },
    { id: 39, name: "Embellished Banarasi Lehenga", brand: "AESTHETE", category: "Ethnic Wear", gender: "Women", price: 380.00, originalPrice: 500.00, discount: 24, rating: 4.9, images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80"], sizes: ["S", "M", "L"], colors: ["#800020", "#FFD700"], stock: 2, tags: ["Ethnic", "Luxury", "Wedding"], dateAdded: "2026-05-10", popularity: 98, material: "Pure Banarasi Katan Silk woven with Zari Threads" },
    { id: 40, name: "Tech Knit Performance Socks", brand: "KINETIC APPAREL", category: "Fashion Accessories", gender: "Unisex", price: 18.00, originalPrice: 24.00, discount: 25, rating: 4.2, images: ["https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=500&q=80"], sizes: ["S", "M", "L"], colors: ["#FFFFFF", "#111827"], stock: 120, tags: ["Basics", "Active", "Socks"], dateAdded: "2026-02-15", popularity: 69, material: "CoolMax Moisture Moisture-Wicking Poly-Fiber" }
];

// APP RUNTIME STRUCTURAL INSTANCE METRICS STATE REGISTER
let appState = {
    cart: [],
    wishlist: [],
    recentlyViewed: [],
    filters: {
        gender: [],
        category: [],
        brand: [],
        sizes: [],
        colors: [],
        maxPrice: 500,
        minRating: 0,
        inStockOnly: false,
        onSaleOnly: false,
        searchQuery: "",
        navFilter: "all"
    },
    sortOption: "newest",
    couponApplied: null,
    availableCoupons: {
        "TRENDY20": 0.20,
        "SAVE10": 0.10
    },
    isDarkMode: false,
    currentViewingProduct: null
};

// INITIALIZATION INITIAL ROUTING ENGINE TRIGGER
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    hydrateStateFromStorage();
    extractFilterParameters();
    bindGlobalUIEventHandling();
    executeSearchFilterSortPipeline();
    buildFaqAccordionInteractions();
    
    // Deactivate full loader surface with subtle latency execution frame
    setTimeout(() => {
        const loader = document.getElementById("loading-spinner");
        if(loader) loader.classList.add("hide-loader");
    }, 450);
});

/* ==========================================================================
   STATE DECORATION AND STORAGE INTEGRATION FUNCTIONS
   ========================================================================== */
function hydrateStateFromStorage() {
    try {
        const storedCart = localStorage.getItem("vgc_cart_ledger");
        const storedWishlist = localStorage.getItem("vgc_wishlist_ledger");
        const storedTheme = localStorage.getItem("vgc_theme_dark");
        const storedRecent = localStorage.getItem("vgc_recent_ledger");

        if(storedCart) appState.cart = JSON.parse(storedCart);
        if(storedWishlist) appState.wishlist = JSON.parse(storedWishlist);
        if(storedRecent) appState.recentlyViewed = JSON.parse(storedRecent);
        if(storedTheme === "true") {
            appState.isDarkMode = true;
            document.documentElement.setAttribute("data-theme", "dark");
        }
        
        syncBadgeMetricsCounter();
    } catch (e) {
        console.error("Storage operational routing hydration failure matrix:", e);
    }
}

function persistStateToStorage(key) {
    try {
        if(key === "cart" || !key) localStorage.setItem("vgc_cart_ledger", JSON.stringify(appState.cart));
        if(key === "wishlist" || !key) localStorage.setItem("vgc_wishlist_ledger", JSON.stringify(appState.wishlist));
        if(key === "recent" || !key) localStorage.setItem("vgc_recent_ledger", JSON.stringify(appState.recentlyViewed));
    } catch(e) {
         console.error("Storage write trace block failure execution:", e);
    }
}

function initTheme() {
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");
    if(appState.isDarkMode) {
        if(sunIcon) sunIcon.style.display = "none";
        if(moonIcon) moonIcon.style.display = "block";
    }
}

/* ==========================================================================
   DYNAMIC FILTER SETUP DATA GENERATION ENGINE
   ========================================================================== */
function extractFilterParameters() {
    const categories = [...new Set(PRODUCT_DATASET.map(p => p.category))].sort();
    const brands = [...new Set(PRODUCT_DATASET.map(p => p.brand))].sort();
    
    // Explicit primary colors list extraction
    let colorsMap = new Set();
    PRODUCT_DATASET.forEach(p => p.colors.forEach(c => colorsMap.add(c)));
    
    const catContainer = document.getElementById("category-filter-options");
    const brandContainer = document.getElementById("brand-filter-options");
    const colorContainer = document.getElementById("color-filter-options");

    if(catContainer) {
        catContainer.innerHTML = categories.map(cat => `
            <label class="control checkbox">
                <input type="checkbox" name="category" value="${cat}">
                <span></span>${cat}
            </label>
        `).join('');
    }

    if(brandContainer) {
        brandContainer.innerHTML = brands.map(br => `
            <label class="control checkbox">
                <input type="checkbox" name="brand" value="${br}">
                <span></span>${br}
            </label>
        `).join('');
    }

    if(colorContainer) {
        colorContainer.innerHTML = [...colorsMap].map(color => `
            <div class="color-filter-blob" data-color="${color}" style="background-color: ${color};" title="${color}"></div>
        `).join('');
    }
}

/* ==========================================================================
   MASTER SELECTION FILTER RE-CALCULATION BLOCK (THE ENGINE CORE)
   ========================================================================== */
function executeSearchFilterSortPipeline() {
    let processedArray = [...PRODUCT_DATASET];

    // 1. Process Navigation structural selection tags filters
    if(appState.filters.navFilter !== "all") {
        if(appState.filters.navFilter === "Sale") {
            processedArray = processedArray.filter(p => p.discount > 0);
        } else {
            // General structural cross comparison metrics
            processedArray = processedArray.filter(p => 
                p.gender === appState.filters.navFilter || 
                p.category.toLowerCase().includes(appState.filters.navFilter.toLowerCase())
            );
        }
    }

    // 2. Process Gender Checkboxes array
    if(appState.filters.gender.length > 0) {
        processedArray = processedArray.filter(p => appState.filters.gender.includes(p.gender));
    }

    // 3. Process Category Checkboxes array
    if(appState.filters.category.length > 0) {
        processedArray = processedArray.filter(p => appState.filters.category.includes(p.category));
    }

    // 4. Process Brand Checkboxes validation map
    if(appState.filters.brand.length > 0) {
        processedArray = processedArray.filter(p => appState.filters.brand.includes(p.brand));
    }

    // 5. Process Sizes Active Filter buttons array
    if(appState.filters.sizes.length > 0) {
        processedArray = processedArray.filter(p => p.sizes.some(s => appState.filters.sizes.includes(s)));
    }

    // 6. Process Color Blobs Selection Array map metrics
    if(appState.filters.colors.length > 0) {
        processedArray = processedArray.filter(p => p.colors.some(c => appState.filters.colors.includes(c)));
    }

    // 7. Process Price Slider boundaries
    processedArray = processedArray.filter(p => p.price <= appState.filters.maxPrice);

    // 8. Process Rating Floor Metrics
    if(appState.filters.minRating > 0) {
        processedArray = processedArray.filter(p => p.rating >= appState.filters.minRating);
    }

    // 9. Process Stock Availability parameter
    if(appState.filters.inStockOnly) {
        processedArray = processedArray.filter(p => p.stock > 0);
    }

    // 10. Process Sale Filter tag explicitly
    if(appState.filters.onSaleOnly) {
        processedArray = processedArray.filter(p => p.discount > 0);
    }

    // 11. Process Multi-Attribute Real-Time Text Search String Query matching
    if(appState.filters.searchQuery.trim() !== "") {
        const query = appState.filters.searchQuery.toLowerCase().trim();
        processedArray = processedArray.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.tags.some(t => t.toLowerCase().includes(query))
        );
    }

    // 12. Execute Selected Sort Operations Processing Map
    sortEngineMetrics(processedArray);

    // Master render pipelines
    renderMasterProductsGrid(processedArray);
    renderActiveAppliedTags();
    updateContextCountersLabel(processedArray.length);
}

function sortEngineMetrics(arrayInstance) {
    switch(appState.sortOption) {
        case "newest":
            arrayInstance.sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
        case "popularity":
            arrayInstance.sort((a,b) => b.popularity - a.popularity);
            break;
        case "price-low":
            arrayInstance.sort((a,b) => a.price - b.price);
            break;
        case "price-high":
            arrayInstance.sort((a,b) => b.price - a.price);
            break;
        case "rating":
            arrayInstance.sort((a,b) => b.rating - a.rating);
            break;
        case "discount":
            arrayInstance.sort((a,b) => b.discount - a.discount);
            break;
        case "alphabetical":
            arrayInstance.sort((a,b) => a.name.localeCompare(b.name));
            break;
    }
}

/* ==========================================================================
   GRID RENDERER ENGINES AND TEMPLATE LOGIC MANIPULATION
   ========================================================================== */
function renderMasterProductsGrid(itemsList) {
    const grid = document.getElementById("products-container");
    const emptyView = document.getElementById("empty-products-view");
    
    if(!grid) return;
    grid.innerHTML = "";

    if(itemsList.length === 0) {
        if(emptyView) emptyView.style.display = "block";
        return;
    }
    
    if(emptyView) emptyView.style.display = "none";

    itemsList.forEach(prod => {
        const isWish = appState.wishlist.includes(prod.id) ? "active" : "";
        const isOos = prod.stock === 0;
        
        let badgeDom = "";
        if(isOos) badgeDom = `<span class="card-badge limited">SOLD OUT</span>`;
        else if(prod.discount > 20) badgeDom = `<span class="card-badge sale">${prod.discount}% OFF</span>`;
        else if(new Date(prod.dateAdded) > new Date("2026-03-01")) badgeDom = `<span class="card-badge new">NEW</span>`;

        const card = document.createElement("article");
        card.className = `product-card ${isOos ? 'oos-blur' : ''}`;
        card.setAttribute("data-id", prod.id);
        
        card.innerHTML = `
            <div class="product-image-container">
                ${badgeDom}
                <button class="wishlist-card-trigger ${isWish}" aria-label="Add item to Wishlist">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <img src="${prod.images[0]}" alt="${prod.name}" loading="lazy">
                ${isOos ? '<div class="out-of-stock-label">Out of Stock</div>' : `
                    <div class="card-action-overlay">
                        <button class="overlay-btn quick-view-trigger">Quick View</button>
                        <button class="overlay-btn direct-add-cart-trigger">Add to Bag</button>
                    </div>
                `}
            </div>
            <div class="product-card-body">
                <span class="product-card-brand">${prod.brand}</span>
                <h3 class="product-card-title">${prod.name}</h3>
                <div class="product-card-rating">
                    <span>★ ${prod.rating.toFixed(1)}</span>
                    <span class="rating-num">(${prod.popularity})</span>
                </div>
                <div class="product-card-pricing">
                    <span class="price-act">$${prod.price.toFixed(2)}</span>
                    ${prod.discount > 0 ? `<del class="price-old">$${prod.originalPrice.toFixed(2)}</del>` : ''}
                    ${prod.discount > 0 ? `<span class="price-disc-pct">${prod.discount}% OFF</span>` : ''}
                </div>
                <div class="card-meta-variant-row">
                    <span>Sizes: ${prod.sizes.slice(0,3).join(', ')}</span>
                    <span>${prod.gender}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderRecentlyViewedProducts() {
    const container = document.getElementById("recent-products-container");
    if(!container) return;
    container.innerHTML = "";

    if(appState.recentlyViewed.length === 0) {
        container.closest('section').style.display = "none";
        return;
    }
    
    container.closest('section').style.display = "block";
    
    // Select last 4 active recently viewed structural indices mapping metrics reverse chronological order
    const renderTargets = appState.recentlyViewed.slice(-4).reverse();
    
    renderTargets.forEach(id => {
        const prod = PRODUCT_DATASET.find(p => p.id === id);
        if(!prod) return;
        
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-image-container" style="padding-top:110%">
                <img src="${prod.images[0]}" alt="${prod.name}">
                <div class="card-action-overlay">
                     <button class="overlay-btn quick-view-trigger-recent" data-id="${prod.id}">View Asset</button>
                </div>
            </div>
            <div class="product-card-body" style="padding: 10px;">
                <span class="product-card-brand" style="font-size:0.65rem;">${prod.brand}</span>
                <h4 class="product-card-title" style="font-size:0.8rem;">${prod.name}</h4>
                <span class="price-act" style="font-size:0.85rem;">$${prod.price.toFixed(2)}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderActiveAppliedTags() {
    const container = document.getElementById("active-tags-container");
    if(!container) return;
    container.innerHTML = "";

    let generatedPills = [];
    
    // Scan structure variables for generation metrics UI outputs
    appState.filters.gender.forEach(v => generatedPills.push({ type: 'gender', val: v }));
    appState.filters.category.forEach(v => generatedPills.push({ type: 'category', val: v }));
    appState.filters.brand.forEach(v => generatedPills.push({ type: 'brand', val: v }));
    appState.filters.sizes.forEach(v => generatedPills.push({ type: 'sizes', val: v }));
    appState.filters.colors.forEach(v => generatedPills.push({ type: 'colors', val: `Color: ${v}` , original: v }));
    if(appState.filters.maxPrice < 500) generatedPills.push({ type: 'price', val: `Below $${appState.filters.maxPrice}` });
    if(appState.filters.minRating > 0) generatedPills.push({ type: 'rating', val: `${appState.filters.minRating}★ & Above` });
    if(appState.filters.inStockOnly) generatedPills.push({ type: 'stock', val: 'In Stock' });
    if(appState.filters.onSaleOnly) generatedPills.push({ type: 'sale', val: 'On Sale' });
    if(appState.filters.searchQuery !== "") generatedPills.push({ type: 'search', val: `Query: ${appState.filters.searchQuery}` });

    if(generatedPills.length === 0) return;

    container.innerHTML = generatedPills.map(p => `
        <span class="tag-pill">
            ${p.val}
            <button data-type="${p.type}" data-val="${p.original ? p.original : p.val}">&times;</button>
        </span>
    `).join('');
}

/* ==========================================================================
   SHOPPING BAG (CART) AND WISHLIST LOGIC OVERHEAD MANAGEMENT SYSTEM
   ========================================================================== */
function addToCart(productId, quantity = 1, selectedSize = null, selectedColor = null) {
    const product = PRODUCT_DATASET.find(p => p.id === productId);
    if(!product || product.stock === 0) {
        spawnToastNotification("Target structural fashion allocation asset is unavailable.");
        return;
    }

    // Assign fallback metrics configurations if missing from explicit quick view modals
    const size = selectedSize || product.sizes[0];
    const color = selectedColor || product.colors[0];

    // Build unique tracking matching key string inside shopping arrays loop mappings
    const itemMatch = appState.cart.find(item => item.id === productId && item.chosenSize === size && item.chosenColor === color);

    if(itemMatch) {
        if(itemMatch.qty + quantity > product.stock) {
            spawnToastNotification(`Atelier inventory boundary limit reached for chosen configuration.`);
            return;
        }
        itemMatch.qty += quantity;
    } else {
        appState.cart.push({
            id: productId,
            name: product.name,
            brand: product.brand,
            price: product.price,
            img: product.images[0],
            chosenSize: size,
            chosenColor: color,
            qty: quantity,
            maxStock: product.stock
        });
    }

    persistStateToStorage("cart");
    syncBadgeMetricsCounter();
    renderShoppingBagPanelContent();
    spawnToastNotification(`Added (${quantity}) metrics allocation of ${product.name} to structural bag storage ledger.`);
}

function modifyCartQty(index, delta) {
    const item = appState.cart[index];
    if(!item) return;

    if(item.qty + delta <= 0) {
        appState.cart.splice(index, 1);
        spawnToastNotification("Item component purged from transactional state ledger arrays.");
    } else if (item.qty + delta > item.maxStock) {
        spawnToastNotification("Logistics warehouse single allocation limit ceiling crossed.");
        return;
    } else {
        item.qty += delta;
    }

    persistStateToStorage("cart");
    syncBadgeMetricsCounter();
    renderShoppingBagPanelContent();
}

function removeCartItemDirectly(index) {
    if(!appState.cart[index]) return;
    appState.cart.splice(index, 1);
    persistStateToStorage("cart");
    syncBadgeMetricsCounter();
    renderShoppingBagPanelContent();
    spawnToastNotification("Asset configuration segment removed from bag registry.");
}

function clearEntireCartLedger() {
    appState.cart = [];
    appState.couponApplied = null;
    persistStateToStorage("cart");
    syncBadgeMetricsCounter();
    renderShoppingBagPanelContent();
    spawnToastNotification("Entire active shopping structural allocations purged successfully.");
}

function toggleWishlistState(productId) {
    const targetIdx = appState.wishlist.indexOf(productId);
    const product = PRODUCT_DATASET.find(p => p.id === productId);
    
    if(targetIdx > -1) {
        appState.wishlist.splice(targetIdx, 1);
        spawnToastNotification(`Removed ${product ? product.name : 'item'} from personalized wishlist.`);
    } else {
        appState.wishlist.push(productId);
        spawnToastNotification(`Pinned ${product ? product.name : 'item'} to global structured wishlist mapping arrays.`);
    }

    persistStateToStorage("wishlist");
    syncBadgeMetricsCounter();
    renderWishlistPanelContent();
    
    // Retain matching state tracking visuals across standard display elements
    const cardIcon = document.querySelector(`.product-card[data-id="${productId}"] .wishlist-card-trigger`);
    if(cardIcon) cardIcon.classList.toggle("active");
}

/* ==========================================================================
   FINANCIAL TRANSACTION MATH CALCULATION LATENCY LOGIC MODULE
   ========================================================================== */
function renderShoppingBagPanelContent() {
    const wrapper = document.getElementById("cart-items-wrapper");
    if(!wrapper) return;
    wrapper.innerHTML = "";

    if(appState.cart.length === 0) {
        wrapper.innerHTML = `
            <div class="empty-bag-illustration">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <p>Your tracking bag configuration is structurally vacant.</p>
            </div>
        `;
        evaluateFinancialCalculationsSummary(0);
        return;
    }

    appState.cart.forEach((item, index) => {
        const itemRow = document.createElement("div");
        itemRow.className = "cart-item-row";
        itemRow.innerHTML = `
            <a href="#" class="cart-item-img-link quick-view-target-direct" data-id="${item.id}">
                <img src="${item.img}" alt="${item.name}">
            </a>
            <div class="cart-item-details-box">
                <h4>${item.name}</h4>
                <p class="cart-item-meta-txt">Brand: <strong>${item.brand}</strong></p>
                <p class="cart-item-meta-txt">Specs: <span style="background:${item.chosenColor}; display:inline-block; width:10px; height:10px; border-radius:50%; border:1px solid #ccc;"></span> | Fit: <strong>${item.chosenSize}</strong></p>
                <div class="cart-item-price-block">
                    <span class="price-act">$${(item.price * item.qty).toFixed(2)}</span>
                    <span class="cart-item-meta-txt">($${item.price.toFixed(2)} ea)</span>
                </div>
                <div class="cart-item-action-row">
                    <div class="quantity-stepper-box">
                        <button class="cart-qty-dec-btn" data-index="${index}">-</button>
                        <input type="number" value="${item.qty}" readonly>
                        <button class="cart-qty-inc-btn" data-index="${index}">+</button>
                    </div>
                    <button class="item-delete-trash-btn" data-index="${index}">Remove</button>
                </div>
            </div>
        `;
        wrapper.appendChild(itemRow);
    });

    // Reduce metrics elements parameters mapping totals volume logic tracking arrays calculations
    const rawSubtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    evaluateFinancialCalculationsSummary(rawSubtotal);
}

function evaluateFinancialCalculationsSummary(subtotal) {
    let discountVol = 0;
    const discountRow = document.getElementById("row-discount");
    const statusText = document.getElementById("active-coupon-status");

    if(appState.couponApplied && subtotal > 0) {
        const pct = appState.availableCoupons[appState.couponApplied];
        discountVol = subtotal * pct;
        if(discountRow) discountRow.style.display = "flex";
        if(statusText) {
            statusText.className = "coupon-status-text success";
            statusText.innerText = `Code applied: ${appState.couponApplied} (-${pct*100}%)`;
        }
    } else {
        if(discountRow) discountRow.style.display = "none";
        if(statusText && !appState.couponApplied) statusText.innerText = "";
    }

    const runningBase = subtotal - discountVol;
    // GST Tax metric computation assignment matrix
    const taxVol = runningBase * 0.18;
    // Logistical threshold calculation free tier shipping limits
    const shippingVol = (runningBase >= 100 || subtotal === 0) ? 0.00 : 15.00;
    const finalTotal = runningBase + taxVol + shippingVol;

    // Direct interface manipulation execution bounds
    document.getElementById("calc-subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("calc-discount").innerText = `-$${discountVol.toFixed(2)}`;
    document.getElementById("calc-tax").innerText = `$${taxVol.toFixed(2)}`;
    document.getElementById("calc-shipping").innerText = shippingVol === 0 ? "FREE" : `$${shippingVol.toFixed(2)}`;
    document.getElementById("calc-total").innerText = `$${finalTotal.toFixed(2)}`;
    
    const checkoutSum = document.getElementById("checkout-sum-total");
    if(checkoutSum) checkoutSum.innerText = `$${finalTotal.toFixed(2)}`;
}

function renderWishlistPanelContent() {
    const wrapper = document.getElementById("wishlist-items-wrapper");
    if(!wrapper) return;
    wrapper.innerHTML = "";

    if(appState.wishlist.length === 0) {
        wrapper.innerHTML = `
            <div class="empty-bag-illustration">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <p>Your pinned wishlist structure is vacant.</p>
            </div>
        `;
        return;
    }

    appState.wishlist.forEach(id => {
        const item = PRODUCT_DATASET.find(p => p.id === id);
        if(!item) return;

        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
            <div class="cart-item-img-link quick-view-target-direct" data-id="${item.id}">
                <img src="${item.images[0]}" alt="${item.name}">
            </div>
            <div class="cart-item-details-box">
                <h4>${item.name}</h4>
                <span class="price-act">$${item.price.toFixed(2)}</span>
                <div class="cart-item-action-row" style="margin-top:12px;">
                    <button class="btn btn-primary wishlist-move-to-bag-btn" data-id="${item.id}" style="padding:6px 12px; font-size:0.75rem;" ${item.stock === 0 ? 'disabled' : ''}>
                        ${item.stock === 0 ? 'OOS' : 'Add to Bag'}
                    </button>
                    <button class="item-delete-trash-btn wishlist-purge-item-btn" data-id="${item.id}">&times; Purge</button>
                </div>
            </div>
        `;
        wrapper.appendChild(row);
    });
}

function syncBadgeMetricsCounter() {
    const cCount = document.getElementById("cart-count");
    const pCount = document.getElementById("cart-panel-count");
    const wCount = document.getElementById("wishlist-count");
    const wpCount = document.getElementById("wishlist-panel-count");

    // Reduce logic computed sums over units arrays total parameters
    const totalItemsVolume = appState.cart.reduce((acc, obj) => acc + obj.qty, 0);

    if(cCount) cCount.innerText = totalItemsVolume;
    if(pCount) pCount.innerText = totalItemsVolume;
    if(wCount) wCount.innerText = appState.wishlist.length;
    if(wpCount) wpCount.innerText = appState.wishlist.length;
}

/* ==========================================================================
   PRODUCT DYNAMIC EXPANDED QUICK VIEW MODAL COMPONENT ENGINE
   ========================================================================== */
function executeOpenQuickViewModal(productId) {
    const prod = PRODUCT_DATASET.find(p => p.id === productId);
    if(!prod) return;

    appState.currentViewingProduct = prod;
    
    // Inject logic array mapping indices parameters to targets structures elements
    document.getElementById("modal-brand").innerText = prod.brand;
    document.getElementById("modal-title").innerText = prod.name;
    document.getElementById("modal-category").innerText = `Shop Hierarchy Location: ${prod.category} | ${prod.gender}`;
    document.getElementById("modal-stars-metrics").innerText = "★".repeat(Math.round(prod.rating)) + "☆".repeat(5 - Math.round(prod.rating));
    document.getElementById("modal-rating-val").innerText = `(${prod.rating.toFixed(1)} Studio Calibration Points)`;
    document.getElementById("modal-description").innerText = prod.material + ". Minimalist premium cut architecture configured for high physical optimization matrix outputs.";
    document.getElementById("modal-price-current").innerText = `$${prod.price.toFixed(2)}`;
    document.getElementById("modal-material").innerText = prod.material;

    const originalPriceDom = document.getElementById("modal-price-original");
    const discountTagDom = document.getElementById("modal-discount-tag");
    
    if(prod.discount > 0) {
        if(originalPriceDom) { originalPriceDom.style.display = "inline-block"; originalPriceDom.innerText = `$${prod.originalPrice.toFixed(2)}`; }
        if(discountTagDom) { discountTagDom.style.display = "inline-block"; discountTagDom.innerText = `${prod.discount}% CLEARANCE VALUE`; }
    } else {
        if(originalPriceDom) originalPriceDom.style.display = "none";
        if(discountTagDom) discountTagDom.style.display = "none";
    }

    const stockBadge = document.getElementById("modal-stock-badge");
    if(stockBadge) {
        if(prod.stock > 0) {
            stockBadge.className = "stock-badge-pill instock";
            stockBadge.innerText = `In Stock (${prod.stock} Units Aval)`;
            document.getElementById("modal-add-to-cart-btn").removeAttribute("disabled");
        } else {
            stockBadge.className = "stock-badge-pill oos";
            stockBadge.innerText = "Logistical Exhaustion Out of Stock";
            document.getElementById("modal-add-to-cart-btn").setAttribute("disabled", "true");
        }
    }

    // Handle structural Image arrays mappings
    const mainImg = document.getElementById("modal-main-img");
    if(mainImg) mainImg.src = prod.images[0];

    const thumbStrip = document.getElementById("modal-thumbnails-container");
    if(thumbStrip) {
        thumbStrip.innerHTML = "";
        // Use fallbacks if array contains single asset tracking string
        const imagesArray = prod.images.length > 1 ? prod.images : [prod.images[0], prod.images[0]];
        imagesArray.forEach((imgSrc, i) => {
            const thumbFrame = document.createElement("div");
            thumbFrame.className = `thumb-frame ${i === 0 ? 'active' : ''}`;
            thumbFrame.innerHTML = `<img src="${imgSrc}" alt="Thumbnail mapping segment">`;
            thumbStrip.appendChild(thumbFrame);
        });
    }

    // Dynamic Sizing Rendering Options Row Generation
    const sizeWrapper = document.getElementById("modal-size-container");
    if(sizeWrapper) {
        sizeWrapper.innerHTML = prod.sizes.map((s, idx) => `
            <button class="size-opt-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
        `).join('');
    }

    // Dynamic Color Custom Configurations Palettes
    const colorWrapper = document.getElementById("modal-color-container");
    if(colorWrapper) {
        colorWrapper.innerHTML = prod.colors.map((c, idx) => `
            <button class="color-opt-blob ${idx === 0 ? 'active' : ''}" data-color="${c}" style="background-color: ${c}"></button>
        `).join('');
    }

    // Reset parameters bounds quantity counter steppers inputs value field
    document.getElementById("modal-qty-input").value = 1;

    // Dynamic tracking configuration validation pushes to local storage
    trackRecentlyViewedState(prod.id);

    // Toggle CSS classes targets layers
    document.getElementById("product-modal").classList.add("active");
}

function trackRecentlyViewedState(productId) {
    appState.recentlyViewed = appState.recentlyViewed.filter(id => id !== productId);
    appState.recentlyViewed.push(productId);
    if(appState.recentlyViewed.length > 8) appState.recentlyViewed.shift(); // Bound size limits ceiling configurations
    persistStateToStorage("recent");
    renderRecentlyViewedProducts();
}

/* ==========================================================================
   UI ELEMENT CONTROL INTERACTIVE BINDING LOGIC PATTERNS
   ========================================================================== */
function bindGlobalUIEventHandling() {
    
    // NAVIGATION FILTER TRIGGER CHANNELS MAP RUNNERS
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            appState.filters.navFilter = link.getAttribute("data-nav");
            
            // Generate standard structural routing text configurations updates
            const crumb = document.getElementById("breadcrumb");
            if(crumb) {
                crumb.innerHTML = `<li><a href="#">Home</a></li><li>Shop</li><li style="text-transform: capitalize;">${appState.filters.navFilter}</li>`;
            }
            
            executeSearchFilterSortPipeline();
            document.getElementById("nav-menu").classList.remove("active-menu");
        });
    });

    // MOBILE NAVIGATION TRIGGER ACTION MENU TOGGLES
    const mobileMenuTrigger = document.getElementById("mobile-menu-btn");
    if(mobileMenuTrigger) {
        mobileMenuTrigger.addEventListener("click", () => {
            document.getElementById("nav-menu").classList.toggle("active-menu");
        });
    }

    // SIDEBAR FILTER DRAWERS COMPONENT TOGGLES 
    const mobileFilterTrigger = document.getElementById("mobile-filter-trigger");
    const filterSidebar = document.getElementById("filter-sidebar");
    const closeFilterMobile = document.getElementById("close-filters-mobile");

    if(mobileFilterTrigger && filterSidebar) {
        mobileFilterTrigger.addEventListener("click", () => filterSidebar.classList.add("active-mobile-drawer"));
    }
    if(closeFilterMobile && filterSidebar) {
        closeFilterMobile.addEventListener("click", () => filterSidebar.classList.remove("active-mobile-drawer"));
    }

    // LIVE INTERACTIVE SELECTION BAR QUERY INPUT TRACKER
    const searchField = document.getElementById("search-input");
    if(searchField) {
        // Implement immediate reactive character processing pipeline input loop values mapping
        searchField.addEventListener("input", (e) => {
            appState.filters.searchQuery = e.target.value;
            executeSearchFilterSortPipeline();
        });
    }

    // MASTER CHECKBOX MUTATION MONITOR LOGIC ENGINE LOOP
    document.querySelectorAll('#filter-sidebar input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener("change", (e) => {
            const groupName = e.target.name;
            const targetValue = e.target.value;

            if(groupName === "gender" || groupName === "category" || groupName === "brand") {
                if(e.target.checked) {
                    appState.filters[groupName].push(targetValue);
                } else {
                    appState.filters[groupName] = appState.filters[groupName].filter(v => v !== targetValue);
                }
            } else if (e.target.id === "filter-stock") {
                appState.filters.inStockOnly = e.target.checked;
            } else if (e.target.id === "filter-sale") {
                appState.filters.onSaleOnly = e.target.checked;
            }
            executeSearchFilterSortPipeline();
        });
    });

    // RADIO COMPONENT MUTATIONS MONITOR
    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            appState.filters.minRating = parseFloat(e.target.value);
            executeSearchFilterSortPipeline();
        });
    });

    // PRICE SLIDER ENGINE METRICS
    const slider = document.getElementById("price-slider");
    const sliderLabel = document.getElementById("price-slider-val");
    if(slider) {
        slider.addEventListener("input", (e) => {
            const v = e.target.value;
            appState.filters.maxPrice = parseFloat(v);
            if(sliderLabel) sliderLabel.innerText = `Max: $${v}`;
            executeSearchFilterSortPipeline();
        });
    }

    // DYNAMIC ACCENT SIZE FIT SELECTION BUTTON STRIPS SIDEBAR
    document.querySelectorAll(".size-filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            const sizeVal = btn.getAttribute("data-size");
            if(btn.classList.contains("active")) {
                appState.filters.sizes.push(sizeVal);
            } else {
                appState.filters.sizes = appState.filters.sizes.filter(s => s !== sizeVal);
            }
            executeSearchFilterSortPipeline();
        });
    });

    // COLOR FILTER STRIP SYSTEM ASSETS HOOK
    const sidebarColorWrapper = document.getElementById("color-filter-options");
    if(sidebarColorWrapper) {
        sidebarColorWrapper.addEventListener("click", (e) => {
            const targetBlob = e.target.closest(".color-filter-blob");
            if(!targetBlob) return;
            
            targetBlob.classList.toggle("active");
            const cHex = targetBlob.getAttribute("data-color");
            
            if(targetBlob.classList.contains("active")) {
                appState.filters.colors.push(cHex);
            } else {
                appState.filters.colors = appState.filters.colors.filter(c => c !== cHex);
            }
            executeSearchFilterSortPipeline();
        });
    }

    // MASTER DROPDOWN SORT OPTION SELECT ENGINE
    const sorter = document.getElementById("sort-select");
    if(sorter) {
        sorter.addEventListener("change", (e) => {
            appState.sortOption = e.target.value;
            executeSearchFilterSortPipeline();
        });
    }

    // CLEAR APPLIED MASTER TAGS CONTAINER PIPELINE CLIPS BINDINGS ACTIONS
    const tagsWrapper = document.getElementById("active-tags-container");
    if(tagsWrapper) {
        tagsWrapper.addEventListener("click", (e) => {
            const closeBtn = e.target.closest("button");
            if(!closeBtn) return;
            
            const targetType = closeBtn.getAttribute("data-type");
            const targetVal = closeBtn.getAttribute("data-val");

            if(targetType === "gender" || targetType === "category" || targetType === "brand") {
                appState.filters[targetType] = appState.filters[targetType].filter(v => v !== targetVal);
                // Uncheck actual input elements physically
                const targetDomInput = document.querySelector(`#filter-sidebar input[name="${targetType}"][value="${targetVal}"]`);
                if(targetDomInput) targetDomInput.checked = false;
            } else if (targetType === "sizes") {
                appState.filters.sizes = appState.filters.sizes.filter(s => s !== targetVal);
                const targetSizeBtn = document.querySelector(`.size-filter-btn[data-size="${targetVal}"]`);
                if(targetSizeBtn) targetSizeBtn.classList.remove("active");
            } else if (targetType === "colors") {
                appState.filters.colors = appState.filters.colors.filter(c => c !== targetVal);
                const targetColorBlob = document.querySelector(`.color-filter-blob[data-color="${targetVal}"]`);
                if(targetColorBlob) targetColorBlob.classList.remove("active");
            } else if (targetType === "price") {
                appState.filters.maxPrice = 500;
                const pSlider = document.getElementById("price-slider");
                if(pSlider) pSlider.value = 500;
                const pLabel = document.getElementById("price-slider-val");
                if(pLabel) pLabel.innerText = "Max: $500";
            } else if (targetType === "rating") {
                appState.filters.minRating = 0;
                const radAll = document.querySelector('input[name="rating"][value="0"]');
                if(radAll) radAll.checked = true;
            } else if (targetType === "stock") {
                appState.filters.inStockOnly = false;
                const checkStk = document.getElementById("filter-stock");
                if(checkStk) checkStk.checked = false;
            } else if (targetType === "sale") {
                appState.filters.onSaleOnly = false;
                const checkSl = document.getElementById("filter-sale");
                if(checkSl) checkSl.checked = false;
            } else if (targetType === "search") {
                appState.filters.searchQuery = "";
                const searchInp = document.getElementById("search-input");
                if(searchInp) searchInp.value = "";
            }

            executeSearchFilterSortPipeline();
        });
    }

    // CLEAR ALL SIDEBAR DIALOG BUTTON CONFIGURATORS
    const masterClearFiltersBtn = document.getElementById("clear-filters-btn");
    const emptyStateResetBtn = document.getElementById("reset-filters-empty-btn");
    
    const purgeFiltersResetSequence = () => {
        appState.filters.gender = [];
        appState.filters.category = [];
        appState.filters.brand = [];
        appState.filters.sizes = [];
        appState.filters.colors = [];
        appState.filters.maxPrice = 500;
        appState.filters.minRating = 0;
        appState.filters.inStockOnly = false;
        appState.filters.onSaleOnly = false;
        appState.filters.searchQuery = "";

        // Uncheck everything in the actual DOM trees interface physically
        document.querySelectorAll('#filter-sidebar input[type="checkbox"]').forEach(i => i.checked = false);
        document.querySelectorAll('#filter-sidebar input[type="radio"]').forEach(i => i.id === "rating-all" ? i.checked = true : i.checked = false);
        document.querySelectorAll('.size-filter-btn, .color-filter-blob').forEach(i => i.classList.remove("active"));
        
        const pSlider = document.getElementById("price-slider");
        if(pSlider) pSlider.value = 500;
        const pLabel = document.getElementById("price-slider-val");
        if(pLabel) pLabel.innerText = "Max: $500";
        const searchInp = document.getElementById("search-input");
        if(searchInp) searchInp.value = "";

        executeSearchFilterSortPipeline();
        spawnToastNotification("Structural matrix filter configurations completely reset.");
    };

    if(masterClearFiltersBtn) masterClearFiltersBtn.addEventListener("click", purgeFiltersResetSequence);
    if(emptyStateResetBtn) emptyStateResetBtn.addEventListener("click", purgeFiltersResetSequence);

    // SIDE SLIDE OVERLAY MENUS VISIBILITY TOGGLES
    const bindSidebarDrawerTriggers = (triggerId, panelOverlayId, closeId, renderFunc) => {
        const trig = document.getElementById(triggerId);
        const over = document.getElementById(panelOverlayId);
        const cls = document.getElementById(closeId);

        if(trig && over) {
            trig.addEventListener("click", () => {
                if(renderFunc) renderFunc();
                over.classList.add("active");
            });
        }
        if(cls && over) {
            cls.addEventListener("click", () => over.classList.remove("active"));
        }
        if(over) {
            over.addEventListener("click", (e) => {
                if(e.target === over) over.classList.remove("active");
            });
        }
    };

    bindSidebarDrawerTriggers("cart-toggle", "cart-overlay", "cart-close-btn", renderShoppingBagPanelContent);
    bindSidebarDrawerTriggers("wishlist-toggle", "wishlist-overlay", "wishlist-close-btn", renderWishlistPanelContent);

    // DYNAMIC INTERCEPT CARD ACTION EVENTS CLICKS BUBBLING (DELEGATION MATRIX MOUNT)
    const masterGrid = document.getElementById("products-container");
    if(masterGrid) {
        masterGrid.addEventListener("click", (e) => {
            const card = e.target.closest(".product-card");
            if(!card) return;
            const pId = parseInt(card.getAttribute("data-id"));

            // Deconstruct explicit target mappings branches components
            if(e.target.closest(".wishlist-card-trigger")) {
                e.stopPropagation();
                toggleWishlistState(pId);
            } else if (e.target.closest(".quick-view-trigger")) {
                executeOpenQuickViewModal(pId);
            } else if (e.target.closest(".direct-add-cart-trigger")) {
                addToCart(pId, 1);
            }
        });
    }

    // ATTACH RECENT SECTION INTERACTIVE CLICK ACTION DELEGATION PIPELINE MANIFEST
    const recentGrid = document.getElementById("recent-products-container");
    if(recentGrid) {
        recentGrid.addEventListener("click", (e) => {
            const trigger = e.target.closest(".quick-view-trigger-recent");
            if(trigger) {
                const id = parseInt(trigger.getAttribute("data-id"));
                executeOpenQuickViewModal(id);
            }
        });
    }

    // INTERCEPT INSIDE BAG ACTIONS ELEMENT RUNTIME BUBBLING EVENTS CONTROLLER
    const cartItemsWrapper = document.getElementById("cart-items-wrapper");
    if(cartItemsWrapper) {
        cartItemsWrapper.addEventListener("click", (e) => {
            const idx = parseInt(e.target.getAttribute("data-index"));
            if(e.target.classList.contains("cart-qty-inc-btn")) {
                modifyCartQty(idx, 1);
            } else if (e.target.classList.contains("cart-qty-dec-btn")) {
                modifyCartQty(idx, -1);
            } else if (e.target.classList.contains("item-delete-trash-btn")) {
                removeCartItemDirectly(idx);
            } else if (e.target.closest(".quick-view-target-direct")) {
                const tr = e.target.closest(".quick-view-target-direct");
                const id = parseInt(tr.getAttribute("data-id"));
                document.getElementById("cart-overlay").classList.remove("active");
                executeOpenQuickViewModal(id);
            }
        });
    }

    // WISHLIST ROW PANEL INTERACTIONS HANDLERS DELEGATION LAYER
    const wishlistItemsWrapper = document.getElementById("wishlist-items-wrapper");
    if(wishlistItemsWrapper) {
        wishlistItemsWrapper.addEventListener("click", (e) => {
            const pId = parseInt(e.target.getAttribute("data-id"));
            if(e.target.classList.contains("wishlist-move-to-bag-btn")) {
                addToCart(pId, 1);
                toggleWishlistState(pId); // Move completely from one array stack space into target structural indices tracking allocation
            } else if (e.target.classList.contains("wishlist-purge-item-btn")) {
                toggleWishlistState(pId);
            } else if (e.target.closest(".quick-view-target-direct")) {
                 const tr = e.target.closest(".quick-view-target-direct");
                 const id = parseInt(tr.getAttribute("data-id"));
                 document.getElementById("wishlist-overlay").classList.remove("active");
                 executeOpenQuickViewModal(id);
            }
        });
    }

    // EXTENDED PROMO BANNER LINKS INTERACTIVE ROUTING INTERCEPTS
    document.querySelectorAll(".track-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filterTag = link.getAttribute("data-filter-tag");
            appState.filters.searchQuery = filterTag;
            const searchInp = document.getElementById("search-input");
            if(searchInp) searchInp.value = filterTag;
            executeSearchFilterSortPipeline();
            document.getElementById("shop-section").scrollIntoView({ behavior: 'smooth' });
        });
    });

    // MASTER HERO INTERNAL BANNER ACCESS LINKS EXPLICIT ROUTERS HOOKS
    const heroSaleBtn = document.getElementById("hero-sale-btn");
    if(heroSaleBtn) {
        heroSaleBtn.addEventListener("click", (e) => {
             e.preventDefault();
             appState.filters.onSaleOnly = true;
             const checkSl = document.getElementById("filter-sale");
             if(checkSl) checkSl.checked = true;
             executeSearchFilterSortPipeline();
             document.getElementById("shop-section").scrollIntoView({ behavior: 'smooth' });
        });
    }

    // COUPON APPLICATION VALIDATION REDUCERS HOOK ROUTING
    const couponBtn = document.getElementById("apply-coupon-btn");
    if(couponBtn) {
        couponBtn.addEventListener("click", () => {
            const inputVal = document.getElementById("coupon-input").value.trim().toUpperCase();
            const statusText = document.getElementById("active-coupon-status");

            if(!statusText) return;

            if(appState.availableCoupons[inputVal] !== undefined) {
                appState.couponApplied = inputVal;
                statusText.className = "coupon-status-text success";
                statusText.innerText = "Coupon token authenticated successfully.";
                renderShoppingBagPanelContent();
            } else {
                statusText.className = "coupon-status-text error";
                statusText.innerText = "Invalid verification coupon signature sequence.";
            }
        });
    }

    // CLEAR BAG TOTAL TRIGGER BARS
    const clearCartBtn = document.getElementById("clear-cart-trigger-btn");
    if(clearCartBtn) clearCartBtn.addEventListener("click", clearEntireCartLedger);

    // MODAL WINDOW DE-ACTIVATION LAYER CLOSERS TARGET ARCHITECTURE TRACKING 
    const setupModalCloserElement = (closeBtnId, backdropId) => {
        const btn = document.getElementById(closeBtnId);
        const bdrop = document.getElementById(backdropId);
        if(btn && bdrop) {
            btn.addEventListener("click", () => bdrop.classList.remove("active"));
            bdrop.addEventListener("click", (e) => { if(e.target === bdrop) bdrop.classList.remove("active"); });
        }
    };
    setupModalCloserElement("product-modal-close", "product-modal");
    setupModalCloserElement("checkout-modal-close", "checkout-modal");
    setupModalCloserElement("success-close-action-btn", "order-success-modal");

    // MODAL QUICK VIEW SPECIFIC ELEMENTS LOGIC HOOK TRACKS INTERCHANGEABLY
    const prodModalSurface = document.getElementById("product-modal");
    if(prodModalSurface) {
        
        // Thumbnail strip slide image exchange interactions triggers pipeline
        const thumbStrip = document.getElementById("modal-thumbnails-container");
        if(thumbStrip) {
            thumbStrip.addEventListener("click", (e) => {
                const f = e.target.closest(".thumb-frame");
                if(!f) return;
                document.querySelectorAll(".thumb-frame").forEach(thumb => thumb.classList.remove("active"));
                f.classList.add("active");
                document.getElementById("modal-main-img").src = f.querySelector("img").src;
            });
        }

        // Image Magnification/Hover Zoom on frame coordinates vector mapping
        const zoomFrame = document.querySelector(".main-zoom-display-frame");
        const zoomImg = document.getElementById("modal-main-img");
        if(zoomFrame && zoomImg) {
            zoomFrame.addEventListener("mousemove", (e) => {
                const rect = zoomFrame.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                zoomImg.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
            });
            zoomFrame.addEventListener("mouseleave", () => {
                zoomImg.style.transformOrigin = "center center";
            });
        }

        // Stepper parameters calculation controllers inside expanded product layout modals views
        document.getElementById("modal-qty-inc").addEventListener("click", () => {
            const input = document.getElementById("modal-qty-input");
            let v = parseInt(input.value);
            if(appState.currentViewingProduct && v < appState.currentViewingProduct.stock) {
                input.value = v + 1;
            } else {
                 spawnToastNotification("Atelier stock distribution ceiling boundary constraint hit.");
            }
        });
        document.getElementById("modal-qty-dec").addEventListener("click", () => {
            const input = document.getElementById("modal-qty-input");
            let v = parseInt(input.value);
            if(v > 1) input.value = v - 1;
        });

        // Size & Color internal state toggle markers adjustments elements arrays bindings
        document.getElementById("modal-size-container").addEventListener("click", (e) => {
            const b = e.target.closest(".size-opt-btn");
            if(!b) return;
            document.querySelectorAll(".size-opt-btn").forEach(btn => btn.classList.remove("active"));
            b.classList.add("active");
        });
        document.getElementById("modal-color-container").addEventListener("click", (e) => {
            const b = e.target.closest(".color-opt-blob");
            if(!b) return;
            document.querySelectorAll(".color-opt-blob").forEach(blob => blob.classList.remove("active"));
            b.classList.add("active");
        });

        // Add to Bag action confirmation channel pipeline sequence invocation block inside single modals layout grids frames
        document.getElementById("modal-add-to-cart-btn").addEventListener("click", () => {
            if(!appState.currentViewingProduct) return;
            
            const activeSizeBtn = document.querySelector(".size-opt-btn.active");
            const activeColorBlob = document.querySelector(".color-opt-blob.active");
            
            const chosenSize = activeSizeBtn ? activeSizeBtn.getAttribute("data-size") : null;
            const chosenColor = activeColorBlob ? activeColorBlob.getAttribute("data-color") : null;
            const purchaseQuantity = parseInt(document.getElementById("modal-qty-input").value);

            addToCart(appState.currentViewingProduct.id, purchaseQuantity, chosenSize, chosenColor);
            prodModalSurface.classList.remove("active");
        });

        // Toggle wishlist inside modal asset parameters rows directly
        document.getElementById("modal-wishlist-toggle-btn").addEventListener("click", () => {
            if(appState.currentViewingProduct) toggleWishlistState(appState.currentViewingProduct.id);
        });
    }

    // CHECKOUT SIMULATION TRIGGERS LAYERS GATEWAYS EXECUTIONS
    const checkoutTriggerBtn = document.getElementById("checkout-trigger-btn");
    const checkoutModalBackdrop = document.getElementById("checkout-modal");
    if(checkoutTriggerBtn && checkoutModalBackdrop) {
        checkoutTriggerBtn.addEventListener("click", () => {
            if(appState.cart.length === 0) {
                spawnToastNotification("Cannot route verification transaction pipelines with empty asset volumes bag states.");
                return;
            }
            document.getElementById("cart-overlay").classList.remove("active");
            checkoutModalBackdrop.classList.add("active");
        });
    }

    const checkoutFormPipeline = document.getElementById("checkout-form-pipeline");
    if(checkoutFormPipeline) {
        checkoutFormPipeline.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Mask interface processing actions simulations parameters with loading triggers intervals
            checkoutModalBackdrop.classList.remove("active");
            const globalLoaderSurface = document.getElementById("loading-spinner");
            
            if(globalLoaderSurface) globalLoaderSurface.classList.remove("hide-loader");

            setTimeout(() => {
                if(globalLoaderSurface) globalLoaderSurface.classList.add("hide-loader");
                
                // Complete operations allocations calculations flushes reset loops pipelines targets values adjustments
                appState.cart = [];
                appState.couponApplied = null;
                persistStateToStorage("cart");
                syncBadgeMetricsCounter();

                // Compute custom pseudo token random identity parameter context string configuration signatures tracking keys
                const tokenRoutingHash = `VGC-${Math.floor(100000 + Math.random() * 900000)}-2026`;
                document.getElementById("success-order-token").innerText = tokenRoutingHash;

                checkoutFormPipeline.reset();
                document.getElementById("order-success-modal").classList.add("active");
            }, 1200);
        });
    }

    // NEWSLETTER ENLISTMENT SUBMISSION LEDGER SIMULATIONS CAPTURES HOOK RULES MAPPINGS
    const newsletterForm = document.getElementById("newsletter-form");
    if(newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            spawnToastNotification("Cryptographic ledger verification handshake secure. Priority access initialized.");
            newsletterForm.reset();
        });
    }

    // DARK SYSTEM INTERFACES LIGHT PARAMETERS MODE TOGGLE CONTROL HANDLERS STACKS
    const themeBtn = document.getElementById("dark-mode-toggle");
    if(themeBtn) {
        themeBtn.addEventListener("click", () => {
            appState.isDarkMode = !appState.isDarkMode;
            const sunIcon = document.querySelector(".sun-icon");
            const moonIcon = document.querySelector(".moon-icon");

            if(appState.isDarkMode) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("vgc_theme_dark", "true");
                if(sunIcon) sunIcon.style.display = "none";
                if(moonIcon) moonIcon.style.display = "block";
                spawnToastNotification("Low ambient dark space calibrated context active.");
            } else {
                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("vgc_theme_dark", "false");
                if(sunIcon) sunIcon.style.display = "block";
                if(moonIcon) moonIcon.style.display = "none";
                spawnToastNotification("Standard luminance spectrum theme parameters active.");
            }
        });
    }

    // FLOATING ACTION SCROLL COMPONENT COORDINATION LOGIC MOUNT MONITOR LINES
    const bttBtn = document.getElementById("back-to-top-btn");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 400) {
            if(bttBtn) bttBtn.classList.add("visible");
        } else {
            if(bttBtn) bttBtn.classList.remove("visible");
        }
    });
    if(bttBtn) {
        bttBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // BUTTON RIPPLE DYNAMIC STRUCTURAL VISUAL LAYER INSTANTIATION EXECUTION TRACKS
    document.body.addEventListener("click", (e) => {
        const rippleElementTarget = e.target.closest(".btn-ripple");
        if(!rippleElementTarget) return;

        const circleRippleLayer = document.createElement("span");
        circleRippleLayer.className = "ripple-effect";
        
        const boundariesMetricsRect = rippleElementTarget.getBoundingClientRect();
        const computedDiameterSizeDimension = Math.max(boundariesMetricsRect.width, boundariesMetricsRect.height);
        
        circleRippleLayer.style.width = circleRippleLayer.style.height = `${computedDiameterSizeDimension}px`;
        circleRippleLayer.style.left = `${e.clientX - boundariesMetricsRect.left - computedDiameterSizeDimension / 2}px`;
        circleRippleLayer.style.top = `${e.clientY - boundariesMetricsRect.top - computedDiameterSizeDimension / 2}px`;
        
        // Purge memory allocations context tree leaks cleanly
        const existingRipple = rippleElementTarget.querySelector(".ripple-effect");
        if(existingRipple) existingRipple.remove();

        rippleElementTarget.appendChild(circleRippleLayer);
    });
}

/* ==========================================================================
   AUXILIARY ACCORDION INTERACTION BUILDER FUNCTIONS
   ========================================================================== */
function buildFaqAccordionInteractions() {
    const faqContainer = document.querySelector(".faq-accordion-container");
    if(!faqContainer) return;

    faqContainer.addEventListener("click", (e) => {
        const trigger = e.target.closest(".faq-trigger");
        if(!trigger) return;

        const targetItemRow = trigger.closest(".faq-item");
        const stateActiveAlready = targetItemRow.classList.contains("active");

        document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("active"));
        if(!stateActiveAlready) targetItemRow.classList.add("active");
    });
}

function updateContextCountersLabel(resultsCount) {
    const label = document.getElementById("product-results-count");
    if(label) {
        label.innerText = `Identification Pipeline State Matrix Grid Content Allocation Matches: (${resultsCount} Selected Models Catalogued)`;
    }
}

/* ==========================================================================
   DYNAMIC TOAST FEEDBACK NOTIFICATION ARCHITECTURE PIPELINE STACK RUNNER
   ========================================================================== */
function spawnToastNotification(messageContextString) {
    const container = document.getElementById("toast-container");
    if(!container) return;

    const toastElementBox = document.createElement("div");
    toastElementBox.className = "toast-msg";
    toastElementBox.innerText = messageContextString;

    container.appendChild(toastElementBox);

    // Auto cleanup memory frame context sequences loops
    setTimeout(() => {
        toastElementBox.classList.add("dismiss");
        toastElementBox.addEventListener("animationend", () => {
            toastElementBox.remove();
        });
    }, 3000);
}