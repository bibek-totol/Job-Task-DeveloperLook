
import { getData } from "../apiData/data";
import PropertyCarousel from "../client-components/PropertyCarousel";
import { Property } from "../type";


export default async function Propertylist() {
  const properties = await getData();

  const filteredsimilar = properties.filter((property:Property) => {
     return property.category === "similar";
  })

  const filteredmississauga = properties.filter((property:Property) => {
    return property.category === "mississauga";
  })

  const filteredrogersCentre = properties.filter((property:Property) => {
    return property.category === "rogersCentre";
  })

  const filteredbrampton = properties.filter((property:Property) => {
    return property.category === "brampton";
  })
  
  return (
    <div className="px-6 py-8 mt-52 bg-white text-black space-y-10">
      <PropertyCarousel
        title="Available for similar dates"
        items={filteredsimilar}
      />
      <PropertyCarousel
        title="Stay in Mississauga"
        items={filteredmississauga}
      />
      <PropertyCarousel
        title="Stay near Rogers Centre"
        items={filteredrogersCentre}
      />
      <PropertyCarousel
        title="Popular Homes in Brampton"
        items={filteredbrampton}
      />
    </div>
  );
}
