package com.example.backend.Controller;

import com.example.backend.Entity.User;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;


@Controller
@CrossOrigin

public class LoginController {

  @Autowired
  UserService userService;

    @GetMapping("/login")
    public String login(@RequestParam("email") String email, @RequestParam("password") String password, WebRequest webRequest) {
      System.out.println("vi er i login");
      String userEmail = webRequest.getParameter(email);
      String userPassword = webRequest.getParameter(password);
      User user = userService.validateLogin(userEmail, userPassword);
      System.out.println(user + " user test her");
      if(user != null) {
        System.out.println("Johnny has logged in 8D");
        return "index";
      } else {
        System.out.println("error, Invalid Account");
        return null; //exception?
      }
    }

    /*
    @RequestMapping(value = "logout", method = RequestMethod.GET)
    public String logout(HttpSession session) {
      session.removeAttribute("username");
      return "redirect:../account";
    }

  }

     */


  /*


  @Autowired
  UserService userService;

    @PostMapping("/login")
    //@ResponseStatus(HttpStatus.OK)
    public String login(WebRequest webRequest) {

      String email = webRequest.getParameter("email");
      String password = webRequest.getParameter("password");

      User user = userService.readUser(email, password);

      return userService.saveUser(user);
    }

    @GetMapping("/{id}")
    public User findUserById(int id){
      return userService.findUser(id);
    }

   */

}
