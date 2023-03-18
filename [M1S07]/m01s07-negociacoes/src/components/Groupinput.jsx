import PropTypes from 'prop-types';

export const GroupInput = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.etiqueta}</label>
      <input
        className="form-control"
        onChange={props.aoDigitar}
        type={props.tipo}
        min={props.min}
        step={props.step}
        id={props.id}
        value={props.valor}
      />
    </div>
  );
};

GroupInput.propTypes = {
  tipo: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  min: PropTypes.number,
  step: PropTypes.number,
  valor: PropTypes.string.isRequired,
  aoDigitar: PropTypes.func.isRequired,
};
