export const colors = {
  background: '#f9dbbd',
  contrast: '#adf5ff',
  contrastDark: '#021aee',
  error: '#ff0033',
  highlight: '#da627d',
  nav: '#61edff',
  primary: '#ff7e65',
  secondary: '#ffa5ab',
  success: '#00FF2B',
  successDark: '#00B31E'
};

export const buttons = {
  alignItems: 'center',
  anchorHover: `${colors.highlight}`,
  anchorBackground: `linear-gradient(to right, ${colors.contrastDark}, ${
    colors.contrast
  }, ${colors.contrastDark});`,
  delete: `linear-gradient(to right, ${colors.background}, ${colors.error}, ${
    colors.error
  });`,
  deleteHover: `${colors.error}`,
  backgroundSize: '200px',
  border: 'none',
  borderRadius: '4px',
  color: '#fff',
  display: 'flex',
  height: '40px',
  justifyContent: 'center',
  margin: '1em',
  padding: '0 15px',
  save: `linear-gradient(to right, ${colors.success}, ${colors.successDark}, ${
    colors.successDark
  });`,
  search: `linear-gradient(to right, ${colors.background}, ${colors.primary}, ${
    colors.primary
  });`
};
