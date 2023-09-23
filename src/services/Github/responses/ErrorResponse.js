import ErrorResponseType from "./ResponseType";

const ErrorResponse = () => {
    var response = {};
    
    function defineResponse(mode = -1){
        const resp_type = ErrorResponseType();
        if(!resp_type[mode])
            throw `O tipo do erro ${mode} não foi mapeado!`;

        response = { 
            "message": resp_type[mode],
            "status": mode
        }
    }

    function getResponse() {
        return response;
    }
    
    return {defineResponse, getResponse};
};

export default ErrorResponse;