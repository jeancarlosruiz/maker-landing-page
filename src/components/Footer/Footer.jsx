import { useState } from 'react'
import style from './Footer.module.css'

function Footer() {
	const [errorEmail, setErrorEmail] = useState(false)
	const [email, setEmail] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		const email = e.target.email.value

		if (emailRegex.test(email)) {
			setErrorEmail(false)
            setEmail('')
			e.target.reset()
		} else {
			setErrorEmail(true)
		}
	}
	return (
		<section className={style.footer}>
			<div className="container">
				<div className={style.wrapper}>
					<h2 className={style.title}>Get notified when we launch</h2>
					<form className={style.form} onSubmit={handleSubmit} noValidate>
						<div className={style['flex-group']}>
							<input
								type="email"
								name="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder="Email address"
								className={`${style.email} ${errorEmail && style.error}`}
								autoComplete="off"
							/>

							{errorEmail && (
								<span className={style['error-msg']}>
									Oops! That doesn’t look like an email address
								</span>
							)}
						</div>
						<button disabled={email.length === 0} className={style.submit}>
							Get notified
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Footer
