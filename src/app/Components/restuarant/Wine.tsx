export interface Wine {
    key: number;
    name: string;
    type: "Red" | "White";
    glassPrice: number | null;
    bottlePrice: number;
}
export const Wines: Wine[] = [
    {key: 1, name: "Merlot La Junta", type: "Red", glassPrice: 9, bottlePrice: 35},
    {key: 2, name: "Pinot Noir La Junta", type: "Red", glassPrice: 9, bottlePrice: 35},
    {key: 3, name: "Cabernet Sauvignon La Junta", type: "Red", glassPrice: 9, bottlePrice: 35},
    {key: 4, name: "Bordeaux St. Emilion", type: "Red", glassPrice: null, bottlePrice: 45},
    {key: 5, name: "Aries Malbec", type: "Red", glassPrice: null, bottlePrice: 39},
    {key: 6, name: "Chateauneuf-du-Pape", type: "Red", glassPrice: null, bottlePrice: 59},
    {key: 7, name: "Cahors Chateau du Port", type: "Red", glassPrice: null, bottlePrice: 39},
    {key: 8, name: "Torre Albeniz Reserva", type: "Red", glassPrice: null, bottlePrice: 39},
    {key: 9, name: "Chardonnay La Junta", type: "White", glassPrice: 9, bottlePrice: 35},
    {key: 10, name: "Sauvignon Blanc La Junta", type: "White", glassPrice: 9, bottlePrice: 35},
    {key: 11, name: "Pinot Grigio Panadosso", type: "White", glassPrice: 9, bottlePrice: 35},
    {key: 12, name: "Prosecco Millesimato", type: "White", glassPrice: 10, bottlePrice: 39},
    {key: 13, name: "Moscato Luna", type: "White", glassPrice: 10, bottlePrice: 39},
    {key: 14, name: "Parisot Blanc de Blanc", type: "White", glassPrice: 10, bottlePrice: 39},
    {key: 15, name: "Chablis Domaine Passy", type: "White", glassPrice: null, bottlePrice: 39},
    {key: 16, name: "Sancerre Reserve", type: "White", glassPrice: null, bottlePrice: 46},
    {key: 17, name: "Emile Dupuis Champagne", type: "White", glassPrice: null, bottlePrice: 69},
    {key: 18, name: "Chardonnay Long Valley", type: "White", glassPrice: null, bottlePrice: 39}
];
const WineGlass: React.FC<Wine> = ({name, glassPrice, bottlePrice}) => {
    return (
        <div className="w-full flex justify-between mb-[3vh] h-[7vh] text-[2.75vh] items-center">
            <h1 className="text-[#FF00FF] w-1/2">{name}</h1>
            <div className="w-1/2 flex">
                <div className="w-1/2 text-center">{glassPrice === null ? "__" : "$" + glassPrice}</div>
                <div className="w-1/2 text-center">${bottlePrice}</div>
            </div>
        </div>
    )
}

export default WineGlass;