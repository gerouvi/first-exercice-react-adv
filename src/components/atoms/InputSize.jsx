import PropTypes from 'prop-types'

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
  setter: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
}

export default InputSize
