package com.project.employee_adminstration_system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.employee_adminstration_system.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
	
	
	
	@Query(value = "SELECT * FROM contact WHERE contact_first_name = ?1", nativeQuery = true)
	public List<Contact> serchUserByName(String contact_name);
	
	// Example of Native Query - SQL
	@Query(value = "SELECT * FROM contact, state WHERE state_id = contact_state", nativeQuery = true)
	public List<Contact> serchUserByState(String contact_state);
	

}
