import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import { SecretsEnum } from './secrets-enum';

const PROJECT_ID = 'project-name-id';

//client given by google to connect to secret manager
const client = new SecretManagerServiceClient();

//This function retrieves the given secret
async function accessSecretVersion(
  secretName: string,
  versionId: string = 'latest',
): Promise<string> {
  //Syntax to retrieve secrets on a given project
  //IMPORTANT: user must have permissions to access that secret
  const name = `projects/${PROJECT_ID}/secrets/${secretName}/versions/${versionId}`;

  try {
    const [version] = await client.accessSecretVersion({ name });

    //Decode payload and return secret
    return version.payload?.data?.toString() || '';
  } catch (error) {
    console.error(`Error accessing secret ${secretName}:`, error);
    throw new Error(`Failed to load secret: ${secretName}`);
  }
}

//This function load the secrets and adds them into the config module
//Note that in app.module.ts it is calling this function on app startup
export const loadGcpSecrets = async () => {
  const secret = await accessSecretVersion(SecretsEnum.TEST_SECRET);
  const secret2 = await accessSecretVersion('new-secret'); //keys could be hard-coded as well

  return {
    SECRET: secret,
    SECRET2: secret2,
  };
};
