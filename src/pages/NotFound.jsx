import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="pagehead">
      <div className="pagehead-in">
        <h1>Page not found</h1>
        <p>
          That link doesn't lead anywhere. Try the <Link to="/table">league table</Link> or the{" "}
          <Link to="/schedule">schedule</Link>.
        </p>
      </div>
    </div>
  );
}
