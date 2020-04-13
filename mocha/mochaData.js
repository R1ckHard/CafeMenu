const services = [
    {
        title: 'Burger King',
        mainDishes: 5,
        about: 'lorem ipsum',
        id: Math.random(),
        logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/3/3a/Burger_King_Logo.svg/1200px-Burger_King_Logo.svg.png',
    },

    {
        title: 'Mc Donalds',
        mainDishes: 4,
        about: 'lorem ipsum',
        id: Math.random(),
        logo: 'https://f0.pngfuel.com/png/571/250/mcdonalds-logo-png-clip-art.png',
    },
    {
        title: 'KFC',
        mainDishes: 3,
        about: 'lorem ipsum',
        id: Math.random(),
        logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
    },
];
const menu = [
    {
        title: 'Burger King',
        menuList: [
            {
                name: 'Large French Fries',
                img: 'https://cdn.sanity.io/images/czqk28jt/prod_bk/1dbb82ff44a3d7c2f3d8f6e17ac675e100c4d56b-870x570.png?w=320&fm=webp&q=40&fit=max',
                description: 'Classic Large French Fries',
                price: '1',
                id: Math.random(),
            },
            {
                name: 'Double Whoper',
                img: 'https://cdn.sanity.io/images/czqk28jt/prod_bk/385cc241b6a396cbbf72914008ad6f7e6a18ccf6-592x344.png?w=1280&fm=webp&q=40&fit=max',
                description: '1 Flame Grilled Double Whopper ',
                price: '3',
                id: '2',
            },
            {
                name: 'Bogo Whoper',
                img: 'https://cdn.sanity.io/images/czqk28jt/prod_bk/193a368360a0b41802848b08e77d7a2b4ff43908-750x469.png?w=1280&fm=webp&q=40&fit=max',
                description: 'Buy One Whopper, Get One Free',
                price: '5',
                id: Math.random(),
            },

            {
                name: 'Crispy Chicken Sandwich Meal',
                img: 'https://toppng.com/uploads/preview/spicy-crispy-chicken-sandwich-11549663243blu5lqepri.png',
                description: '1 Crispy Chicken Sandwich, 1 Small French Fries, 1 Small Soft Drink',
                price: '4',
                id: Math.random(),
            },

            {
                name: '2 Original Chicken Sandwich & 2 Small Fries',
                img: 'https://hip2save.com/wp-content/uploads/2012/09/screen-shot-2012-09-07-at-1-04-05-pm.png?resize=478%2C138&strip=all',
                description: 'very tasty',
                price: '4.99',
                id: Math.random(),
            }
            ,
        ],

    },
    {
        title: 'Mc Donalds',
        menuList: [
            {
                name: 'Big Mac',
                img: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Big-Mac.jpg?Category_Desktop',
                description: 'You now this',
                price: '4',
                id: Math.random(),
            },

            {
                name: 'Small World Famous Fries',
                img: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Fries-Small-Medium.jpg?Category_Desktop',
                description: 'Mmm very tasty!',
                price: '1',
                id: Math.random(),
            },

            {
                name: 'Sausage Burrito',
                img: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Sausage-Burrito.jpg?Category_Desktop',
                description: 'Tako, tako! Burrito, burrito!',
                price: '5',
                id: Math.random(),
            },


            {
                name: 'Quarter Pounder* with Cheese',
                img: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg?Category_Desktop',
                description: 'Cheeeeeeeeeeese!',
                price: '4',
                id: Math.random(),
            },

            {
                name: 'Coca-Cola',
                img: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Coca-Cola-Classic-Small.jpg?Category_Desktop',
                description: 'Still better than Pepsi!',
                price: '2',
                id: Math.random(),

            },
        ],
    },
];

module.exports = {
    menu,
    services,
};





