package com.example.cms.service;

import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobContainerClientBuilder;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.specialized.BlockBlobClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.WritableResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.OutputStream;

@Service
public class ImageBlobService {

    private final BlobServiceClient blobServiceClient;

    @Autowired
    public ImageBlobService(BlobServiceClient blobServiceClient) {
        this.blobServiceClient = blobServiceClient;
    }

    public String uploadFile(MultipartFile multipartFile) throws IOException {
        BlobContainerClient blobContainerClient = blobServiceClient.getBlobContainerClient("img");
        String fileName = multipartFile.getOriginalFilename();
        BlockBlobClient blockBlobClient = blobContainerClient.getBlobClient(fileName).getBlockBlobClient();

        if (blockBlobClient.exists()) {
            blockBlobClient.delete();
        }
        blockBlobClient.upload(new BufferedInputStream(multipartFile.getInputStream()), multipartFile.getSize(), true);
        return blockBlobClient.getBlobUrl();
    }
}
