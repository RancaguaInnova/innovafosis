import PropTypes from 'prop-types'
import React from 'react'
import { Star } from '@material-ui/icons'

const StarField = ({ source, record = {} }) => (
  <div className='star-rating'>
    {[...Array(record[source])].map((n, i) => (
      <Star key={i} />
    ))}
  </div>
)

StarField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired
}

export default StarField
