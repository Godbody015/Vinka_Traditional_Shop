/*==================================================
VINKA TRADITIONAL SHOP — products + WhatsApp helper
To add a product: copy one block below, change the details.
Image files live in assets/images/
==================================================*/
const WA_NUMBER = "27603486752";

function waLink(text){
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
}

const PRODUCTS = [
  {
    id: "beaded-drop-earrings",
    name: "Beaded Drop Earrings",
    category: "Jewellery",
    image: "assets/images/earrings-yellow.jpg",
    description: "Handmade beaded drop earrings. Message us on WhatsApp for colours, sizes and availability."
  },
  {
    id: "beaded-tote-bag",
    name: "Beaded Tote Bag",
    category: "Handmade Products",
    image: "assets/images/handmade-beaded-tote.jpg",
    description: "A handmade beaded tote bag. Message us on WhatsApp for colours, sizes and availability."
  },
  {
    id: "lion-print-shirt",
    name: "Lion Print Shirt",
    category: "Traditional Clothing",
    image: "assets/images/clothing-lion-shirt.jpg",
    description: "A traditional lion print shirt. Message us on WhatsApp for sizes and availability."
  },
  {
    id: "red-sandals",
    name: "Red Handmade Sandals",
    category: "Accessories",
    image: "assets/images/accessories-sandals-red.jpg",
    description: "Handmade sandals. Message us on WhatsApp for sizes and availability."
  },
  {
    id: "hand-chain",
    name: "Hand Chain",
    category: "Jewellery",
    image: "assets/images/jewellery-hand-chain.jpg",
    description: "A hand chain piece. Message us on WhatsApp for options and availability."
  }
];
