package com.project.employee_adminstration_system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.employee_adminstration_system.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	
	@Query(value = "SELECT * FROM user WHERE user_level_id = ?1", nativeQuery = true)
	public List<User> getUserList(String user_name);
	
	@Query(value = "SELECT * FROM user WHERE user_email = ?1", nativeQuery = true)
	public List<User> getUserExits(String email);
	
	@Query(value = "SELECT * FROM user WHERE user_email = ?1 AND user_password = ?2", nativeQuery = true)
	public User checkLogin(String login_email, String login_password);
	
}
