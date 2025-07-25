import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./error404.css";

const Error404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="error-container">
      <img src="/error.png" alt="Page 404" className="error-img" />
    </div>
  );
};

export default Error404;
