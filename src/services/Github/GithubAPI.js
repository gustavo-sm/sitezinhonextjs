import { Octokit } from "@octokit/core";
import ErrorResponse from "./responses/ErrorResponse";

const OctoRequest = () => {
    var octokit;
    function initOctokitUnAuth() {
        octokit = new Octokit({ });
    }
    
    async function GETRequest(endpoint = '', payload = {}) {
        const error_resp = ErrorResponse();
        try {
            if(!endpoint){
                error_resp.defineResponse('endpoint_not_defined');
                return error_resp.getResponse();
            }

            return await octokit.request(`GET ${endpoint}`, payload);
        } catch(err) {
            error_resp.defineResponse(`${err.status}`);
            return error_resp.getResponse();
        }
    }
    return {
        initOctokitUnAuth, 
        GETRequest
    };
};

export default OctoRequest;
