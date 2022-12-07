import PropTypes from 'prop-types'

export function InputColor({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: `${10}px` }}>
      <label htmlFor="colorShape">{label}:</label>
      <input
        id="colorShape"
        name="colorShape"
        type="color"
        value={value}
        style={{ width: '30px', height: '20px', marginLeft: '10px' }}
        onChange={onChange}
      />
    </div>
  )
}

InputColor.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
