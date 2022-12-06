import PropTypes from 'prop-types'

export function InputColor({ label, color, onChange }) {
  return (
    <div style={{ marginBottom: `${10}px` }}>
      {/* Tiene que ser un <label> y tener htmlFor */}
      <span>{label}:</span>
      {/* Tiene que tener id y name */}
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
