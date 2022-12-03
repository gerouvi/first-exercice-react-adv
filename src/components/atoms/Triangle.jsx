import PropTypes from 'prop-types'

function Triangle({ size, color }) {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderBottom: `${size}px solid ${color}`,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
      }}
    />
  )
}

Triangle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default Triangle
