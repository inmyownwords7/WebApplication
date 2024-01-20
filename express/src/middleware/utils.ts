import {constants} from './constants';

const Options = {
    hostname: constants.hostname,
    headers: {
        'User-Agent': constants.user_agent
    },
    OAuth: process.env.GITHUB_ACCESS_TOKEN
};

const generateOptions = (_path) => {
    return {
        ...Options,
        path: _path
    };
};

// export { generateOptions };

// const generateOptions = (_path) => {
//     const options = {
//         hostname: constants.hostname,
//         path: _path,
//         headers: {
//             'User-Agent': constants.user_agent
//         },
//         OAuth: process.env.GITHUB_ACCESS_TOKEN
//     };

//     return options;
// };

export { generateOptions };
