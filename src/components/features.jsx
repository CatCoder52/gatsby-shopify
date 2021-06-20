import React from 'react'
import './features.css'

const Features = () => {
  return (
    <div className="box-items">
      <>
        <div className="single-feature">
          <div className="feature-icon">
            <img src="1.png" alt="feature" />
          </div>
          <div className="feature-content">
            <h4 className="title">Free Shipping</h4>
            <span className="sub-title">Capped at $39 per order</span>
          </div>
        </div>
        <div className="single-feature">
          <div className="feature-icon">
            <img src="2.png" alt="feature" />
          </div>
          <div className="feature-content">
            <h4 className="title">Card Payments</h4>
            <span className="sub-title">12 Months Installments</span>
          </div>
        </div>
        <div className="single-feature">
          <div className="feature-icon">
            <img src="3.png" alt="feature" />
          </div>
          <div className="feature-content">
            <h4 className="title">Easy Returns</h4>
            <span className="sub-title">Shop With Confidence</span>
          </div>
        </div>
      </>
    </div>
  )
}

export default Features
