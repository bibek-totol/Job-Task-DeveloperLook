
import properties from "../../../public/api.json";
import PropertyCarousel from "../client-components/PropertyCarousel";


export default function Propertylist() {
  return (
    <div className="px-6 py-8 mt-52 bg-white text-black space-y-10">
      <PropertyCarousel
        title="Available for similar dates"
        items={properties.similar}
      />
      <PropertyCarousel
        title="Stay in Mississauga"
        items={properties.mississauga}
      />
      <PropertyCarousel
        title="Stay near Rogers Centre"
        items={properties.rogersCentre}
      />
      <PropertyCarousel
        title="Popular Homes in Brampton"
        items={properties.brampton}
      />
    </div>
  );
}
