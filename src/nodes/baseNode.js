import { Handle } from 'reactflow';

export const BaseNode = ({ 
  id, 
  title, 
  subtitle,
  fields = [], 
  handles = [] 
}) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>{subtitle && subtitle}</span>
      </div>
      {fields.map(({ label, value, onChange, type = "text", options }, index) => (
        <div key={index}>
          <label>
            {label}:
            {type === 'select' ? (
              <select value={value} onChange={onChange}>
                {options?.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input type={type} value={value} onChange={onChange} />
            )}
          </label>
        </div>
      ))}
      {handles.map(({ type, position, id, style }, index) => (
        <Handle key={index} type={type} position={position} id={id} style={style} />
      ))}
    </div>
  );
};
