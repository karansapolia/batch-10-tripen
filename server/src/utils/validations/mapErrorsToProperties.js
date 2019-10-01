import isEmpty from './common/isEmpty';

const addErrorForProperty = (key, object, addErrorFn, errors) => addErrorFn(errors, object, key);

const mapErrorsToProperties = (propertiesWithValidations, object) => {
  const errors = propertiesWithValidations.reduce((currentErrors, propertyWithValidations) => {
    const errorFunctions = propertyWithValidations[1];
    const property = propertyWithValidations[0];
    errorFunctions.every((errorFn) => addErrorForProperty(
      property,
      object,
      errorFn,
      currentErrors,
    ) && isEmpty(currentErrors[property]));
    return currentErrors;
  }, {});
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default mapErrorsToProperties;
