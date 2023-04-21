import { useNavigate } from "react-router-dom";
const Test = () => {
  const navigate = useNavigate();

  return <p onClick={() => navigate(-1)}>Kek123</p>;
};
export default Test;
