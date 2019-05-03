import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  buttons: PropTypes.object.isRequired
};

const FormContainer = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1em;
  margin: 1em auto;
  max-width: 25em;

  button {
    background: ${({ buttons }) => buttons.search};
    background-size: ${({ buttons }) => buttons.backgroundSize};
    border: ${({ buttons }) => buttons.border};
    border-radius: ${({ buttons }) => buttons.borderRadius};
    color: ${({ buttons }) => buttons.color};
    cursor: pointer;
    height: ${({ buttons }) => buttons.height};
    margin-left: 1em;
    padding: ${({ buttons }) => buttons.padding};
    transition: all 0.6s ease;
    width: 100px;

    &:hover {
      background-position: -100px;
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    }
  }
`;

FormContainer.propTypes = propTypes;

export default FormContainer;
