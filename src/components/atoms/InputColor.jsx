import PropTypes from 'prop-types'

function InputColor({ label, color, setter }) {
  return (
    <div style={{ marginBottom: `${10}px` }}>
      <span>{label}:</span>
      <input
        type="color"
        value={color}
        style={{ width: '30px', height: '20px', marginLeft: '10px' }}
        onChange={(e) => setter(e.target.value)}
      />
    </div>
  )
}

InputColor.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
}

export default InputColor
