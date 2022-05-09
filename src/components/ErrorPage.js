import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error">
      <Link className="error__link" to="/">
        VOLVER
      </Link>
      <h2 className="error__404">Error 404</h2>
    </div>
  );
}

export default ErrorPage;
