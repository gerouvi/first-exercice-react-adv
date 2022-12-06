import PropTypes from 'prop-types'

export function Circle({ size, color }) {
  const sizeString = String(size)
  return (
    <div>
      <svg width={size} height={size} fill={color}>
        <circle cx={sizeString / 2} cy={sizeString / 2} r={sizeString / 2} />
      </svg>
    </div>
  )
}

Circle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}
