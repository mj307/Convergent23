import React, {useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {  createUserWithEmailAndPassword  } from 'react-native-firebase/auth';
//import { auth } from '../firebase';
// import { getAnalytics } from "react-native-firebase/analytics";
// import { getAuth } from "react-native-firebase/auth";
// import { getFirestore } from "react-native-firebase/firestore";
import {StyleSheet, Text, View} from "react-native";
import Menu from "./Menu";
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <View style={styles.menuStyle}>
        <View style={styles.lineStyle}>
             <Menu />
             <View
                 style={[
                     styles.lineStyle,
                     {
                         marginVertical: 15,
                     },
                 ]}></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    baseText: {
        fontWeight: 'bold',
    },
    innerText: {
        color: 'red',
    },
    button: {
        color: "pink",
    },
    baseText1: {
        fontWeight: 'bold',
        fontSize: 18, // You can set the font size
        color: 'blue', // You can set the text color
      },
});
 
export default Signup




// const Signup = () => {
//     return (
//         <View style={styles.menuStyle}>
//             <View style={styles.lineStyle}></View>
//             <Menu />
//             <View
//                 style={[
//                     styles.lineStyle,
//                     {
//                         marginVertical: 15,
//                     },
//                 ]}></View>
//         </View>
//     );
// };

// import React, {useState} from 'react';
// import {  signInWithEmailAndPassword   } from 'firebase/auth';
// import { auth } from '../firebase';
// import { NavLink, useNavigate } from 'react-router-dom'
 
// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
       
//     const onLogin = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             navigate("/home")
//             console.log(user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage)
//         });
       
//     }
 
//     return(
//         <>
//             <main >        
//                 <section>
//                     <div>                                            
//                         <p> FocusApp </p>                       
                                                       
//                         <form>                                              
//                             <div>
//                                 <label htmlFor="email-address">
//                                     Email address
//                                 </label>
//                                 <input
//                                     id="email-address"
//                                     name="email"
//                                     type="email"                                    
//                                     required                                                                                
//                                     placeholder="Email address"
//                                     onChange={(e)=>setEmail(e.target.value)}
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="password">
//                                     Password
//                                 </label>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"                                    
//                                     required                                                                                
//                                     placeholder="Password"
//                                     onChange={(e)=>setPassword(e.target.value)}
//                                 />
//                             </div>
                                                
//                             <div>
//                                 <button                                    
//                                     onClick={onLogin}                                        
//                                 >      
//                                     Login                                                                  
//                                 </button>
//                             </div>                               
//                         </form>
                       
//                         <p className="text-sm text-white text-center">
//                             No account yet? {' '}
//                             <NavLink to="/signup">
//                                 Sign up
//                             </NavLink>
//                         </p>
                                                   
//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// }
 


