import { React, useState, useEffect } from 'react';
import classes from './home.module.css';

import Layout from '../../layout/Layout';
import Slider from '../../componets/slider/Slider';
import Filters from '../../componets/filters/Filters'

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';

import { LoadingProducts } from '../../componets/loading/Loading'

import {
  useNavigate
} from "react-router-dom";

function Home() {
  // Add a new document in collection "cities"
  const [data, setData] = useState([]);
  const [serach, setSerach] = useState('');
  const [selectCategory, setSelectCategory] = useState();
  const [loading, setLoading] = useState(null);
  console.log(selectCategory)
  const navigation = useNavigate()
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      setLoading(true);
      const products = await getDocs(collection(db, "products"));
      const productsArray = []
      products.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data()
        }
        productsArray.push(obj);
      });
      setData(productsArray)
      setLoading(false);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout>

      <Slider />

      <Filters
        setSerach={setSerach}
        serach={serach}
        setSelectCategory={setSelectCategory}
        selectCategory={selectCategory}
      />

      <Container style={{ marginBottom: '50px' }}>
        <Row>

          {loading ? LoadingProducts() :

            // eslint-disable-next-line array-callback-return
            data.filter((el) => {
              if (serach === '' && !selectCategory) {
                return el
              } else if (
                (el.title.toLowerCase().includes(serach)
                ,el.category === selectCategory)) {
                return el
              }
            })
             .map((el) => (
              <Col sm={6} md={4} lg={3} key={el.id} text-center>
                <div className={classes.card}>
                  <div className={classes.card_imge}>
                      <img src={  el.image} alt={el.title} height='300px' width='300px' />  
                   </div>

                  <div className={classes.card_body}>
                    <p>{el.title}</p>
                    <div className={classes.card_body_details}>
                      <p>{el.price} $</p>
                      <button onClick={() => navigation(`/product/${el.id}`)} > details</button>
                    </div>

                  </div>
                </div>

              </Col>
            ))
            }

          {/* {loading ? LoadingProducts() :

            data.filter((el) => el.title.toLowerCase().includes(serach.toLowerCase()))
              .filter((el) => el.category.includes(selectCategory))
              .map((el) => (
                <Col sm={6} md={4} lg={3} key={el.id} text-center>
                  <div className={classes.card}>
                    <div className={classes.card_imge}>
                      <img src={el.image} alt={el.title} height='300px' width='300px' />
                    </div>

                    <div className={classes.card_body}>
                      <p>{el.title}</p>
                      <div className={classes.card_body_details}>
                        <p>{el.price} $</p>
                        <button onClick={() => navigation(`/product/${el.id}`)} >details</button>
                      </div>
                    </div>
                  </div>

                </Col>
              ))
          } */}

        </Row>
      </Container>
    </Layout>
  )
}

export default Home
