// =======================
// Cau 1: Constructor Product
// =======================
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// =======================
// Cau 2: Khoi tao mang products (it nhat 6 san pham, >= 2 danh muc)
// =======================
const products = [
    new Product(1, "iPhone 15 Pro", 35000000, 5, "Phone", true),
    new Product(2, "Samsung Galaxy S24", 28000000, 0, "Phone", true),
    new Product(3, "MacBook Air M2", 32000000, 3, "Laptop", true),
    new Product(4, "Dell XPS 13", 29000000, 2, "Laptop", false),
    new Product(5, "AirPods Pro", 6500000, 10, "Accessories", true),
    new Product(6, "Apple Watch", 12000000, 0, "Accessories", true)
];

// =======================
// Cau 3: Mang moi chi chua name, price
// =======================
const nameAndPrice = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log("Cau 3:", nameAndPrice);

// =======================
// Cau 4: Loc san pham con hang (quantity > 0)
// =======================
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Cau 4:", inStockProducts);

// =======================
// Cau 5: Co it nhat 1 san pham gia > 30000000?
// =======================
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Cau 5:", hasExpensiveProduct);

// =======================
// Cau 6: Tat ca san pham Accessories co dang ban?
// =======================
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

console.log("Cau 6:", allAccessoriesAvailable);

// =======================
// Cau 7: Tinh tong gia tri kho hang
// =======================
const totalInventoryValue = products.reduce(
    (total, p) => total + p.price * p.quantity,
    0
);
console.log("Cau 7 - Tong gia tri kho:", totalInventoryValue);

// =======================
// Cau 8: for...of in ten - danh muc - trang thai
// =======================
console.log("Cau 8:");
for (const product of products) {
    console.log(
        product.name +
        " - " +
        product.category +
        " - " +
        (product.isAvailable ? "Dang ban" : "Ngung ban")
    );
}

// =======================
// Cau 9: for...in in ten thuoc tinh va gia tri
// =======================
console.log("Cau 9:");
for (const key in products[0]) {
    console.log(key + ": " + products[0][key]);
}

// =======================
// Cau 10: Danh sach ten san pham dang ban va con hang
// =======================
const availableAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("Cau 10:", availableAndInStockNames);
