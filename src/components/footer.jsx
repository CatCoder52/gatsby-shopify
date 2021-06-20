import * as React from "react"
import Logo from "../icons/logo"
import { Link } from 'gatsby';
import {
  footerStyle,
  copyright,
  blurb,
  logos,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos}>
          <Logo />
        </div>
      </div>
          <div className={footerNavListItem}>
            <Link to="/products/women">Women</Link>
            <Link to="/products/men">Men</Link>
            <Link to="/products/bracelet">Bracelet</Link>
            <Link to="/products/necklace">Necklace</Link>
            <Link to="/search?s=BEST_SELLING">
              Trending
            </Link>
          </div>
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved
      </div>
    </footer>
  )
}
