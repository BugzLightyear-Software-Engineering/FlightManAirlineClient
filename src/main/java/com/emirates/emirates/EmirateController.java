package com.emirates.emirates;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class EmirateController {

    @GetMapping("")
    public String first_api() {
        return "welcome to the api baby";
    }

}
