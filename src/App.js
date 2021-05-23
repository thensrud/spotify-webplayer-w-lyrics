import Login from "../src/Login";
import Dashboard from "./Dashboard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
	// Shows Login-component if no "code" (code parameter in returned URL). Shows Dashboard if code.
	return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
