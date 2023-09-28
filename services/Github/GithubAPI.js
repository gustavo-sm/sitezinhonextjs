import { Octokit } from "@octokit/core";
import ErrorResponse from "./responses/ErrorResponse";

const OctoRequest = () => {
    var octokit;
    function initOctokitUnAuth() {
        octokit = new Octokit({ });
    }
    
    async function GETRequest(endpoint = '', payload = {}) {
        try {
            if(!endpoint){  
                throw {status: 400};
            }
            return await octokit.request(`GET ${endpoint}`, payload);

        } catch(err) {
            const error_resp = ErrorResponse();
            error_resp.defineResponse(err.status);
            return error_resp.getResponse();
        }
    }
    return {
        initOctokitUnAuth, 
        GETRequest
    };
};

export default OctoRequest;
