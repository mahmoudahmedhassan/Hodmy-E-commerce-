import { React, useState, useEffect } from 'react'
import Layout from '../../layout/Layout';
import classes from './details.module.css'
import { getDoc, doc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useParams, } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useDispatch } from "react-redux";
import { addProductToCart, } from '../../redux/cartSlice';

import {LoadingProduct} from '../../componets/loading/Loading'
import { FaStar } from "react-icons/fa";

export default function Details() {
  const [loading, setLoading] = useState(null);

  const [product, setProduct] = useState();
  const [counter, setCounter] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  // const {counter} = useSelector((state ) =>state.cart);

  useEffect(() => {
    getData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getData() {
    try {
      setLoading(true)
      const productDetails = await getDoc(
        doc(db, "products", params.id)
      );
      setProduct(productDetails.data());
      setLoading(false);

    }

    catch (err) {
      console.log(err);
    }
  }

  const increaseCounter = () => {
    setCounter(counter + 1)
  }
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }

  }

  return (
    <Layout>
      <div className={classes.details}>

        <Container>
          <Row>
            {
              loading ? LoadingProduct() :
              product &&  
              (
                <>
                  <Col sm={12} md={6} lg={6}>
                    <div className={classes.details_product_image}>
                      <Image src={product.image} alt={product.title} thumbnail />
                    </div>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <div className={classes.details_product}>
                      <div className={classes.details_title}><h1>{product.title}</h1> </div>
                      <div className={classes.details_price}> {product.price} $</div>

                      <div className={classes.rating}>
                        <span>{product.rating.rate}</span>
                        <FaStar />
                      </div>

                    </div>

                    <div className={classes.details_addedtocart}>
                      <div className={classes.details_addedtocart_buttons}>

                        <button className={classes.decreaseCounter} onClick={() => decreaseCounter()}>-</button>
                        <span className={classes.counter}>{counter}</span>
                        <button className={classes.decreaseCounter} onClick={() => increaseCounter()}>+</button>

                        <button className={classes.addProductToCart} onClick={() => dispatch(addProductToCart({ product, counter }))}>
                          Add To Cart
                        </button>
                      </div>

                      <p className={classes.description}>{product.description}</p>

                    </div>
                  </Col>
                </>
              )
            }
          </Row>
        </Container>
      </div>

    </Layout>

  )
}
