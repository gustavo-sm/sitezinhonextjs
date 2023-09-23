import Messages from "./Messages"; 
function ResponseType() {
    return {
        "generic": Messages.ERROR_GENERIC,
        "401": Messages.ERROR_NOT_AUTH,
        "404":Messages.ERROR_NOT_FOUND,
        "endpoint_not_defined": Messages.ERROR_ENDPOINT_NOT_DEFINED
    };
}

export default ResponseType;