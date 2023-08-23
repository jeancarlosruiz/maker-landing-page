import style from './Benefits.module.css'
import img from '../../assets/illustration-passions.svg'

const benefitsCard = [
    {title: "Indulge your passions", description: "Your passions shouldn't be just for the weekend. Earn a living doing what you love." },
    {title: "Gain financial freedom", description: "Start making money work for you. There’s nothing quite like earning while you sleep. " },
    {title: "Choose your lifestyle", description: "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week." },
    {title: "Work from anywhere", description: "Selling online means not being pinned down. Want to work AND travel? Go for it!" },

]

function Benefits() {
  return (
    <section className={style.benefits}>
        <h2 className='visually-hidden'>Benefits Section</h2>
        <div className={style.card}>
            <div className={style.wrapper}>
            <img className={style.img} src={img} alt="testin" />
            </div>
            <h3 className={style.subtitle}>Indulge your passions</h3>
            <p className={style.paragraph}>Your passions shouldnt be just for the weekend. Earn a living doing what you love.</p>
        </div>
    </section>
  )
}

export default Benefits