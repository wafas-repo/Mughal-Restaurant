function renderMenu() {


    const menu = document.createElement("div");
    menu.id = "menuDiv"

    const titleDiv = document.createElement('div');
    titleDiv.id = "titleDiv"

    const menuText = document.createElement('div');
    menuText.id = "menu-text"

    const h1 = document.createElement('h1');
    h1.innerHTML = 'OUR MENU'
    h1.id = "menu-title"

    menuText.appendChild(h1);
    titleDiv.appendChild(menuText);

    const menuSection = document.createElement("section");
    const menuArray = [];
    const menuList = [
        "Appetizers",
        "Karahi",
        "Grill",
        "Curries",
        "Breads",
        "Beverages",
        "Desserts"

    ];

    function menuGenerator(itemName, itemDescription, price, type) {
        const menuItemContainer = document.createElement("div");
        const itemTitlePart = document.createElement("div");
        const menuItemName = document.createElement("h3");
        const menuItemDescription = document.createElement("p");
        const seperator = document.createElement("span");
        const menuItemPrice = document.createElement("p");

        menuItemContainer.classList.add("menu-item-container");

        menuItemName.textContent = itemName;
        menuItemPrice.textContent = price;
        menuItemDescription.textContent = itemDescription;

        itemTitlePart.append(menuItemName, seperator, menuItemPrice);
        menuItemContainer.append(itemTitlePart, menuItemDescription);

        menuArray[type].append(menuItemContainer);
    }

    for (let i = 0; i < 7; i++) {
        const node = document.createElement("div");
        const nodeTitle = document.createElement("h2");
        nodeTitle.innerText = menuList[i];
        node.classList.add("menuTypes");
        node.append(nodeTitle);
        menuArray.push(node);
    }

    menuSection.classList.add("menu-section");
    
    menu.appendChild(titleDiv)
    menu.appendChild(menuSection);

    menuArray.forEach((item) => menuSection.append(item));

    (function () {
        menuGenerator(
            "Vegetable Pakora (6pc)",
            "Vegetables seasoned with chef's special spices, battered in gram flour & deep fried",
            6.99,
            0
        );
        menuGenerator(
            "Lahori Fish",
            "Strips of fish are coated in a batter made of gram flour and some authentic South Asian spices and then deep-fried in hot oil till crunchy.",
            12.99,
            0
        );
        menuGenerator(
            "Masala Fries",
            "Crispy french fries seasoned with garam masala seasoning.",
            4.99,
            0
        );
        menuGenerator(
            "Vegetable Samosa (2pc)",
            "Samosa stuffed with vegetables and potatoes.",
            6.49,
            0
        );
        menuGenerator(
            "Beef Samosa",
            "Samosa stuffed with spiced minced beef and onions.",
            7.49,
            0
        );
        menuGenerator(
            "BBQ Platter", 
            "An assortment of our signature BBQ items: Reshmi kabab, Malai Tikka, Chicken Tikka, Beef Bihari Kabab, Seekh Kabab & short Ribs.", 
            57.99, 
            2
        );
        menuGenerator(
            "Tandoori Chicken",
            "Quarter chicken leg marinated in traditional tandoori sauce",
            8.99,
            2
        );
        menuGenerator(
            "Chicken Tikka",
            "Tandoori style bbq. Marinated in our in house special spices. Spicy and flavourful Bone-in pieces of leg and thigh. Goes well with naan and chutney",
            17.49,
            2
        );
        menuGenerator(
            "Seekh Kabab",
            "The traditional seekh of beef mince dons, a flavourful garb of fresh cilantro, cardamom, kebab spices and red chilli powder, cooked on a skewer in a tandoor.",
            15.99,
            2
        );
        menuGenerator(
            "Beef Bihari Kabab",
            "Strips of beef marinated in raw papaya, onions, ginger yogurt, and mustard oil.",
            15.99,
            2
        );
        menuGenerator(
            "Chicken Karahi",
            "Tomato based, traditional Lahori style Made with yogurt, tomatoes and fresh spices",
            28.99,
            1
        );
        menuGenerator(
            "Lamb Karahi",
            "Fresh Lamb, Tomato based, traditional Lahori style, Made with yogurt, tomatoes and fresh",
            33.99,
            1
        );
        menuGenerator(
            "Fish Karahi",
            "A treat for the seafood lovers. Our special fish karahi is made to perfection with boneless chunks of fish cooked in onions, tomatoes and mild spices. A treat for the whole family.",
            24.99,
            1
        );
        menuGenerator(
            "Kabab Karahi",
            "A traditional gravy for the BBQ lovers. With your choice of Beef or Chicken Kababs cooked in onions, tomato sauce and green chillies. A unique taste.",
            24.99,
            1
        );
        menuGenerator(
            "Butter Chicken",
            "Our signature Butter Chicken is marinated overnight, oven baked and cooked in a delicious creamy tomato sauce.",
            17.49,
            3
        );
        menuGenerator(
            "Chicken Tikka Masala",
            "Boneless chicken cooked with onions, green peppers, roasted cumin, garlic and ginger in a tomato based sauce.",
            17.49,
            3
        );
        menuGenerator(
            "Nihari",
            "A tender portion of beef slow cooked in thick aromatic gravy",
            16.49,
            3
        );
        menuGenerator(
            "Dum Ka Keema",
            "Finely minced beef cooked with yellow onions, cilantro, roma tomatoes, light spices and chopped ginger. ",
            15.99,
            3
        );
        menuGenerator(
            "Lahori Channa",
            "A trademark of Lahore: chickpeas made to perfection in traditional Lahori Mughalia spices. A perfect combination with special butter naan or a deep fried crispy poori paratha.",
            14.99,
            3
        );
        menuGenerator(
            "Tandoori Naan",
            "House Naan bread cooked in tandoor.",
            2.49,
            4
        );
        menuGenerator(
            "Butter Naan",
            "House Naan bread cooked in tandoor and buttered.",
            2.99,
            4
        );
        menuGenerator(
            "Garlic Naan",
            "House Naan bread cooked in tandoor with garlic, cilantro and buttered.",
            3.49,
            4
        );
        menuGenerator(
            "Gulab Jamun (3pc)",
            "An all-time traditional favourite of Southeast Asia.",
            6.99,
            5
        );
        menuGenerator(
            "Kheer",
            "Traditional rice pudding cooked fresh in house served in clay dish.",
            6.99,
            5
        );
        menuGenerator(
            "Mango Ice Cream",
            "Fresh mango ice cream with mint leaves for garnish.",
            5.99,
            5
        );
        menuGenerator(
            "Soft Drinks",
            "",
            1.99,
            6
        );
        menuGenerator(
            "Pakola",
            "",
            2.99,
            6
        );
        menuGenerator(
            "Mango Lassi",
            "Yogurt drink made with mango pulp.",
            5.99,
            6
        );
    })();


    return menu
}

export default renderMenu;