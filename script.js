const orders = [
  { id: 1, customer: "Jhon", items: [{ name: "Ноутбук", price: 50000, quantity: 1 }, { name: "Мышь", price: 1500, quantity: 2 },], },
  { id: 2, customer: "Alan", items: [{ name: "Телефон", price: 30000, quantity: 1 }, { name: "Чехол", price: 1000, quantity: 3 },], },
  { id: 3, customer: "Jane", items: [{ name: "Клавиатура", price: 2500, quantity: 1 }, { name: "Монитор", price: 12000, quantity: 1 },], },
];

let totalSum = 0
let productMaxSum = 0
let bestCustomer = ""
const productList = {}

for (let i = 0; i < orders.length; i++) {
  const order = orders[i];
  let productTotalSum = 0

  for (let j = 0; j < order.items.length; j++) {
    const item = order.items[j];
    productTotalSum += (item.price * item.quantity)

    if (productList[item.name]) {
      productList[item.name] += item.quantity;
    } else {
      productList[item.name] = item.quantity;
    }

    if (productTotalSum > productMaxSum) {
      productMaxSum = productTotalSum
      bestCustomer = order.customer
    }
  }
  console.log(`Заказ ${order.id} (${order.customer}): ${productTotalSum} руб.`)
  totalSum += productTotalSum
}

let totalSelling = 0
let bestSelling = ""
let popularProduct = 0


for (const productName in productList) {
  const quantity = productList[productName];
  totalSelling += quantity

  if (quantity > popularProduct) {
    popularProduct = quantity
    bestSelling = productName
  }
}

console.log("\n=== Итоговые результаты ===")
console.log(`Общий доход магазина: ${totalSum} руб.`)
console.log(`Самый дорогой заказ: ${productMaxSum} руб. (${bestCustomer})`)

console.log("\n=== Список проданных товаров ===")
let productListText = ""
for (const productName in productList) {
  productListText += `${productName}: ${productList[productName]} шт.\n`
}
console.log(productListText)
console.log(`Общее кол-во проданых товаров: ${totalSelling} шт.`)
console.log(`Самый популярный товар: ${bestSelling} (${popularProduct})`)