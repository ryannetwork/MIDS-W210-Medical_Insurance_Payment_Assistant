import Amplify from "aws-amplify";

const awsAPIconfig = Amplify.configure({
  API: {
    endpoints: [
      {
        name: "MBVAModelAPI",
        endpoint: "http://34.220.245.175:5000",
      },
      {
        name: "MBVAModelAPIProxy",
        endpoint: "https://leob8b1g7b.execute-api.ap-south-1.amazonaws.com/prod",
      },
    ],
  },
});

export default awsAPIconfig;
