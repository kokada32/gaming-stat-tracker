const baseUrl = "https://parseapi.back4app.com/classes/Match";

const index = () => {
    const matches = fetch(baseUrl);
    return matches;
}

const MatchesAPI = {

};

export default MatchesAPI;