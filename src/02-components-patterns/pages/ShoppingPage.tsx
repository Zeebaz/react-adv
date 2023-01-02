import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Cafecito" className="text-bold" />
          <ProductCard.Title title="Cafecito" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductButtons className="custom-buttons" />
          <ProductTitle className="text-bold" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#3" }}>
          <ProductImage
            style={{
              padding: "10px",
              width: "calc(100% - 20px)",
              borderRadius: "20px",
            }}
          />
          <ProductButtons style={{ color: "blue" }} />
          <ProductTitle style={{ color: "red" }} />
        </ProductCard>
      </div>
    </div>
  );
};
