package com.example.cms.controller;

import com.example.cms.entity.AboutPage;
import com.example.cms.model.User;
import com.example.cms.service.ImageBlobService;
import com.example.cms.service.UserService;
import com.example.cms.wrapper.UserFileWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("blob")
public class BlobController {


    @Autowired
    private UserService userService;
    private final ImageBlobService imageBlobService;

    @Autowired
    public BlobController(ImageBlobService imageBlobService){
        this.imageBlobService = imageBlobService;
    }

    @PostMapping("/upload")
    @ResponseBody
    public ResponseEntity<String> writeBlobFile(@RequestPart("file") MultipartFile file, @RequestPart("user") User user) throws IOException {
        if(user != null){
            if(!userService.validateUser(user)){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            String response = imageBlobService.uploadFile(file);
            return new ResponseEntity<>(response, HttpStatus.OK);

        }return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
