package com.example.cms.wrapper;

import com.example.cms.model.User;
import org.springframework.web.multipart.MultipartFile;

public class UserFileWrapper {

    private User user;
    private MultipartFile multipartFile;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public MultipartFile getMultipartFile() {
        return multipartFile;
    }

    public void setMultipartFile(MultipartFile multipartFile) {
        this.multipartFile = multipartFile;
    }
}
