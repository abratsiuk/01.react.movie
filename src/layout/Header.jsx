import React from "react";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="https://github.com/abratsiuk/01.react.movie" className="brand-logo">
          React Movie
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/abratsiuk/01.react.movie">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
