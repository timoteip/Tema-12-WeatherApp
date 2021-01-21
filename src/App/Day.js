import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = ({ day, list }) => {
	return (
		<div>
			{format(new Date(day), 'eeee, dd LLLL')}
			{list.map((item) => {
				return <div key={item?.dt}>{item?.dt_txt}</div>
			})}
		</div>
	)
}

Day.propTypes = {
	day: PropTypes.string,
	list: PropTypes.array,
}

export default Day
