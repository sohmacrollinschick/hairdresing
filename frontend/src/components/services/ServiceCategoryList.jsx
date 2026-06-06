import { serviceCategories } from "../../constants/salonData";

export default function ServiceCategoryList() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {serviceCategories.map((category) => (
        <div key={category} className="border border-salonPrimary/50 bg-salonWhite p-5 font-semibold text-salonDark">
          {category}
        </div>
      ))}
    </div>
  );
}
