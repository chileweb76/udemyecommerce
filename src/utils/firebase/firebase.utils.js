import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; 
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBXXAOxi7LfabqLa9g6-StVUhbSH08vzA8",
    authDomain: "udemy-ecommerce-27fd1.firebaseapp.com",
    projectId: "udemy-ecommerce-27fd1",
    storageBucket: "udemy-ecommerce-27fd1.appspot.com",
    messagingSenderId: "420127749486",
    appId: "1:420127749486:web:364265a7f95abc8a493d7f"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({ 
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{ 
            await setDoc(userDocRef, { 
                displayName, 
                email,
                createdAt

            });
        } catch (error){
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
  };