import SocialMediaLinks from "./components/SocialMediaLinks/SocialMediaLinks";
import './App.scss';

function App() {
	return (
		<div className="App">
			<div className="header">
				<div className="logo bybyn"><strong>ᜐᜒᜋ᜔</strong> ᜑᜏ᜔</div>
				<ul>
					<li className="about-me">About Me</li>
					<li className="portfolio">Portfolio</li>
					<li className="blogs">Blogs</li>
				</ul>
			</div>
			<div className="content">
				<div className="profile-image" />
				<div className="profile-description">
					<div className="greetings bybyn">ᜃᜋᜓᜐ᜔ᜆ</div>
					<h1 className="name">Sim Jao</h1>
					<p>
						I am a web designer and developer specializing in JavasSript including but not limited to React JS.
					</p>
					
					<p>
						My experiences made me grow a lot working from an average joe to a multinational. With Javascript, I
						am a fullstack developer.
					</p>
					<p>
						At times, I maybe vocal and loud, but I am a more laid-back person.
					</p>
				</div>
			</div>
			<div className="footer">
				<span><strong>What</strong> I Do</span>
				<SocialMediaLinks />
			</div>
		</div>
	);
}

export default App;
