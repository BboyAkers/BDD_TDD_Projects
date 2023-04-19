function ProductCard({ product: { name, price, material, color } }) {
  return (
    <div className="col-span-1 flex flex-col">
      <div
        role="img"
        className="object-cover w-full h-36 transition duration-500 group-hover:scale-105"
        style={{ backgroundColor: color }}
      />

      <div className="p-3 bg-white border border-gray-100 shadow flex-grow flex flex-col">
        <span className="rounded whitespace-nowrap bg-slate-100 px-3 py-1.5 text-xs font-medium self-start">
          {material}
        </span>

        <h3 className="mt-4 font-medium text-gray-900">{name}</h3>

        <p className="my-1.5 text-sm text-gray-700">${price}</p>

        <div className="flex-grow flex flex-col justify-end">
          <form onSubmit={(e) => e.preventDefault()}>
            <button className="block w-full p-2 text-sm font-medium transition bg-yellow-400 rounded hover:scale-105">
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
