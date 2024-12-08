const FormattedDateTime = (datetime) => {
    return new Date(datetime).toISOString().replace('T', ' ').split('.')[0];
};

export default FormattedDateTime;