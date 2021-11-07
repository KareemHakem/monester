import Card from "../../Components/Card/Card";
import React from "react";
import products from "../../Data/Products";

export default function ProductsPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 100,
        }}
      >
        {products.map((product) => (
          <Card
            id={product.id}
            key={product.id}
            name={product.name}
            Image={product.image}
            category={product.category}
            price={product.price}
            rating={product.rating}
            numReviews={product.numReviews}
          />
        ))}
      </div>
    </>
  );
}