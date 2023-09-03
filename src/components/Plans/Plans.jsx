import style from './Plans.module.css'

const plans = [
	{
		img: 'images/icon-free.svg',
		title: 'Dip your toe',
		price: 'Free',
		description:
			'Just getting started? No problem at all! Our free plan will take you a long way.',
		benefits: [
			'Unlimited products',
			'Basic analytics',
			'Limited marketplace exposure',
			'10% fee per transaction',
		],
	},
	{
		img: 'images/icon-paid.svg',
		title: 'Dive right in',
		price: '25.00',
		description:
			'Ready for the big time? Our paid plan will help you take your business to the next level.',
		benefits: [
			'Unlimited products',
			'Advanced analytics',
			'Unlimited marketplace exposure',
			'5% fee per transaction',
		],
	},
]

function Plans() {
	return (
		<section className='container'>
			<div className={style.plans}>
				<div>
					<h2 className={style['sub-title']}>Our pricing plans</h2>
					<p className={style.paragraph}>
						We only make money when our creators make money. Our plans are
						always affordable, and it’s completely free to get started.
					</p>
				</div>

				<div className={style.wrapper}>
					{plans.map((plan, i) => (
						<div
							className={`${style.card} ${
								plan.price.toLocaleLowerCase() === 'free'
									? style.free
									: style.premium
							}`}
							key={`${i}-plan-option`}
						>
							<img className={style.image} src={plan.img} alt="testing" />
							<h3 className={style.title}>{plan.title}</h3>
							<p className={style.description}>{plan.description}</p>

							<span className={style.price}>
								{plan.price.toLocaleLowerCase() === 'free'
									? plan.price
									: `$${plan.price}`}
							</span>
							<ul className={style.benefits}>
								{plan.benefits.map((benefit, i) => (
									<li key={`${i}-plan-benefit`} className={style.benefit}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="12"
											height="9"
											role="img"
											aria-labelledby="ckeck-icon"
										>
											<title id="check-icon">Check icon</title>
											<path
												fill="#093F68"
												d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
											/>
										</svg>
										{benefit}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Plans
