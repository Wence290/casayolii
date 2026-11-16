import Item from "../item/Item";

function ItemList({ products }) {
  return (
    <div className="shop-grid">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;