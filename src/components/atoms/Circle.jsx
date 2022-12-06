import PropTypes from 'prop-types'

function Circle({ size, color }) {
  return (
    // Cambiar <div> y css por SVG
    <div
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: '50%',
      }}
    />
  )
}

Circle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default Circle
