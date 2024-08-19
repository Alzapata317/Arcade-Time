export interface Menu {
    key: number,
    name: string,
    description: string,
    price: number
};

export const Entrees: Menu[] = [
    {key: 1, name: "Chicken Tenders", description: "Chicken Tenders Dip or Toss with Mild, Medium, Hot, BBQ, Honey Hot Served with French Fries", price: 14},
    {key: 2, name: "Chicken Wings", description: "8 Chicken Wings Celery & Blue Cheese Dip or Toss with Mild, Medium, Hot, BBQ, Honey Hot", price: 15},
    {key: 3, name: "Chicken Fettuccine Alfredo", description: "Grilled Chicken / Fettuccine / Broccoli Creamy Alfredo Sauce Garnished with Sour Dough Bread", price: 15},
    {key: 4, name: "BBQ Chicken Sandwich", description: "Grilled BBQ Chicken Breast Cheddar Cheese / Red Onion / Tomato On a Brioche Bun Served with French Fries", price: 17},
    {key: 5, name: "Cajun Chicken Pasta", description: "Penne Pasta with Blackened Chicken Tomatoes, Mushrooms Creamy Spicy Alfredo sauce Garnished with Sour Dough Bread", price: 15},
    {key: 6, name: "Bowtie Mac & Cheese", description: "Bowtie Pasta with Homemade Cheese Sauce Topped with Bread Crumbs (Add Chicken - $4)", price: 13},
    {key: 7, name: "Chicken Quesadilla", description: "Grilled Chicken / Cheese / Pico de Gallo on a Flour Tortilla Sour Cream and Guac on the side", price: 15},
    {key: 8, name: "Spicy Sausage Penne", description: "Penne Pasta with Sausage Spicy Pomodoro Sauce Garnished with Sour Dough Bread", price: 16},
    {key: 9, name: "Neon Sliders", description: "5 Brisket Blend Mini Beef Patties Served with American Cheese on Multi Color Buns", price: 25},
    {key: 10, name: "Ahi Tuna Steak Sandwich", description: "Blackened Ahi Tuna Steak Tomato, Red Onion, Pickle Served with French Fries", price: 17},
    {key: 11, name: "Ahi Tuna Poke Bowl", description: "Ahi Tuna, Carrots, Scallions Served on a bed of Rice Noodles", price: 18},
    {key: 12, name: "Lemon & Herb Salmon", description: "Antarctic Salmon with White Wine, Lemon & Herbs Sauce Served with Coconut Rice & Vegetables", price: 23},
    {key: 13, name: "Cuban Sandwich", description: "Ham, Roasted Pork, Swiss Cheese, Pickles, and Mustard Served with French Fries", price: 13},
    {key: 14, name: "Fish & Chips", description: "2 Freshly Battered Cod Filets Served with French Fries", price: 17},
    {key: 15, name: "Filet Mignon", description: "8oz Filet Mignon Served with Mashed Potatoes & Vegetables", price: 35},
    {key: 16, name: "Sirloin Steak", description: "Sliced Sirloin Steak topped with Red Wine Mushroom Sauce Served with Mashed Potatoes & Vegetables", price: 25},
    {key: 17, name: "Hawaiian BBQ Chicken", description: "BBQ Chicken, Pineapple and Onion Served over Stir-Fried Hawaiian Rice- Ham, Onion, Egg Served in a Pineapple Shell", price: 28}
];
export const Pizzas: Menu[] = [
    {key: 1, name: "Cheese Pizza", description: "Cheese Blend with Red Sauce", price: 25},
    {key: 2, name: "Pepperoni Pizza", description: "Pepperoni, Red Sauce, Cheese Blend", price: 26},
    {key: 3, name: "Margherita Pizza", description: "Tomato, Mozzarella Cheese, Fresh Basil Drizzled with Olive Oil", price: 26},
    {key: 4, name: "Spicy Retro Pizza", description: "Cheese Blend, Pepperoni, Italian Sausage, Jalapeños, Garlic, Spicy Red Sauce", price: 27}
];
export const Appetizers: Menu[] = [
    {key: 1, name: "Fresh Tomato & Mozzarella", description: "Fresh Mozzarella Cheese with Slices of Tomatoes Drizzled with Balsamic Glaze topped with Basil", price: 13},
    {key: 2, name: "Guacamole & Chips", description: "Fresh Guacamole Served with Fresh Chips", price: 13},
    {key: 3, name: "Pot Stickers", description: "Pork dumplings deep fried Served with Sweet Chili Sauce", price: 14},
    {key: 4, name: "Loaded Nachos", description: "BBQ Chicken, Tomato, Cheese, Jalapeños Sour Cream, Fresh Tortilla Chips Drizzled with BBQ Sauce", price: 15},
    {key: 5, name: "Poppin Popcorn Chicken", description: "Breaded Chicken Bites Served on a Bed of Popcorn", price: 15},
    {key: 6, name: "Jumbo Pretzels", description: "Jumbo Salted Pretzel Served with Cheese Sauce", price: 13},
    {key: 7, name: "Mozzarella Sticks", description: "Breaded Creamy Mozzarella Cheese with a side of Marinara Sauce", price: 14},
    {key: 8, name: "Gourmet Charcuterie & Cheese Platter", description: "Assortment of Imported Cheeses and Meats Paired with French Bread and Fig Preserve", price: 32},
    {key: 9, name: "Tower of Onion Rings", description: "Lightly breaded Onions served with Arcade Time Sauce", price: 13},
    {key: 10, name: "Loaded Fries", description: "French Fries Smothered in Cheese, Bacon, Green Onions", price: 11},
    {key: 11, name: "Southwest Egg Rolls", description: "Exciting blend of Southwestern-style ingredients served with Avocado Ranch", price: 14}
];
export const Salads: Menu[] = [
    {key: 1, name: "House Salad", description: "Lettuce, Tomato, Cheese, Black Olives, Croutons, Dressing- Italian, Ranch, Blue Cheese, Oil & Vinegar", price: 8},
    {key: 2, name: "Caesar Salad", description: "Romaine, Parmesan Cheese, Croutons, Caesar Dressing (Add Chicken - $4)", price: 8},
    {key: 3, name: "Ahi Tuna Salad", description: "Sesame Crusted Seared Ahi Tuna, Romaine, Tomato, Guacamole, Carrots, Crispy Rice Noodles, Sesame Dressing", price: 13}
];
export const Drinks: Menu[] = [
    {key: 1, name: "Burger", description: "Nice and Meaty", price: 15.99},
    {key: 2, name: "Chicken Tenders", description: "Crispy", price: 12.99},
    {key: 3, name: "Pizza", description: "mmmm", price: 22.99}
];
export const Desserts: Menu[] = [
    {key: 1, name: "Funnel Cake", description: "A crisp deep-fried cake dusted with powdered sugar served with Chocolate Sauce", price: 11},
    {key: 2, name: "Chocolate Chocolate Cake", description: "So nice we had to say it twice. Slice of Chocolate Cake with Chocolate shavings and a dollop of whip cream", price: 9},
    {key: 3, name: "Not Just Any Sundae", description: "Over 20 oz of Vanilla Ice Cream, Cookie Crumble, Sprinkles, Chocolate Syrup Topped with Whipped Cream and a Cherry on top", price: 15}
];

const Meal: React.FC<Menu> = ({name, description, price}) => {
    return (
        <div className="flex justify-between mb-[3vh] lm-sm:w-[23vw] lm-sm:mx-[3vw] pm-md:text-[2vh] lm-md:text-[3vh]">
            <div>
                <h1 className="text-neonPurple">{name}</h1>
                <p className="lm-md:text-[2vh]">{description}</p>
            </div>
            <p>${price}</p>
        </div>
    )
}

export default Meal;