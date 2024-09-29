import { Amplify } from 'aws-amplify';
const awsConfig = {
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-2:758cfaf9-cb55-49d9-9a88-e9e965f3480a', // e.g. us-east-2:12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_W4jFGPN1K', // e.g. us-east-2_xxxxxx
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '41dkf3t774e4qr7k45lvmtdvnq', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
    }
};

export default awsConfig;

// const awsconfig = {
//     Auth: {
//         region: 'us-east-2',
//         userPoolId: 'us-east-2_W4jFGPN1K',
//         userPoolWebClientId: '41dkf3t774e4qr7k45lvmtdvnq',
//         identityPoolId: 'us-east-2:758cfaf9-cb55-49d9-9a88-e9e965f3480a',
//     },
// };

// export default awsconfig;