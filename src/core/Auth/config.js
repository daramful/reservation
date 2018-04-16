export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: "notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5by75p4gn3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_jxHd0fPz7",
    APP_CLIENT_ID: "7mogib869i57n9d0k0sa1ekd1q",
    IDENTITY_POOL_ID: "us-east-2:744757680365"
  }
};