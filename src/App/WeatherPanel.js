import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import groupBy from 'lodash/groupBy'

import Day from './Day'

const WeatherPanel = ({ city }) => {
	const [error, setError] = useState('')
	const [data, setData] = useState([])

	useEffect(() => {
		if (!city) {
			return null
		}

		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric&lang=ro`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data?.cod !== '200') {
					setError(data?.message)
					return
				}

				const groupedByDay = groupBy(data?.list, (item) => {
					return format(new Date(item?.dt_txt), 'yyyy-MM-dd')
				})

				setData(groupedByDay)
			})
			.catch((error) => {
				setError(error?.message)
			})
	}, [city])

	return (
		<div className="weatherPanel">
			{error && <div className="error">Error: {error}</div>}
			{Object.entries(data).map(([day, list]) => {
				return <Day key={day} day={day} list={list} />
			})}
		</div>
	)
}

WeatherPanel.propTypes = {
	city: PropTypes.string,
}

export default WeatherPanel
