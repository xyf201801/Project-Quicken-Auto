import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Form,
  Card,
} from "react-bootstrap";

import { addToCart, removeFromCart } from "../actions/cartActions";
const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  //location.search displays the ?qty=1
  //location.search.split("="), gets the qty number so anything after the = sign
  //which would be the 1 index
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  //remove logic
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    //if they are logged in redirect them to shipping, else go to login
    history.push("/login?redirect=shipping");
  };
  return (
    <Row>
      <Col md={8}>
        <h1>Rental Cart</h1>
        {/* if cart is empty it load the message */}
        {cartItems.length === 0 ? (
          <Message>
            Your rental cart is empty <Link to="/"> Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              // item.product is the product id
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    {/* these came from the database which are called in the cartaction */}
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}> ${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      //we need to dispatch because it is an action
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {/* if lets say count in stock is 5 then the code: [...Array(product.countInStock).keys()] */}
                      {/* is setting the values to [0,1,2,3,4,5] */}
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {/* this takes in the total number of items */}
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              ${/* This is to get the total cost of items in the cart */}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed()}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Continue To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
