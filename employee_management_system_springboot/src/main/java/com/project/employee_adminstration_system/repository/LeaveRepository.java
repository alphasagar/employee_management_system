package com.project.employee_adminstration_system.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import  com.project.employee_adminstration_system.model.Leave;

@Repository
public interface LeaveRepository extends JpaRepository<Leave, Long> {
	
	@Query(value = "SELECT sum(leave_total_days) as total_leaves FROM leaves WHERE leave_employee_id = ?1", nativeQuery = true)
	public Integer getLeavesCount(String employee_id);

}
