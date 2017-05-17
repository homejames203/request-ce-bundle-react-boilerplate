export const success = key => ({ data }) => {
  const extracted = {};
  extracted[key] = data;
  return extracted;
};

export const error = ({ response }) => {
  const { data, status, statusText } = response;

  if ([401, 500].includes(status)) {
    return { errors: [statusText] };
  } else if (response.data.errors) {
    return { errors: data.errors };
  }
  return { errors: [statusText] };
};
