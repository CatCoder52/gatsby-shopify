import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import Sliders from "../components/sliders"
import { ProductListing } from "../components/product-listing"
import Itemnav from "../components/itemnav"
import Features from './../components/features';
import Testimonials from "../components/testimonials"
import Brands from "../components/brands"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
export default function IndexPage({ data }) {
  return (
    <Layout>
      <Sliders />
      <Itemnav />
      <Features />
      <h3 className="title-color">#Newly Added Items</h3>
      <ProductListing products={data.shopifyCollection.products} />
      <Testimonials />
      <Brands />
    </Layout>
  )
}
