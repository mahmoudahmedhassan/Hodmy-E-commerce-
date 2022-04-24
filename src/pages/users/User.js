import { React, useState, useEffect } from 'react';
import Layout from '../../layout/Layout';
import classes from './user.module.css';
import { getAuth, } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { Container, Row, Col } from 'react-bootstrap';

function User() {
  const { user } = useSelector(state => state.user);
  const navigate = useNavigate();
  const auth = getAuth();
  const [orders, setOrders] = useState([]);

  const signOut = () => {
    auth.signOut()
    localStorage.removeItem('user')
    window.location.reload();
  };

  useEffect(() => {
    getOrders()
  }, [])

  async function getOrders() {
    try {
      const orders = await getDocs(collection(db, "orders"));
      const ordersArray = []
      orders.forEach((doc) => {
        ordersArray.push(doc.data());
      });
      setOrders(ordersArray)
    }

    catch (err) {
      console.log(err);
    }
  }
  const ordersItems = orders && orders.map(order => (
    order.cart.map(item => (
      <div key={item.id} className={classes.ordershistory_items}>
        <div>
          <img src={item.image} alt={item.title} />
        </div>
        <div>
          {item.title}
        </div>
        <div>
          {item.price * item.counter} $
        </div>

      </div>
    ))
  ))

  return (
    <Layout>
      <div className={classes.user}>
        <div className={classes.account}>
          <h1> My Account</h1>
          {user ? (<button onClick={signOut}>
            Log out
          </button>) : (<button onClick={() => navigate('/login')}>go to login</button>)}
        </div>
      </div>

      {user && ordersItems.length > 0 &&
        <Container>
          <div className={classes.ordershistory}>
            <div className={classes.ordershistory_head}>
              <div>
                image
              </div>
              <div>
                name
              </div>
              <div>
                price
              </div>
            </div>
            <Row>
              <Col>
                {ordersItems}
              </Col>

            </Row>
          </div>
        </Container>
      }

    </Layout>
  )
}

export default User