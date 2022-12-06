import PropTypes from 'prop-types'

export function InputNumber({ label, value, onChange }) {
  return (
    <>
      <span>{label}:</span>
      <input
        type="number"
        style={{ width: '50px', marginLeft: '10px', marginBottom: '10px' }}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

InputNumber.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}
