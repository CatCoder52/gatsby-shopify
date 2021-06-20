import React from "react"
import "./itemnav.css"
import { Link } from "gatsby"

const Itemnav = () => {
  return (
    <div className="box-items">
      <div className="single-col">
        <Link to="products/women" className="single-box">
          <img src="women-box.png" alt="women" />
        </Link>
      </div>
      <div className="single-col">
        <Link
          to="/search?s=BEST_SELLING"
          className="single-box"
        >
          <img src="trending-box.png" alt="trend" />
        </Link>
      </div>
      <div className="single-col">
        <Link to="products/men" className="single-box">
          <img src="men-box.png" alt="men" />
        </Link>
      </div>
    </div>
  )
}

export default Itemnav
