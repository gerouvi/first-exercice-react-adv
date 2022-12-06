import PropTypes from 'prop-types'

// Generalizarlo a inputNumber
function InputSize({ label, size, setter }) {
  return (
    <>
      <span>{label}:</span>
      <input
        type="number"
        style={{ width: '50px', marginLeft: '10px', marginBottom: '10px' }}
        value={size}
        onChange={(e) => setter(Number(e.target.value))}
      />
    </>
  )
}

InputSize.propTypes = {
  label: PropTypes.string.isRequired,
  // La propiedad setter debería de ser un onChange
  setter: PropTypes.func.isRequired,
  // La propiedad size debería de ser value
  size: PropTypes.number.isRequired,
}

export default InputSize
