const fetch = require('node-fetch');

class GitHub {
    constructor(){
    }

    static getProfile(username){
        return fetch(`https://api.github.com/users/${username}`);
    }

    static async getData(username, req, res){
        
        try {
            const getProfileResponse = await GitHub.getProfile(username);
            const profile = await getProfileResponse.json();

            res.status(201).send({
                profile
            });

        } catch (error) {
            res.status(500).send(error);
        }
    
    }

}


module.exports.GitHub = GitHub;