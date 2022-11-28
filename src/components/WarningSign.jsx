import { Alert } from "react-bootstrap";
const WariningSign = (prop) => {
  return ["danger"].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      {prop.atext}
    </Alert>
  ));
};
export default WariningSign;
