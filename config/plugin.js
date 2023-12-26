module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('DO_SPACES_ACCESS_KEY'),
        secretAccessKey: env('DO_SPACES_SECRET_KEY'),
        endpoint: env('DO_SPACES_ENDPOINT'), // Par exemple, "nyc3.digitaloceanspaces.com"
        params: {
          Bucket: env('DO_SPACES_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
