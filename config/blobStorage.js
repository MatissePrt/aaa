import { BlobServiceClient } from '@azure/storage-blob';

dotenv.config();

const AZURE_STORAGE_CONNECTION = 
    "DefaultEndpointsProtocol=https;AccountName=linkupdb;AccountKey=RrU7xPpMeyUfm0Fq7cCp0q8QfOJJGIUKSWxRBLVYI6O1qXGHmpBiPPrzxZiVOUlM/0ichcTKoQMu+ASty8jb/A==;EndpointSuffix=core.windows.net";

if (!AZURE_STORAGE_CONNECTION) {
    throw new Error('Azure Storage Connection string not found');
}

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION);

export { blobServiceClient };
