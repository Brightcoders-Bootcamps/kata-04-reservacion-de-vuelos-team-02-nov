export const handleInputNameChange = (state, setState, newValue) => {
  if (newValue.length < 3) {
    setState({...state, name: newValue, validName: false});
  } else {
    setState({...state, name: newValue, validName: true});
  }
};

const emailRegex = /^\S+@\S+\.\S+$/;
export const handleInputEmailChange = (state, setState, newValue) => {
  if (!emailRegex.test(newValue)) {
    setState({...state, email: newValue, validEmail: false});
  } else {
    setState({...state, email: newValue, validEmail: true});
  }
};

export const handleTermsCheckboxMark = (state, setState, newValue) => {
  setState({...state, termsCheckbox: newValue});
};
export const handleUpdatesCheckboxMark = (state, setState, newValue) => {
  setState({...state, updatesCheckbox: newValue});
};
export const handleInputPasswordChange = (state, setState, newValue) => {
  if (newValue.length < 7) {
    setState({...state, password: newValue, validPassword: false});
  } else {
    setState({...state, password: newValue, validPassword: true});
  }
};
