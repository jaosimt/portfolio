import { Component } from 'react';
import './home.scss';
import simo1 from './simo1.jpg';
import simo2 from './simo2.jpg';
import simo3 from './simo3.jpg';
import simo4 from './simo4.jpg';
import simo5 from './simo5.jpg';
import simo6 from './simo6.jpg';
import simo7 from './simo7.jpg';
import Parsonize from "../Parsonize";

const ExerciseSolution = 'System.out.print("Hello, world!");';

class Home extends Component {
	state = {
		imageIndex: 0,
		imageOpacity: 0,
		parsonize: ''
	}
	
	imageArray = [ simo2, simo1, simo3, simo4, simo5, simo6, simo7 ];
	
	componentDidMount() {
		let idxs = [],
			timeout = 49;
		
		const rotateImgIndex = () => {
			const { imageIndex } = this.state;
			let nextIndex = imageIndex + 1;
			if (nextIndex === this.imageArray.length) nextIndex = 0;
			
			setTimeout(() => {
				this.setState({
					imageIndex: nextIndex
				});
				
				if (idxs.length !== this.imageArray.length) {
					if (!idxs.includes(imageIndex)) idxs.push(imageIndex);
				} else {
					timeout = 14000;
					this.setState({ imageOpacity: 1});
				}
				rotateImgIndex();
			}, timeout);
		}
		rotateImgIndex();
	}
	
	parsonizeChangeHandler = parsonize => this.setState({ parsonize });
	
	render() {
		const { imageIndex, imageOpacity, parsonize } = this.state;
		
		return <div className="Home">
			<h2 title="Greetings" className="greetings bybyn">ᜃᜓᜋᜓᜐ᜔ᜆ</h2>
			<div className="profile-image" style={ {
				backgroundImage: `url(${this.imageArray[ imageIndex ]})`,
				opacity: imageOpacity
			} } />
			<div className="profile-description">
				<div className="greetings bybyn">ᜃᜓᜋᜓᜐ᜔ᜆ</div>
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
				<div style={{
					textAlign: 'center',
					margin: '21px 0'
				}}>-oOo-</div>
				<Parsonize
					onChange={ this.parsonizeChangeHandler }
					exerciseSolution={ ExerciseSolution }
				/>
				<p style={{ whiteSpace: 'nowrap', color: ExerciseSolution === parsonize ? '#0cc10c' : '#ff3c00' }}><b>{ parsonize }</b></p>
			</div>
		</div>
	}
}

export default Home;
