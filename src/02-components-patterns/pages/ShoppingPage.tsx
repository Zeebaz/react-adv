import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug - Card1",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Cafecito" />
          <ProductCard.Title title="Cafecito" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductTitle />
          <ProductButtons />
          <ProductImage />
        </ProductCard>
      </div>
    </div>
  );
};
