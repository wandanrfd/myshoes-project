import { categoriesData } from "../../assets/assets";
import { Link } from "react-router-dom";

const HomeCategories = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold">Browse Categories</h2>
          <p className="text-sm text-gray-500 mt-1">
            Find exactly what you need using
          </p>
        </div>

        <div className="flex items-center mt-8 overflow-x-scroll no-scrollbar gap-4">
          {categoriesData.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products?category=${cat.slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="group flex flex-col items-center gap-3 p-4 shrink-0"
            >
              <div className="size-18 sm:size-26 sm:p-2 rounded-2xl overflow-hidden bg-amber-100/60 group-hover:ring-2 ring-amber-400/75 transition-all flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain rounded-full transition-all group-hover:scale-105"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-amber-700 transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
