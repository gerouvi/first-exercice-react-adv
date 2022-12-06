import PropTypes from 'prop-types'

export function InputColor({ label, color, onChange }) {
  return (
    <div style={{ marginBottom: `${10}px` }}>
      <span>{label}:</span>
      <input
        type="color"
        value={color}
        style={{ width: '30px', height: '20px', marginLeft: '10px' }}
        onChange={onChange}
      />
    </div>
  )
}

InputColor.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
