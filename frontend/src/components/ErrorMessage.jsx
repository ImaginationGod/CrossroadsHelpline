const ErrorMessage = ({ message }) => {
    return (
        <div className="text-center text-red-600 font-medium py-6">
            {message}
        </div>
    );
};

export default ErrorMessage;
