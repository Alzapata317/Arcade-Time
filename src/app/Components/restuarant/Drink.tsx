export interface Drink {
    key: number;
    name: string;
    price: number;
    type: "Bottles" | "Buckets" | "Tap" | "Cans" | "Frozen Drinks" | "Spiked Drinks" | "Milkshake" | "IceBlast" | "Fountain Drinks";
}

export const Drinks: Drink[] = [
    // Beers
    { key: 1, name: "Michelob Ultra", price: 5, type: "Bottles" },
    { key: 2, name: "Heineken", price: 6, type: "Bottles" },
    { key: 3, name: "Corona", price: 6, type: "Bottles" },
    { key: 4, name: "Stella Artois", price: 7, type: "Bottles" },
    { key: 5, name: "Blue Moon", price: 7, type: "Bottles" },
    { key: 6, name: "Modelo", price: 7, type: "Bottles" },
    { key: 7, name: "La Rubia", price: 7, type: "Bottles" },
    { key: 8, name: "Michelob Ultra", price: 25, type: "Buckets" },
    { key: 9, name: "Heineken", price: 25, type: "Buckets" },
    { key: 10, name: "Corona", price: 25, type: "Buckets" },
    { key: 11, name: "Stella Artois", price: 28, type: "Buckets" },
    { key: 12, name: "Blue Moon", price: 28, type: "Buckets" },
    { key: 13, name: "Modelo", price: 28, type: "Buckets" },
    { key: 14, name: "La Rubia", price: 28, type: "Buckets" },
    { key: 15, name: "Fat Tire", price: 7, type: "Tap" },
    { key: 16, name: "Barrel of Monks", price: 7, type: "Tap" },
    { key: 17, name: "Jai Alai", price: 7, type: "Tap" },
    { key: 18, name: "Lagunitas", price: 7, type: "Tap" },
    { key: 19, name: "Space Dust", price: 7, type: "Tap" },
    { key: 20, name: "Wicked Weed", price: 7, type: "Tap" },
    { key: 21, name: "Many unique canned beers to choose from please ask server for current selection", price: 10, type: "Cans" },

    // Frozen Drinks
    { key: 22, name: "Pina Colada", price: 12, type: "Frozen Drinks" },
    { key: 23, name: "Strawberry Daiquiri", price: 12, type: "Frozen Drinks" },
    { key: 24, name: "Margarita", price: 12, type: "Frozen Drinks" },
    { key: 25, name: "Spiked Milk Shake", price: 12, type: "Frozen Drinks" },

    // Spiked Drinks
    { key: 26, name: "Rootbeer Float", price: 12, type: "Spiked Drinks" },
    { key: 27, name: "Coke Float", price: 12, type: "Spiked Drinks" },
    { key: 28, name: "Pop Fizz", price: 12, type: "Spiked Drinks" },

    // Milkshakes
    { key: 29, name: "Vanilla or Chocolate", price: 12, type: "Milkshake" },
    { key: 30, name: "Oreo, M&M, Dulce de Leche or Birthday Cake", price: 12, type: "Milkshake" },

    // Ice Blasts
    { key: 31, name: "Strawberry", price: 6, type: "IceBlast" },
    { key: 32, name: "Blue Raspberry", price: 6, type: "IceBlast" },
    { key: 33, name: "Mango", price: 6, type: "IceBlast" },
    { key: 34, name: "Lime", price: 6, type: "IceBlast" },

    // Fountain Drinks
    { key: 35, name: "Coke", price: 0, type: "Fountain Drinks" },
    { key: 36, name: "Diet Coke", price: 0, type: "Fountain Drinks" },
    { key: 37, name: "Sprite", price: 0, type: "Fountain Drinks" },
    { key: 38, name: "Dr. Pepper", price: 0, type: "Fountain Drinks" },
    { key: 39, name: "Orange Fanta", price: 0, type: "Fountain Drinks" },
    { key: 40, name: "Fruit Punch", price: 0, type: "Fountain Drinks" },
    { key: 41, name: "Root Beer", price: 0, type: "Fountain Drinks" },
    { key: 42, name: "Lemonade", price: 0, type: "Fountain Drinks" },
    { key: 43, name: "Iced Tea", price: 0, type: "Fountain Drinks" },
];

const RegularDrinks: React.FC<Drink> = ({name, price}) => {
    return (
        <div className="w-full text-neonBlue text-[2.5vh]">
            <h1>{name}</h1>
        </div>
    )
}
export default RegularDrinks;
