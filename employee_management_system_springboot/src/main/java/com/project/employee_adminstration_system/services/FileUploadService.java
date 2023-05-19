package com.project.employee_adminstration_system.services;

import org.apache.commons.io.IOUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;


@Service
public class FileUploadService {

    public final String storageDirectoryPath = "static/uploads";
    public ResponseEntity uploadToLocalFileSystem(MultipartFile file, String uploadFileName) {
        /* we will extract the file name (with extension) from the given file to store it in our local machine for now
        and later in virtual machine when we'll deploy the project
         */
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        /* The Path in which we will store our image . we could change it later
        based on the OS of the virtual machine in which we will deploy the project.
        In my case i'm using windows 10 .
         */
        Path storageDirectory = Paths.get(storageDirectoryPath);
        /*
        * we'll do just a simple verification to check if the folder in which we will store our images exists or not
        * */
        if(!Files.exists(storageDirectory)){ // if the folder does not exist
            try {
                Files.createDirectories(storageDirectory); // we create the directory in the given storage directory path
            }catch (Exception e){
                e.printStackTrace();// print the exception
            }
        }

        Path destination = Paths.get(storageDirectory.toString() + "/" + uploadFileName);

        try {
            Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);// we are Copying all bytes from an input stream to a file

        } catch (IOException e) {
            e.printStackTrace();
        }
        // the response will be the download URL of the image
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("api/images/getImage/")
                .path(uploadFileName)
                .toUriString();
        // return the download image url as a response entity
        return ResponseEntity.ok(fileDownloadUri);
    }

    public  byte[] getImageWithMediaType(String imageName) throws IOException {
        Path destination = Paths.get(storageDirectoryPath+"/"+imageName);// retrieve the image by its name
        System.out.print(destination.getFileName());
        
        return IOUtils.toByteArray(destination.toUri());
    }
    
    public  Path getFileLocation(String fileName) throws IOException {
        return Paths.get(storageDirectoryPath+"/"+fileName);// retrieve the image by its name
    }
    
    public String getFileURL(String uploadFileName) {
    	return ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("api/images/getImage/")
                .path(uploadFileName)
                .toUriString();
    }

}
