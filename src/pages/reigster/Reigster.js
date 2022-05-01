import { React, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './reigster.module.css';
// import Loading from '../../componets/loading/Loading';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link ,useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reigster() {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    if (email.includes(null)) {
     } else {
       try { 
        setLoading(true)
       await createUserWithEmailAndPassword(auth, email, password );
      toast.success("Registration successfully 👌", { position: 'top-right' })
      navigate('/login')
    } catch (error) {
      console.log(error)
      toast.error(error.message, { position: 'top-right' })
    }
    setLoading(false)

     }

   
  };

  return (
    <div className={classes.register}>
      <Container>
        <Row className={classes.register_user}>
          <Col md={12} lg={6}>
            <form className={classes.form_register} autoComplete="off" >
               
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder='Email'
                  id='email'
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder='Password'
                  id='password'
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                  required
                />
              </div>
            
              <div>
                <button
                  className={classes.form_register_submit}
                  type="submit"
                  onClick={(e) => registerUser(e)}
                >
                  {loading ? "Loading...": 'Register'}
                </button>

                <Link to={'/login'}> Go to login</Link>

              </div>
            </form>

          </Col>
          <Col md={12} lg={6}>
            <div>
           
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_q5pk6p1k.json"
                background="transparent"
                speed="2"
                style={{ width: "400px%", height: "400px" }} loop autoplay>

              </lottie-player>

            </div>

          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Reigster