# Test project to connect to GCP Secrets Manager

This project connects to a project in GCP to retrieve secrets and then use them in any part of the project

## How to run it

### 1. Setup project in GCP
This includes:

1. Create project
2. Enable the secrets manager for the project
3. Creating the secrets inside the secret manager

Note: it is important to have the required permissions to do this

### 2. Login to google account

Execute:
```bash
gcloud auth application-default login
```

This will open a browser to login to google account, after that, a file will be saved in the local machine which will 
be used for Google cloud library to authenticate the project and connect to GCP project. For this,
gcloud CLI is required, for installation go to: https://cloud.google.com/sdk/docs/install

NOTE: authenticated user must have the right permissions to read the secrets to access them

### 3. Configure project

Modify the values of the secrets as required in the file secrets-loader.ts as required to match the secrets

#### 4. Run application

Execute:
```bash
npm run start:dev
```

And go to http://localhost:3000/, secrets will be displayed

