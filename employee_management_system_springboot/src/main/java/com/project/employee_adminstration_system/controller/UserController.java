package com.project.employee_adminstration_system.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.employee_adminstration_system.exception.ResourceNotFoundException;
import com.project.employee_adminstration_system.model.Employee;
import com.project.employee_adminstration_system.model.Login;
import com.project.employee_adminstration_system.model.User;
import com.project.employee_adminstration_system.repository.UserRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@PersistenceContext
    private EntityManager entityManager;

	@GetMapping("/user")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@GetMapping("/user/list/{name}")
	public List<User> getUserByName(@PathVariable(value = "name") String userName) {
			return userRepository.getUserList(userName);
	}
	
	@GetMapping("/user/check-user-exits/{email}")
	public List<User> checkUserByName(@PathVariable(value = "email") String email) {
			return userRepository.getUserExits(email);
	}

	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId)
			throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
		return ResponseEntity.ok().body(user);
	}

	@PostMapping("/user")
	public User createUser(@Valid @RequestBody User user) {
		return userRepository.save(user);
	}

	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId,
			@Valid @RequestBody User userDetails) throws ResourceNotFoundException {
		final User updatedUser = userRepository.save(userDetails);
		return ResponseEntity.ok(updatedUser);
	}

	@DeleteMapping("/user/{id}")
	public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId)
			throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
		
		userRepository.delete(user);
		
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	@PostMapping("/user-login")
	public User checkLogin(@Valid @RequestBody Login login) {
		User loginObj = userRepository.checkLogin(login.getLogin_email(), login.getLogin_password());
		System.out.print(loginObj);
		return loginObj;//this.getLoginData(loginObj.getLogin_id());
	}
}
