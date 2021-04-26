import { BrowserRouter as Router } from 'react-router-dom';
import ContentContainer from "./components/ContentContainer";
import './App.scss';

function App() {
	return (
		<div className="App">
			<Router>
				<ContentContainer/>
			</Router>
		</div>
	);
}

export default App;
