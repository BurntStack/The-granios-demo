const productPhoto = (name) => `/products/${name}`;
const images = {
  pizza: productPhoto("pizza.jpg"),
  paneerPizza: productPhoto("pizza.jpg"),
  chickenPizza: productPhoto("pizza.jpg"),
  fries: productPhoto("fries.jpg"),
  wings: "/Spicy barbeque wings.png",
  burger: productPhoto("burger.png"),
  sandwich: productPhoto("sandwich.jpg"),
  wrap: productPhoto("sandwich.jpg"),
  maggi: productPhoto("maggi.jpg"),
  shake: productPhoto("kitkat-shake.jpg"),
  brownie: productPhoto("brownie-sundae.jpg"),
};
const productImages = {
  1: images.pizza,
  2: images.paneerPizza,
  3: images.pizza,
  4: images.pizza,
  5: images.pizza,
  6: images.chickenPizza,
  7: images.chickenPizza,
  8: images.chickenPizza,
  9: images.fries,
  10: images.fries,
  11: images.wings,
  12: images.wings,
  13: images.burger,
  14: images.burger,
  15: images.sandwich,
  16: images.sandwich,
  17: images.sandwich,
  18: images.wrap,
  19: images.wrap,
  20: images.maggi,
  21: images.maggi,
  22: images.shake,
  23: images.shake,
  24: images.brownie,
};
const item = (id, name, category, price, image, description) => ({ id, name, category, price, image: productImages[id] || image, description });
export const menuItems = [
 item(1,"Granios Special Pizza","Pizza",299,images.pizza,"Garlic, mushroom, jalapeño, vegetables and house sauces."), item(2,"Paneer & Tandoori Pizza","Pizza",299,images.paneerPizza,"Paneer, vegetables and a bold tandoori finish."), item(3,"Double Cheese Pizza","Pizza",299,images.pizza,"A generously cheesy pizza with spicy vegetable toppings."), item(4,"Cheesy Margherita","Pizza",379,images.pizza,"A classic cheese-forward pizza with house pizza sauce."), item(5,"Garden Fresh Veg Pizza","Pizza",389,images.paneerPizza,"Tomato, onion, capsicum and cheese."), item(6,"Granios Special Chicken Pizza","Pizza",399,images.chickenPizza,"Chicken, garlic, mushroom, jalapeño and house sauces."), item(7,"Peri Peri Chicken Pizza","Pizza",399,images.chickenPizza,"Chicken, spicy peri peri sauce and golden corn."), item(8,"Angry Mexican Chicken Pizza","Pizza",399,images.chickenPizza,"Salsa, sweet corn, jalapeño, chicken and cheese."),
 item(9,"Peri Peri French Fries","Starters",129,images.fries,"Crispy fries tossed in a bold peri peri seasoning."), item(10,"Potato Wedges","Starters",129,images.fries,"Golden wedges seasoned with aromatic herbs and spices."), item(11,"Crispy Chicken Wings","Starters",199,images.wings,"Seasoned, golden-fried wings with a juicy centre."), item(12,"Chicken Popcorn","Starters",179,images.wings,"Bite-sized crunchy chicken pieces, fried fresh."),
 item(13,"Chicken Granios King Cheese Burger","Burgers",249,images.burger,"Texas-style cheese and a double chicken patty."), item(14,"Angry Mexican Tandoori Burger","Burgers",199,images.burger,"Chicken patty, salsa, jalapeño and fresh vegetables."), item(15,"Granios Special Sandwich [Triple]","Sandwiches",179,images.sandwich,"Triple-layer grilled sandwich with veg patty and house sauces."), item(16,"Granios Special Chicken Sandwich [Triple]","Sandwiches",199,images.sandwich,"A stacked grilled chicken sandwich with vegetables and sauce."), item(17,"Garlic Paneer Sandwich","Sandwiches",179,images.sandwich,"Grilled sandwich with paneer and garlic tikka."),
 item(18,"Peri Peri Crunchy Chicken Wrap","Wraps",199,images.wrap,"Crunchy chicken with tangy peri peri sauce."), item(19,"Paneer Tandoori Kathi Wrap","Wraps",179,images.wrap,"Paneer tikka, vegetables and sauces wrapped warm."), item(20,"Cheese Lovers Maggi","Maggi",149,images.maggi,"Comforting Maggi cooked with cheese, Indian-style."), item(21,"Desi Paneer Maggi","Maggi",159,images.maggi,"Vegetables, paneer and desi sauces."), item(22,"KitKat Shake","Shakes & Desserts",259,images.shake,"A thick, chocolatey blended shake."), item(23,"Snicker Shake","Shakes & Desserts",259,images.shake,"Creamy shake with a nutty caramel note."), item(24,"Hot Fudge Brownie Sundae","Shakes & Desserts",229,images.brownie,"Brownie, vanilla ice cream and warm fudge sauce.")
];
