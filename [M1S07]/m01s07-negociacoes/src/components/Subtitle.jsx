import PropTypes from 'prop-types';

export const SubTitle = props => {
  return (
    <h4 className="text-center py-2 bg-primary text-light">
      {props.subtitulo}
    </h4>
  );
};

SubTitle.propTypes = {
  subtitulo: PropTypes.string,
};
