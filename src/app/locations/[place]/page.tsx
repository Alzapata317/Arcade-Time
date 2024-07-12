import React from 'react';

interface LocationProps {
  params: {
    place: string;
  };
}

export const generateStaticParams = () => {
    return [{place :'Jacksonville'}, {place:'Wellington'}, {place:'The-Falls-Mall-Miami'}, {place:'Coral-Square-Mall'}];
};

const Location: React.FC<LocationProps> = ({params} : {params : {place: string}}) => {
  let { place } = params;
  place = place.replace(/-/g, ' ');

  return (
    <div className="bg-black h-screen w-screen flex flex-col p-[10vh]">
      <div className="text-neonYellow pm-sm:text-[6vh] pm-md:text-[8vh] lm-sm:text-[8vh] font-neon text-center">
        {place}
      </div>
    </div>
  );
};

export default Location;