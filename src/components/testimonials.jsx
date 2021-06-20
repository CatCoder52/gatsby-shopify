import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className="tsbase">
      <div className="testimonial">
        <section className="testimonial__one">
          <div className="img-container">
            <img alt='user' src="image-daniel.jpg" className="img" loading="lazy" />
          </div>
          <div className="testimonial__one__desc">
            <h1 className="name">
              Daniel Clifford
              <span>&nbsp;Verified</span>
            </h1>
            <h2 className="reason">
              I received recived the product. It is a long established fact
            </h2>
            <p className="words">
              “ It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              Ipsum as their default model text, and a etimes on purpose
              (injected humour and the like). ”
            </p>
          </div>
        </section>
        <section className="testimonial__two">
          <div className="img-container">
            <img alt='user' src="image-jonathan.jpg" className="img" loading="lazy" />
          </div>
          <div className="testimonial__two__desc">
            <h1 className="name">
              Jonathan Walters
              <span>&nbsp;Verified</span>
            </h1>
            <h2 className="reason">
              The team was very supportive and kept us bying
            </h2>
            <p className="words">
              “ It is a long established fact that a reader will be distracted
              by the readable content of a page). ”
            </p>
          </div>
        </section>
        <section className="testimonial__three">
          <div className="img-container">
            <img alt='user' src="image-jeanette.jpg" className="img" loading="lazy" />
          </div>
          <div className="testimonial__three__desc">
            <h1 className="name">
              Jeanette Harmon
              <span>&nbsp;Verified</span>
            </h1>
            <h2 className="reason">
              An overall wonderful and rewarding experience
            </h2>
            <p className="words">
              “ It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is cool”
            </p>
          </div>
        </section>
        <section className="testimonial__four">
          <div className="img-container">
            <img alt='user' src="image-patrick.jpg" className="img" loading="lazy" />
          </div>
          <div className="testimonial__four__desc">
            <h1 className="name">
              Patrick Abrams
              <span>&nbsp;Verified</span>
            </h1>
            <h2 className="reason">
              Awesome support fromdelivery service team and the product looks
              good!
            </h2>
            <p className="words">
              “ It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              Ipsum as their default model text, and a etimes on purpose
              (injected humour and the like).”
            </p>
          </div>
        </section>
        <section className="testimonial__five">
          <div className="img-container">
            <img alt='user' src="image-kira.jpg" className="img" loading="lazy" />
          </div>
          <div className="testimonial__five__desc">
            <h1 className="name">
              Kira Whittle
              <span>&nbsp;Verified</span>
            </h1>
            <h2 className="reason">
              Such a life-changing dress from this shop GATSHOP!
            </h2>
            <p className="words">
              “ It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              Ipsum as their default model text, and a etimes on purpose
              (injected humour and the like). It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal Ipsum as their default model text, and a
              etimes on purpose. ”
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Testimonials
