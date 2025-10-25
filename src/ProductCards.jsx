import ProductCard from "./ProductCard";

function ProductCards({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-16">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default ProductCards;