import style from './Hero.module.css'
import heroImg from '../../assets/illustration-hero-mobile.png'

function Hero() {
	return (
		<section className={style.hero}>
			<img width={413} height={230} className={style['hero-img']} src={heroImg} alt="hero image" />
			<div className={style['full-bleed']}>
				<div className={style.left}></div>
				<div className={style.wrapper}>
					<h1 className={style.title}>
						Get paid for the work you <span>love</span> to do.
					</h1>
					<p className={style.paragraph}>
						The 9-5 grind is so last century. We believe in living life on your
						own terms. Whether you’re looking to escape the rat race or set up a
						side hustle, we’ve got you covered.
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="42"
						role="img"
						aria-labelledby="icon-scroll"
					>
						<title id="icon-scroll">Icon scroll</title>
						<g fill="none" fillRule="evenodd" stroke="#3EE9E5" strokeWidth="2">
							<rect width="24" height="40" x="1" y="1" rx="12" />
							<rect width="4" height="4" x="11" y="12" rx="2" />
						</g>
					</svg>
				</div>
				<div className={style.right}></div>
			</div>
		</section>
	)
}

export default Hero
