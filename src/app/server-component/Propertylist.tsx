import { getData } from "../apiData/data";
import PropertyCarousel from "../client-components/PropertyCarousel";
import { Property } from "../type";


export default async function Propertylist() {
  const properties = await getData();
  console.log(properties);

  
  
  return (
    <div className="px-6 py-8 mt-52 bg-white text-black space-y-10">
      <PropertyCarousel
        title="Available for similar dates"
        category="similar"
      />
      <PropertyCarousel
        title="Stay in Mississauga"
        category="mississauga"
      />
      <PropertyCarousel
        title="Stay near Rogers Centre"
        category="rogersCentre"
      />
      <PropertyCarousel
        title="Popular Homes in Brampton"
        category="brampton"
      />
    </div>
  );
}
