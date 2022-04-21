import { React, useState, useEffect } from 'react'
import classes from './checkout.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from 'react-router';
import { useSelector } from "react-redux";
import icons8 from '../../componets/images/icons8-user-64.png';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineShoppingCart } from "react-icons/ai";

function CheckOut() {
    let navigate = useNavigate();
    const { cart } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);
    const [totalPrice, setTotalPrice] = useState(0);
    const [toggle, setToggle] = useState(false);

    const initialValues = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postCode: '',
        phone: '',

    };

    const validationSchema = yup.object({
        firstName: yup.string().max(15, 'must be 15 characters or less').required('required'),
        lastName: yup.string().max(15, 'must be more than 15 characters').required('required'),
        address: yup.string().max(90, 'must be more than 15 characters or less').required('required'),
        city: yup.string().max(90, 'must be more than 15 characters or less').required('required'),
        postCode: yup.string().max(90, 'must be more than 15 characters or less').required('required'),
        phone: yup.string().max(11, 'in valid phone').required('required'),
    });

    const onSubmit = async (values, { resetForm }) => {

        const orders = {
            cart,
            values,
            Email: user.email,
            UserId: user.uid
        }

        try {
            await addDoc(collection(db, "orders"), orders);
            navigate('/user')
        } catch (error) {
            console.log(error.message)
        }
        resetForm({ values: '' });

    };

    const formik = useFormik({
        onSubmit,
        initialValues,
        validationSchema
    });

    useEffect(() => {
        let total = 0;

        cart.map(x => {
            return (
                total += x.counter * x.price
            )
        });
        setTotalPrice((parseInt(total)));
    }, [cart])

    const cartItem = cart && cart.map(item => {
        const { title, image, price, counter } = item;

        return (
            <div className={classes.cartitems}>
                <div className={classes.cart_img}>
                    <img src={image} alt={title} height='100px' />
                    <span>{counter}</span>
                </div>
                <div>
                    {counter * price} $
                </div>

            </div>)
    })

    const showOrder = () => {
        setToggle(!toggle)
    }
    return (
        <div className={classes.checkout}>
            <Container>
                <Row className={classes.checkout_reverse}>
                    <Col sm={12} lg={6} >
                        {/* checkout_head */}
                        <div className={classes.checkout_head}>
                            <h3 onClick={() => navigate('/')}> Hdomy</h3>
                            <p> cart &gt; information &gt; shipping</p>
                        </div>

                        {/* checkout_userinfo */}
                        <div className={classes.checkout_userinfo}>

                            <form onSubmit={formik.handleSubmit}>
                                <section className={classes.contact_information}>
                                    <div className={classes.contact_information_head}>
                                        <h4>user information</h4>
                                    </div>

                                    <div className={classes.user}>
                                        <img src={icons8} alt="user" />
                                        <span>{user && user.email}</span>
                                    </div>
                                </section>

                                {/* section shipping_address */}

                                <section className={classes.shipping_address}>
                                    <h4>Shipping address </h4>
                                    <div className={classes.shipping_address_select_country}>
                                        <select>
                                            <option value=''>egypt</option>
                                        </select>
                                    </div>

                                    <div className={classes.shipping_address_add_name}>
                                        <div className={classes.first_name}>
                                            <input
                                                type="text"
                                                placeholder='First Name'
                                                id='firstName'
                                                onChange={formik.handleChange} value={formik.values.firstName}
                                                onBlur={formik.handleBlur}
                                                className={formik.touched.firstName && formik.errors.firstName ? classes.active : null}
                                            />
                                            {formik.touched.firstName && formik.errors.firstName && <AiOutlineInfoCircle className={classes.opps} />}
                                            {formik.touched.firstName && formik.errors.firstName && (<p>{formik.errors.firstName} </p>)}
                                        </div>

                                        <div className={classes.last_name}>
                                            <input
                                                type="text"
                                                placeholder='Last Name'
                                                id='lastName'
                                                onChange={formik.handleChange} value={formik.values.lastName}
                                                onBlur={formik.handleBlur}
                                                className={formik.touched.lastName && formik.errors.lastName && classes.active}
                                            />
                                            {
                                                formik.touched.lastName && formik.errors.lastName && (<AiOutlineInfoCircle className={classes.opps} />)
                                            }
                                            {formik.touched.lastName && formik.errors.lastName && (<p>{formik.errors.lastName} </p>)}


                                        </div>
                                    </div>

                                    <div className={classes.shipping_address_add_address}>
                                        <input
                                            type="text"
                                            placeholder='address'
                                            id='address'
                                            onChange={formik.handleChange} value={formik.values.address}
                                            onBlur={formik.handleBlur}
                                            className={formik.touched.address && formik.errors.address && classes.active}
                                        />
                                        {
                                            formik.touched.address && formik.errors.address && (<AiOutlineInfoCircle className={classes.opps} />)
                                        }
                                        {formik.touched.address && formik.errors.address && (<p>{formik.errors.address} </p>)}

                                    </div>


                                    <div className={classes.shipping_address_add_city_postcode}>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder='city'
                                                id='city'
                                                onChange={formik.handleChange} value={formik.values.city}
                                                onBlur={formik.handleBlur}
                                                className={formik.touched.city && formik.errors.city && classes.active}
                                            />
                                            {
                                                formik.touched.city && formik.errors.city && (<AiOutlineInfoCircle className={classes.opps} />)
                                            }
                                            {formik.touched.city && formik.errors.city && (<p>{formik.errors.city} </p>)}

                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder='post code'
                                                id='postCode'
                                                onChange={formik.handleChange} value={formik.values.postCode}
                                                onBlur={formik.handleBlur}
                                            />

                                        </div>
                                    </div>

                                    <div className={classes.shipping_address_add_phone}>
                                        <input
                                            type="tel"
                                            placeholder='Phone'
                                            id='phone'
                                            onChange={formik.handleChange} value={formik.values.phone}
                                            onBlur={formik.handleBlur}
                                            className={formik.touched.phone && formik.errors.phone ? classes.active : null}
                                        />
                                        {
                                            formik.touched.phone && formik.errors.phone && (<AiOutlineInfoCircle className={classes.opps} />)
                                        }
                                        {formik.touched.phone && formik.errors.phone && (<p>{formik.errors.phone} </p>)}

                                    </div>

                                </section>

                                {/* section order */}
                                <section className={classes.order}>
                                    <button type="submit">order</button>
                                    <span onClick={() => navigate(-1)}>return to cart</span>

                                </section>
                            </form>
                        </div>
                    </Col>

                    <Col sm={12} lg={6} className={classes.toggle_order_large_screen}>

                        <div>
                            <div className={classes.cartItem_container}>
                                {cartItem}
                            </div>

                            <div className={classes.subtotal}>
                                <div>
                                    <span>Subtotal</span>
                                    <span>{totalPrice} $</span>
                                </div>
                                <div>
                                    <span>shipping</span>
                                    <span>20 $</span>
                                </div>
                            </div>

                            <div className={classes.total}>
                                <span>total</span>
                                <span>{totalPrice + 20} $</span>
                            </div>
                        </div>

                    </Col>

                    <Col sm={12} lg={6} className={classes.toggle_order}>
                        <div className={classes.toggle_order_container}>
                            {!toggle ? (
                                <div className={classes.show_order_list} onClick={showOrder}>
                                    <div>
                                        <AiOutlineShoppingCart /> <span>Show order summary</span> <AiOutlineCaretDown />
                                    </div>
                                    <div>
                                        <span>{totalPrice + 20} $</span>
                                    </div>
                                </div>
                            ) : (
                                <div className={classes.hide_order_list} onClick={showOrder}>
                                    <AiOutlineShoppingCart />  <span>Hide order summary</span> <AiOutlineCaretUp />
                                </div>
                            )}
                        </div>
                        {
                            toggle &&
                            <div>
                                <div className={classes.cartItem_container}>
                                    {cartItem}
                                </div>

                                <div className={classes.subtotal}>
                                    <div>
                                        <span>Subtotal</span>
                                        <span>{totalPrice} $</span>
                                    </div>
                                    <div>
                                        <span>shipping</span>
                                        <span>20 $</span>
                                    </div>
                                </div>

                                <div className={classes.total}>
                                    <span>total</span>
                                    <span>{totalPrice + 20} $</span>
                                </div>
                            </div>
                        }

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CheckOut