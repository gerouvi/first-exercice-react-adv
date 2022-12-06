import PropTypes from 'prop-types'

export function Square({ size, color }) {
  return (
    <div>
      <svg width={size} height={size} fill={color}>
        <rect width={size} height={size} />
      </svg>
    </div>
  )
}

Square.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}
