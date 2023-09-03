import style from './Benefits.module.css'

const benefitsCard = [
	{
		img: 'images/illustration-passions.svg',
		title: 'Indulge your passions',
		description:
			"Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
	},
	{
		img: 'images/illustration-financial-freedom.svg',
		title: 'Gain financial freedom',
		description:
			'Start making money work for you. There’s nothing quite like earning while you sleep. ',
	},
	{
		img: 'images/illustration-lifestyle.svg',
		title: 'Choose your lifestyle',
		description:
			'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.',
	},
	{
		img: 'images/illustration-work-anywhere.svg',
		title: 'Work from anywhere',
		description:
			'Selling online means not being pinned down. Want to work AND travel? Go for it!',
	},
]

function Benefits() {
	return (
		<section className='container'>
			<h2 className="visually-hidden">Benefits Section</h2>
			<div className={style.wrapper}>
				{benefitsCard.map((benefit, i) => (
					<div className={style.card} key={i}>
						<div className={style['img-container']}>
							<img
								className={style.img}
								src={benefit.img}
								alt="image benefit"
							/>
						</div>
						<div className={style['text-align']}>
							<h3 className={style.subtitle}>{benefit.title}</h3>
							<p className={style.paragraph}>{benefit.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Benefits
