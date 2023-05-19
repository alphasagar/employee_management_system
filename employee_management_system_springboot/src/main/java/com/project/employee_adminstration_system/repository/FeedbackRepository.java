package com.project.employee_adminstration_system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.employee_adminstration_system.model.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	
	
	
	@Query(value = "SELECT * FROM feedback WHERE feedback_first_name = ?1", nativeQuery = true)
	public List<Feedback> serchUserByName(String feedback_name);
	
	// Example of Native Query - SQL
	@Query(value = "SELECT * FROM feedback, state WHERE state_id = feedback_state", nativeQuery = true)
	public List<Feedback> serchUserByState(String feedback_state);
	

}
