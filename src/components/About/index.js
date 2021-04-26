import { Component } from "react";
import './about.scss';
import award from './sImoAwardSmall.png';

class About extends Component {
	render() {
		const { offset: o } = this.props;
		const offset = o.header + o.footer + o.margin;
		
		return <div
			className={ 'About' }
			style={ {
				minHeight: `calc(100vh - ${ offset }px)`
			} }>
			<div className="wrapper">
				<div className="banner">About me</div>
				<div className="content">
					<h1>I am <span className='gold'>Sim Tero Jao</span>, I am a <span className="gold">Web Developer</span>.</h1>
					<p>
						Born and raised in Alburquerque, Bohol, Philippines, now living in Cebu. A husband and a father of two
						beautiful kids. Originally dreamed to be in the army but failed after a strong contradiction from my
						ever loving mother. Got fascinated with computers way back in the early 90’s after my older brother
						enrolled me into it.
					</p>
					
					<p>
						My days in school was never enough without me hanging in the school’s computer laboratory for anything
						I had thought would complete my day.
					</p>
					
					<p>
						Despite the hardships and the “lesser education” my widowed mother ever could afford sending me to, I
						have graduated with the highest award that <strong>Interface Computer College – Cebu</strong> could
						ever give to their graduates… And so I was named as the best Computer Programmer for that school year.
					</p>
					<img className='award' src={ award } alt="" />
					<p>
						My first ever job awaits me even before I graduated which was awesome.  Lost it however almost as early as I have it; <span className='hidden'>You may refer to this page for more details.</span>  Soon after that, thankfully had my second, my third, my fourth, my fifth then my sixth up to the present.
					</p>
				</div>
			</div>
		</div>
	}
}

export default About;