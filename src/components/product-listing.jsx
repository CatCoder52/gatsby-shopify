import * as React from "react"
import { ProductCard } from "./product-card"
import { listingContainerStyle, title } from "./product-listing.module.css"

export function ProductListing({ products }) {
  return (
    <>
      <h3 className={title}>#Newly Added Items</h3>
      <div className={listingContainerStyle}>
        {products.map((p, index) => (
          <ProductCard product={p} key={p.id} eager={index === 0} />
        ))}
      </div>
    </>
  )
}
