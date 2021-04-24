import { Component } from 'react';
import './home.scss';

class Home extends Component {
	
	render() {
		return <div className="home">
			<h2 title="Greetings" className="greetings bybyn">ᜃᜋᜓᜐ᜔ᜆ</h2>
			<div className="profile-image" />
			<div className="profile-description">
				<div className="greetings bybyn">ᜃᜋᜓᜐ᜔ᜆ</div>
				<h1 className="name gold">Sim Jao</h1>
				<p>
					I am a web designer and developer specializing in JavasSript including but not limited to React JS.
				</p>
				
				<p>
					My experiences made me grow a lot working from an average joe to a multinational. With Javascript, I
					am a fullstack developer.
				</p>
				<p>
					At times, I maybe annoying and loud, but I am kind of a laid-back person really.
				</p>
			</div>
		</div>
	}
}

export default Home;