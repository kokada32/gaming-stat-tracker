import dotenv from 'dotenv';

dotenv.config();

const baseUrl = "https://parseapi.back4app.com/classes/Match";

const authHeaders = {
    'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APPLICATION_ID,
    'X-Parse-Javascript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
}

const index = () => {
    return fetch(baseUrl, { headers: authHeaders })
        .then( response => response.json());
}

const MatchesAPI = {
    index
};

export default MatchesAPI;