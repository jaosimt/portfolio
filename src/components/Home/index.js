import { Component } from 'react';
import './home.scss';
import simo1 from './simo1.jpg';
import simo2 from './simo2.jpg';
import simo3 from './simo3.jpg';
import simo4 from './simo4.jpg';
import simo5 from './simo5.jpg';
import simo6 from './simo6.jpg';
import simo7 from './simo7.jpg';

class Home extends Component {
	state = {
		imageIndex: 0
	}
	
	imageArray = [ simo1, simo2, simo3, simo4, simo5, simo6, simo7 ];
	
	componentDidMount() {
		const rotateImgIndex = () => {
			const { imageIndex } = this.state;
			let nextIndex = imageIndex + 1;
			if (nextIndex === this.imageArray.length) nextIndex = 0;
			
			setTimeout(() => {
				this.setState({
					imageIndex: nextIndex
				});
				
				rotateImgIndex();
			}, 14000);
		}
		rotateImgIndex();
	}
	
	render() {
		const { imageIndex } = this.state;
		
		return <div className="Home">
			<h2 title="Greetings" className="greetings bybyn">ᜃᜋᜓᜐ᜔ᜆ</h2>
			<div className="profile-image" style={ {
				backgroundImage: `url(${this.imageArray[ imageIndex ]})`
			} } />
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
					At times, I may be annoying and loud, but I am kind of a laid-back person really.
				</p>
			</div>
		</div>
	}
}

export default Home;