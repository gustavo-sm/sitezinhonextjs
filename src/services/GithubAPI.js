import { Octokit } from "@octokit/core";

const OctoRequest = () => {
    var octokit;
    function initOctokitUnAuth() {
        octokit = new Octokit({ });
    }
    
    async function GETRequest(endpoint, payload) {
        try {
            return await octokit.request(`GET ${endpoint}`, payload);
        } catch(err) {
            return err;
        }
    }
    return {
        initOctokitUnAuth, 
        GETRequest
    };
};

export default OctoRequest;
