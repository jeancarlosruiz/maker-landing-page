import style from './Header.module.css'

function Header() {
	return (
		<header className={style.header}>
			<div className="container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="120"
					height="35"
					role="img"
					aria-labelledby="logo"
				>
					<title id="logo">Logo Maker</title>
					<g fill="none" fillRule="evenodd">
						<path
							fill="#FFF"
							fillRule="nonzero"
							d="M51.444 25v-7.848c0-.744.206-1.35.618-1.818.412-.468.958-.702 1.638-.702.712 0 1.27.238 1.674.714.404.476.606 1.142.606 1.998V25h3.264v-7.848c0-.496.094-.934.282-1.314.188-.38.45-.676.786-.888.336-.212.732-.318 1.188-.318.712 0 1.27.238 1.674.714.404.476.606 1.142.606 1.998V25h3.264v-8.52c0-1.416-.378-2.562-1.134-3.438-.756-.876-1.874-1.314-3.354-1.314-.864 0-1.65.19-2.358.57a4.4 4.4 0 00-1.692 1.59l.092-.14-.055-.103a3.839 3.839 0 00-1.002-1.12l-.211-.149c-.652-.432-1.486-.648-2.502-.648-.888 0-1.69.196-2.406.588-.477.261-.89.585-1.237.97l-.149.175V12.04h-2.88V25h3.288zm22.32.36c1.12 0 2.046-.194 2.778-.582.57-.302 1.108-.75 1.617-1.345l.021-.025V25h2.856v-7.92c0-.592-.024-1.128-.072-1.608-.048-.48-.2-.96-.456-1.44-.456-.864-1.128-1.472-2.016-1.824-.888-.352-1.904-.528-3.048-.528-1.56 0-2.792.336-3.696 1.008a5.008 5.008 0 00-1.848 2.616l2.952.936c.208-.592.572-1.004 1.092-1.236.52-.232 1.02-.348 1.5-.348.864 0 1.48.18 1.848.54.258.252.425.604.502 1.056l.023.169-.52.077-.535.08-.514.076a41.67 41.67 0 00-2.256.39c-.664.136-1.236.292-1.716.468-.696.256-1.25.574-1.662.954-.412.38-.71.818-.894 1.314a4.695 4.695 0 00-.276 1.644c0 .72.166 1.378.498 1.974.332.596.82 1.072 1.464 1.428.644.356 1.43.534 2.358.534zm.696-2.568c-.376 0-.7-.056-.972-.168a1.39 1.39 0 01-.63-.486 1.297 1.297 0 01-.222-.762c0-.216.046-.412.138-.588.092-.176.236-.338.432-.486.196-.148.454-.286.774-.414.28-.104.604-.2.972-.288.368-.088.852-.186 1.452-.294.375-.068.822-.145 1.34-.233l.045-.007v.01c-.004.15-.01.312-.02.487l-.015.271a3.291 3.291 0 01-.294 1.23c-.088.184-.254.412-.498.684-.244.272-.572.514-.984.726-.412.212-.918.318-1.518.318zM87.468 25v-6.24L91.956 25h4.248l-4.992-6.48 4.68-6.48H91.86l-4.392 6.24V7.72h-3.312L84.132 25h3.336zm21.828-5.568c.136-1.568-.024-2.932-.48-4.092-.456-1.16-1.16-2.06-2.112-2.7-.952-.64-2.108-.96-3.468-.96-1.28 0-2.412.29-3.396.87-.984.58-1.756 1.394-2.316 2.442-.56 1.048-.84 2.28-.84 3.696 0 1.296.286 2.446.858 3.45a6.189 6.189 0 002.376 2.364c1.012.572 2.182.858 3.51.858a6.395 6.395 0 003.45-.984c1.052-.656 1.822-1.576 2.31-2.76l-3.264-.936c-.24.528-.588.932-1.044 1.212-.456.28-1.004.42-1.644.42-1.016 0-1.786-.33-2.31-.99-.363-.457-.6-1.045-.712-1.765l-.017-.125h9.099zm-3.303-2.424h-5.709l.023-.11c.112-.472.28-.875.503-1.21l.116-.162c.524-.676 1.342-1.014 2.454-1.014.952 0 1.638.29 2.058.87.258.357.437.854.537 1.491l.018.135zM115.284 25v-6.624c0-.496.068-.942.204-1.338.136-.396.336-.74.6-1.032.264-.292.588-.526.972-.702a3.584 3.584 0 011.29-.33c.476-.036.894.002 1.254.114V12.04a6.086 6.086 0 00-1.176-.03 5.403 5.403 0 00-1.14.204 4.184 4.184 0 00-1.02.45c-.408.24-.752.544-1.032.912-.112.147-.215.3-.31.46l-.05.092V12.04h-2.88V25h3.288z"
						/>
						<path
							fill="#3EE9E5"
							d="M16 0c7.971 0 14.581 5.83 15.8 13.457A12.948 12.948 0 0135 21.97 13 13 0 0122.01 35a12.95 12.95 0 01-8.553-3.2C5.829 30.58 0 23.97 0 16 0 7.163 7.163 0 16 0zm5.977 9C14.8 9.013 8.99 14.84 9 22.016a12.97 12.97 0 004.457 9.783 16.126 16.126 0 003.846.149A11 11 0 0122.01 11a11.011 11.011 0 019.937 6.305C31.319 25.1 25.1 31.319 17.303 31.948a11.002 11.002 0 0014.644-14.643 16.117 16.117 0 00-.148-3.847A12.97 12.97 0 0021.977 9z"
						/>
					</g>
				</svg>
			</div>
		</header>
	)
}

export default Header
