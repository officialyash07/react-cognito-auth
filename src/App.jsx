import awsConfig from "./aws-exports";
import { Amplify } from "aws-amplify";
import Signup from "./Signup";
import Login from "./Login";

Amplify.configure(awsConfig);

function App() {
    return (
        <>
            <Signup />
            <Login />
        </>
    );
}

export default App;
