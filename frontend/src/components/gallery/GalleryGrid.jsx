import { useState } from "react";
import { galleryCategories } from "../../constants/salonData";

const items = [
  { id: 1, category: "Braids", type: "image", url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80" },
  { id: 2, category: "Coloring", type: "image", url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" },
  { id: 3, category: "Bridal", type: "image", url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
  { id: 4, category: "Men's Styles", type: "image", url: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?auto=format&fit=crop&w=800&q=80" }
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {["All", ...galleryCategories].map((category) => (
          <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 text-sm font-bold ${filter === category ? "bg-salonAccent text-salonWhite" : "bg-salonWhite text-salonDark"}`}>
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item) => (
          <article key={item.id} className="group relative overflow-hidden bg-salonWhite">
            <img src={item.url} alt={item.category} className="h-80 w-full object-cover transition group-hover:scale-105" />
            <span className="absolute bottom-3 left-3 bg-salonPrimary px-3 py-1 text-xs font-bold text-salonDark">{item.category}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
