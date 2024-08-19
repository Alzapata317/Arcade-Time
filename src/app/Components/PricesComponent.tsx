  // Component for each item
  export interface Price {
    key: number;
    cost: number;
    credits: number;
    bonus: number;
    total: number;
  }
  export const prices: Price[] = [
    { key: 1, cost: 20, credits: 400, bonus: 0, total: 400 },
    { key: 2, cost: 35, credits: 700, bonus: 100, total: 800 },
    { key: 3, cost: 50, credits: 1000, bonus: 200, total: 1200 },
    { key: 4, cost: 75, credits: 1500, bonus: 400, total: 1900 },
    { key: 5, cost: 100, credits: 2000, bonus: 600, total: 2600 },
    { key: 6, cost: 150, credits: 3000, bonus: 1000, total: 4000 }
  ];
  const PricesComponent: React.FC<Price> = ({ cost, credits, bonus, total }) => {
    return (
      <div className="bg-black pm-sm:w-[45vw] pm-sm:h-[38vh] pm-md:h-[30vh] pm-xl:h-[37vh] lm-sm:h-[30vh] border-2 border-neonPurple rounded-xl p-[2vh] text-neonBlue gap-[4vh] h-full">
        <h2 className="flex justify-center text-[5vh] text-neonPurple font-neon">{cost}$</h2>
        <div>
          <div className="pm-sm:px-[3vw] flex flex-col gap-[1vh] mb-[2vh]">
            <p className="flex text-[2.5vh]">{credits} Credits</p>
            <div className="flex justify-between border-b-2 text-[2.5vh] pb-[1vh]">
              <p>{bonus} Bonus</p>
              <p>+</p>
            </div>
          </div>
          <p className="flex justify-center text-[5vh] flex text-center text-neonYellow font-neon">{total} Credits</p>
        </div>
      </div>
    );
  };
export default PricesComponent;