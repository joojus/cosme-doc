module.exports = {
  apps: [
    {
      name: 'docnextube',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 30001,
        NODE_ENV: 'production',
      },
    },
  ],
};
