import awsConfig from "./aws-exports";
import { Amplify } from "aws-amplify";
import { Signup } from "./Signup";

Amplify.configure(awsConfig);

console.log(awsConfig);

function App() {
    return (
        <>
            <Signup />
        </>
    );
}

export default App;
