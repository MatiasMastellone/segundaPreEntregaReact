import Container from "react-bootstrap/esm/Container.js";
import { ItemCount } from "./ItemCount.jsx";

export const ItemDetail = ({product}) => {

  if(product)
  return (
    <Container>
      	<h1>{product.title}</h1>
				<img src={product.pictureURL} alt={product.title} />
        <p>{product.description}</p>
        <p>{product.stock}</p>				
      <ItemCount />
    </Container>
  );
};
