import PropTypes from 'prop-types'

function Square({ size, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: size,
        height: size,
      }}
    />
  )
}

Square.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default Square
