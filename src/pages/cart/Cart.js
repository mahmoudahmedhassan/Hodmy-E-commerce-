import { React, useState, useEffect } from 'react'
import classes from './cart.module.css';
import Layout from '../../layout/Layout';
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import { incrementProduct, decrementProduct, deleteProductFromCart, deleteAllProducts } from "../../redux/cartSlice"
import { BsTrashFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';

function Cart() {
  const { user } = useSelector(state => state.user);
  let navigate =useNavigate()
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
     let total = 0;

    cart.map(x => {
        return (
          total += x.counter* x.price
         )
    });
    setTotalPrice((parseInt(total)));
   
}, [cart ])


  const data = cart && cart.map(item => {
    const { title, image, price, counter, productId } = item;

    return (<div className={classes.cart_details_container}>
      <Col xs={3} lg={6}>
        <div className={classes.cart_imgs}>
          <img src={image} alt={title} height='100px' width='100px' />
        </div>
      </Col>

      <Col xs={9} lg={6}>

        <div className={classes.cart_details_products}>

          <div className={classes.cart_details_products_price}>{price} $ </div>

          <div className={classes.cart_details_products_button}>
            <button onClick={() => {
              dispatch(decrementProduct(title));
              counter === 1 && dispatch(deleteProductFromCart(productId))
            }}> {counter === 1 ? (<BsTrashFill />) : '-'} </button>
            <span>{counter}</span>
            <button onClick={() => { dispatch(incrementProduct(title)) }}>+</button>
          </div>

          <div className={classes.cart_details_products_total}>
            <span>  {parseInt(counter * price)} $</span>
          </div>

        </div>

      </Col>

    </div>)
  })

  return (
    <Layout>

      { /* cart table section */}

      {data.length > 0 &&
        <Container className={classes.cart_table}>
          <Row>
            <Col xs={3} sm={3} lg={6}>
              <div className={classes.head_table_img}>
                <span>product</span>
              </div>
            </Col>
            <Col xs={9} sm={9} lg={6}>
              <div className={classes.head_table_details}>
                <span>price</span>
                <span>quantity</span>
                <span>total</span>
              </div>
            </Col>
          </Row>
        </Container>
      }
        

      {/* cart empty section */}
      <Container >
        <Row>
          {data.length === 0 ? (
            <div className={classes.empty_cart}>
              <h2> your cart</h2>

              <p>Your cart is currently empty.</p>

              <Link to="/" className={classes.go_home}> <span>Continue shopping</span> <FaLongArrowAltRight /></Link>

            </div>) : data}
        </Row>
      </Container>


      {/* checkout section  */}
      {data.length > 0 && (

        <Container className={classes.checkout}>

          <button onClick={() => { dispatch(deleteAllProducts()) }}>delete all</button>

          <div>
            <p>
            Subtotal: {totalPrice} $
            </p>
            {
            user ? <button onClick={()=> navigate('/checkout')} > CHECK OUT </button>
            :<button onClick={()=> navigate('/checkout')} disabled style={{cursor:'not-allowed'}}> CHECK OUT </button>
            }
            {!user && <p>Already have an account? <Link to='/login'>Login</Link></p>}
          </div>

        </Container>

      )}

    </Layout>
  )
}

export default Cart