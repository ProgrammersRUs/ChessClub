package com.example.cms.service;

import com.example.cms.model.User;

public interface IUserService {

    boolean validateUser(User user);

    boolean validateAdmin(User user);

}
