package com.example.backend.Controller;

import com.example.backend.Entity.User;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpSession;

@Controller
@CrossOrigin

public class LoginController {

  @Autowired
  UserService userService;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public User login(
        @RequestParam("email") String email,
        @RequestParam("password") String password,
        HttpSession session,
        ModelMap modelMap) {
      if(email.equalsIgnoreCase("email")) {
        session.setAttribute("email", email);
        System.out.println("Johnny has logged in 8D");
        return userService.validateLogin(email, password);
      } else {
        modelMap.put("error", "Invalid Account");
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
