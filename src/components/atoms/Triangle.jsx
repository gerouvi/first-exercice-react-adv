import PropTypes from 'prop-types'

export function Triangle({ size, color }) {
  return (
    <div>
      <svg width={size} height={size} fill={color}>
        <polygon points={`${size / 2},0 0,${size} ${size},${size}`} />
      </svg>
    </div>
  )
}

Triangle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}
