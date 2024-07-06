interface LocationProps {
    params: {
      place: string;
    };
  }

const Location: React.FC<LocationProps> = ({ params }) => {
    let { place } = params;
    place = place.replaceAll("-", " ");
    return (
      <div className="bg-black h-screen w-screen flex flex-col p-[10vh]">
        <div className="text-neonYellow text-8xl font-neon text-center">
        {place}
        </div>
      </div>
    );
  };
  
export default Location;