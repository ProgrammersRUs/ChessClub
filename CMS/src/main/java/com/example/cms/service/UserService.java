package com.example.cms.service;

import com.example.cms.model.User;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientException;

@Service
public class UserService implements IUserService {

    private WebClient userClient;
    private String userValidationEndpoint;

    public UserService() {
        userValidationEndpoint = System.getenv("USER_SERVICE");
        userClient = WebClient
                .builder()
                .baseUrl("")
                .build();
    }


    public boolean validateUser(User user) {
        try{

        User validatedUser = userClient.get()
                .uri(userValidationEndpoint + user.getId())
                .retrieve()
                .bodyToMono(User.class)
                .block();

            System.out.println(validatedUser.compareTo(user));

        if(validatedUser.compareTo(user) == 0){
            return true;
        }
        }catch (WebClientException e){
            System.out.println(e);
            return false;
        }
        return false;
    }


    public boolean validateAdmin(User user){
        if(validateUser(user)){
            return user.isAdminStatus();
        }
        return false;
    }

}
