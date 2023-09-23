import Messages from "./Messages"; 
function ErrorErrorResponseType() {
    return {
        "-1": Messages.ERROR_GENERIC,
        "401": Messages.ERROR_NOT_AUTH,
        "404":Messages.ERROR_NOT_FOUND,
        "400": Messages.ERROR_BAD_REQUEST
    };
}

export default ErrorErrorResponseType;