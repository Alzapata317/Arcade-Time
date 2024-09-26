'use client';
import { useState } from "react";
import PricesComponent, {prices} from "../Components/PricesComponent";
import Meal, { Menu, Entrees, Pizzas, Appetizers, Salads, Desserts } from "../Components/restuarant/Meal";
import WineGlass, { Wine, Wines } from "../Components/restuarant/Wine";
import { getBaseUrl } from "../utils/getBaseUrl";
import RegularDrinks, {Drink, Drinks}from "../Components/restuarant/Drink";

export default function EatPlay() {
  const [selectedTab, setSelectedTab] = useState<keyof typeof menuItems>("Entrees");
  const wineTypes = [...new Set(
    Wines.filter(wine => ["Red", "White"].includes(wine.type))
          .map(wine => wine.type)
  )];
  const beerTypes = [...new Set(
    Drinks.filter(drink => ["Bottles", "Buckets", "Tap", "Cans"].includes(drink.type))
          .map(drink => drink.type)
  )];
  const groupedBeersByTypeAndPrice = (type: string) => {
    // Step 1: Filter beers by type
    const filteredBeers = Drinks.filter(drink => drink.type === type);
    
    // Step 2: Group the filtered beers by price
    return filteredBeers.reduce((acc, drink) => {
      if (!acc[drink.price]) {
        acc[drink.price] = [];
      }
      acc[drink.price].push(drink);
      return acc;
    }, {} as Record<number, Drink[]>);
  };
  const drinkTypes = [...new Set(
    Drinks.filter(drink => ["Frozen Drinks", "Spiked Drinks", "Milkshake", "IceBlast", "Fountain Drinks"].includes(drink.type))
          .map(drink => drink.type)
  )];

  type MenuItemType = Menu[] | Wine[] | Drink[];

  const menuItems: { [key: string]: MenuItemType } = {
    Entrees,
    Pizzas,
    Appetizers,
    Salads,
    Wines, // This holds the Wine[] array
    Drinks, // This holds the Drink[] array
    Desserts,
  };
  const drinkTypesWithPrices = [
    { type: "Frozen Drinks", totalPrice: 12 },
    { type: "Spiked Drinks", totalPrice: 12 },
    { type: "Milkshake", totalPrice: 12 },
    { type: "Fountain Drinks", totalPrice: null},
    { type: "IceBlast", totalPrice: 6 },
  ];

  return (
    <div className=" bg-fixed bg-cover min-h-screen bg-no-repeat" style={{ backgroundImage: `url(${getBaseUrl('/assets/images/menu-background.jpg')})`}}>
      <div className="bg-[#00000099]">
        <div className="pm-sm:bg-[#00000099] lm-sm:bg-[#00000069]">
          <h1 className="w-full pm-sm:h-[15vh] lm-sm:h-[18vh] text-neonBlue flex justify-center items-center text-[6vh] lm-lg:text-[8vh] font-neon">Menu</h1>
          <div className="text-neonBlue text-[3vh] flex flex-wrap gap-[3vw] justify-center font-neon">
            {Object.keys(menuItems).map((itemKey) => (
              <button
                key={itemKey}
                className={`${selectedTab === itemKey ? "border-b-2 border-neonBlue" : ""}`}
                onClick={() => setSelectedTab(itemKey as keyof typeof menuItems)}
              >
                {itemKey}
              </button>
            ))}
          </div>      
          {selectedTab === "Pizzas" && (
            <div className="text-[#FF00FF] lm-xl:text-[1.75vh] mt-[1vh] text-[#FF00FF] font-neon text-center pm-sm:text-[1.5vh]">All Pizzas are 16" Large Hand Made Pizzas with the freshest ingredients</div>
          )}
          {(selectedTab === "Entrees" || selectedTab === "Appetizers" || selectedTab === "Salads") && (
            <div className="text-[#FF00FF] lm-xl:text-[1.75vh] mt-[1vh] text-[#FF00FF] font-neon text-center pm-sm:text-[1.5vh]">Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions</div>
          )}
          {menuItems[selectedTab] && (
            <div className="px-[5vw] pt-[4vh] font-neon">
              {selectedTab === "Wines" ? (
                <div className="text-neonBlue flex lm-sm:justify-around pm-sm:flex-col flex-wrap">
                  {wineTypes.map((type) => (
                    <div className="lm-sm:w-[40%]" key={type}>
                      <div className="w-full flex justify-between">
                        <div className={`w-1/2 text-center text-[4vh] font-neon ${type === "Red" ? "text-neonRed" : "text-white"}`}>{type}</div>
                        <div className="flex w-1/2 justify-around items-center text-[3vh] font-neon">
                          <div className="w-1/2 text-center">Glass</div>
                          <div className="w-1/2 text-center">Bottle</div>
                        </div>
                      </div>
                      {Wines.filter((wine) => wine.type === type).map((wine) => (
                        <WineGlass 
                          key={wine.key}
                          name={wine.name}
                          type={wine.type}
                          glassPrice={wine.glassPrice}
                          bottlePrice={wine.bottlePrice}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ) : selectedTab === "Drinks" ? (
                <div className="flex flex-col">
                  <div className="flex flex-wrap pm-sm:flex-col">
                  {/* <h1 className="text-neonBlue w-full text-center text-[4vh]">Drinks</h1> */}
                    {drinkTypesWithPrices.map((other) => (
                      <div className="flex flex-col flex-wrap w-1/3 pm-sm:w-full px-[4vw]" key={other.type}>
                        <div className="flex justify-between text-[3vh]">
                          <div className="text-[#FF00FF]">{other.type}</div>
                          <div className="text-neonBlue">{other.totalPrice != null ? "$" + other.totalPrice : ""}</div>
                        </div>
                        <div className="mb-[4vh]">
                          {Drinks.filter((drink) => drink.type === other.type).map((drink) => (
                            <RegularDrinks 
                              key={drink.key}
                              name={drink.name}
                              price={drink.price}
                              type={drink.type}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                    <h1 className="text-[#FF00FF] font-neon w-full text-center text-[6vh] h-[15vh]">Beers</h1>
                    {beerTypes.map((type) => (
                      <div className="w-1/4 pm-sm:w-full flex flex-wrap flex-col px-[3vw]" key={type}>
                        <div className="text-[#FF00FF] text-[3vh]">{type}</div>
                        {Object.entries(groupedBeersByTypeAndPrice(type)).map(([price, beers]) => (
                          <div className="flex justify-between mb-[4vh]" key={type}>
                            <div>
                              {beers.map((beer) => (
                                <RegularDrinks
                                  key={beer.key}
                                  name={beer.name}
                                  type={beer.type}
                                  price={beer.price}
                                />
                              ))}
                            </div>
                            <div className="text-neonBlue text-[2.5vh]">${price}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-neonBlue flex pm-sm:flex-col flex-wrap">
                  {menuItems[selectedTab].map((item: any) => (
                    <Meal 
                      key={item.key}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
          <h1 className="w-full pm-sm:h-[15vh] lm-sm:h-[23vh] text-neonBlue flex justify-center items-end text-[6vh] lm-lg:text-[8vh] font-neon">Arcade Cards</h1>
          <div className="w-full pm-sm:h-[52vh] pm-md:h-[43vh] pm-xl:h-[43vh] lm-sm:h-[48vh] flex flex-wrap flex-col justify-center items-center overflow-scroll overflow-y-hidden pm-sm:gap-[8vw] lm-sm:gap-[4vw] px-[4vw] font-neon">
              {prices.map((price) => (
                <PricesComponent
                  key={price.key}
                  cost={price.cost}
                  credits={price.credits}
                  bonus={price.bonus}
                  total={price.total}
                />
              ))}
              <div className="bg-black pm-sm:w-[45vw] pm-sm:h-[38vh] pm-md:h-[30vh] pm-xl:h-[37vh] lm-sm:h-[30vh] border-2 border-neonPink shadow-[0_0px_9px_2px] shadow-neonPink rounded-xl p-[2vh] text-neonBlue gap-[4vh] h-full relative">
                <h2 className="flex justify-center text-[5vh] text-neonPurple font-neon">250$</h2>
                <div>
                  <div className="pm-sm:px-[3vw] flex flex-col gap-[1vh] mb-[2vh]">
                    <p className="flex text-[2.5vh]">5000 Credits</p>
                    <div className="flex justify-between border-b-2 text-[2.5vh] pb-[1vh]">
                      <p>2000 Bonus</p>
                      <p>+</p>
                    </div>
                  </div>
                  <p className="flex justify-center text-[5vh] flex text-center text-neonYellow font-neon">7000 Credits</p>
                </div>
                <div className="absolute right-[40%] -top-[7vh] text-neonPink font-neon text-[5vh] pm-md:text-[6vh] text-shadow-neon-pink">VIP</div>
              </div>
          </div>
          <p className="flex items-center p-[4vw] h-[5vh] text-[2vh] text-neonPink">VIP Status is reached once $250 is spent on one card. Receive special game pricing.</p>
          <div className="w-full h-[10vh]"></div>
        </div>
      </div>
    </div>
  )
}
