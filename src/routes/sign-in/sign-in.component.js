import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </>
    )
}

export default SignIn;