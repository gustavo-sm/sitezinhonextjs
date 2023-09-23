import ErrorResponseType from "./ResponseType";

const ErrorResponse = () => {
    var response = {};
    
    function defineResponse(mode = 'Generic'){
        const resp_type = ErrorResponseType();

        if(!resp_type[mode])
            throw `O tipo do erro ${mode} não foi mapeado!`;
        response = resp_type[mode];
    }

    function getResponse() {
        return response;
    }
    
    return {defineResponse, getResponse};
};

export default ErrorResponse;