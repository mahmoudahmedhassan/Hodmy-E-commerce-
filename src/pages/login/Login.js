import { React, useState,useEffect } from 'react'
import classes from './login.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link,useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux'
import {addUser} from '../../redux/userSlice'
function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);


  // const [user, setUser] = useState(null);

  const loginUser =async (e) => {  
    e.preventDefault();

     try {
      setLoading(true)
      await signInWithEmailAndPassword(auth,email,password);
     toast.success("Registration successfully 👌",{position:'top-right'})

      navigate('/')
    } catch (error) {
      toast.error(error.message,{position:'top-right'})
     }
     setLoading(false);

    setEmail('');
    setPassword('');
   }
 
   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => { 
         dispatch(addUser(user))
      }); 
    return unsubscribe;
  }, [auth,dispatch]);

 
  return (
    <div className={classes.login}>
      <Container>
        <Row>

          <Col md={12} lg={6}>
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_mjlh3hcy.json"
              background="transparent"
              speed="2"
              style={{ width: "400px%", height: "400px" }} loop autoplay>
                
              </lottie-player>
          </Col>

          <Col md={12} lg={6}>
            <form className={classes.form_login}>

              <div className={classes.sss}>
              
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder='Email'
                    id='email'
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
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
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required
                  />
                </div>
 
                <div>
                  <button 
                  className={classes.form_login_submit} 
                  onClick={(e)=>loginUser(e)}
                  >
                   {loading ? "loading..." : 'LogIn'}
                  </button>
                </div>
              </div>

              <div>
                <Link to={'/reigster'}>go to register</Link>
              </div>
            </form>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login