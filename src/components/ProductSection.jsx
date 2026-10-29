
function ProductSection({ title, subtitle, products }) {
  return (
    <section className="mx-auto mt-10 md:px-10 font-raleway">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-700">{subtitle}</p>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex  flex-col gap-1 md:gap-5">
            <img
              src={product.image}
              alt={product.name}
              className="h-35 md:h-70 w-full object-cover object-center"
            />
            <div className="mt-3 flex justify-between text-sm">
              <span>{product.name}</span>
              <span className="font-semibold font-sans">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;