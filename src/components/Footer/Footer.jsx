import style from './Footer.module.css'

function Footer() {
	return (
		<section className={style.footer}>
			<div className="container">
				<div className={style.wrapper}>
					<h2 className={style.title}>Get notified when we launch</h2>
					<form className={style.form}>
						<input
							type="email"
							placeholder="Email address"
							className={style.email}
						/>
						<button className={style.submit}>Get notified</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Footer
