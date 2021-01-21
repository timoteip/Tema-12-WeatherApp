import React, { useState } from 'react'
import SelectLocation from './SelectLocation'
import WeatherPanel from './WeatherPanel'

const App = () => {
	const [city, setCity] = useState('')

	return (
		<div>
			<h1>Cauta localitate: {city}</h1>
			<SelectLocation onSelect={setCity} />
			<WeatherPanel city={city} />
		</div>
	)
}

export default App
