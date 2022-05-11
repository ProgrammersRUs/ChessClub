package com.example.backend.Controller;

import com.example.backend.Entity.User;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;


@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

  @Autowired
  UserService userService;

    @GetMapping("/login/{email}+{password}")
    public User login(@PathVariable String email, @PathVariable String password) {
      if(email !=null){
        User verifiedUser = userService.validateLogin(email,password);
        System.out.println(verifiedUser + " user test her");
        if(verifiedUser != null) {
          System.out.println("Johnny has logged in 8D");
          return verifiedUser;
        } else {
          System.out.println("error, Invalid Account");
          return null; //exception?
        }
      }
      return null;
    }

    @GetMapping("/get1user")
  public User get1User(){
      return userService.findUser(1);
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
