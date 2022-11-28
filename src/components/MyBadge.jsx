import { Button, Badge } from "react-bootstrap";

const MyBadge = (prop) => {
  return (
    <Button className="mb-3" variant="primary">
      Badge-kun <Badge variant={prop.badgecolor}>{prop.badgetext}</Badge>
    </Button>
  );
};

export default MyBadge;
