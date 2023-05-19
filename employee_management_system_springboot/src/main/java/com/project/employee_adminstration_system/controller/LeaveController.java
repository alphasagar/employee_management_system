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
import com.project.employee_adminstration_system.model.User;
import com.project.employee_adminstration_system.model.Leave;
import com.project.employee_adminstration_system.repository.LeaveRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class LeaveController {
	@Autowired
	private LeaveRepository leaveRepository;
	
	@PersistenceContext
    private EntityManager entityManager;

	@GetMapping("/leaves")
	public List<Leave> getAllLeaves() {
		return leaveRepository.findAll();
	}
	
	@GetMapping("/leaves/all-leaves/{id}")
	public ArrayList getAllLeaveFields(@PathVariable(value = "id") String user_id) {
			
		 String SQL = "SELECT emp, lv from leaves lv, user emp WHERE user_id = leave_employee_id";
		 Query q = entityManager.createQuery(SQL);
		 if(!user_id.equals("0")) {
			 System.out.print("User Id : "+user_id);

			 SQL = "SELECT emp, lv from leaves lv, user emp WHERE user_id = leave_employee_id AND user_id = :user_id";
			 q = entityManager.createQuery(SQL);
			 q.setParameter("user_id", user_id);
		 } 
		 List<Object[]> leave = q.getResultList();
		 ArrayList<HashMap<String, String>> resultArray = new ArrayList();
		 
		 for ( Object[] row : leave ) {
			  Leave leave_details = (Leave)row[ 1 ];
			  User user_details = (User)row[ 0 ];
			  
			    HashMap<String, String> results = new HashMap();
			    results.put("leave_id",String.valueOf(leave_details.getLeave_id()));
				results.put("leave_reason",leave_details.getLeave_reason());
				results.put("leave_description",leave_details.getLeave_description());
				results.put("leave_from_date",leave_details.getLeave_from_date());
				results.put("leave_to_date",leave_details.getLeave_to_date());
				results.put("leave_status",leave_details.getLeave_status());
				results.put("leave_total_days",leave_details.getLeave_total_days());
				
			    results.put("user_id",String.valueOf(user_details.getUser_id()));
				results.put("user_first_name",user_details.getUser_first_name());
				results.put("user_last_name",user_details.getUser_last_name());
			    resultArray.add(results);
			 
		 }	 

        return resultArray;
	}
	
	@GetMapping("/leaves/{id}")
	public ResponseEntity<Leave> getUserById(@PathVariable(value = "id") Long leaveId)
			throws ResourceNotFoundException {
		Leave leave = leaveRepository.findById(leaveId)
				.orElseThrow(() -> new ResourceNotFoundException("Leave not found for this id :: " + leaveId));
		return ResponseEntity.ok().body(leave);
	}

	@PostMapping("/leaves")
	public Leave createLeave(@Valid @RequestBody Leave leave) {
		return leaveRepository.save(leave);
	}
	
	@GetMapping("/leaves/get-leaves-count/{user_id}")
	public int checkUserNameExits(@PathVariable(value = "user_id") String user_id) {
		Integer data = leaveRepository.getLeavesCount(user_id);
		System.out.print(data);
		return data;
		
	}

	@PutMapping("/leaves/{id}")
	public ResponseEntity<Leave> updateLeave(@PathVariable(value = "id") Long leaveId,
			@Valid @RequestBody Leave leaveDetails) throws ResourceNotFoundException {
		final Leave updatedLeave = leaveRepository.save(leaveDetails);
		return ResponseEntity.ok(updatedLeave);
	}

	@DeleteMapping("/leaves/{id}")
	public Map<String, Boolean> deleteLeave(@PathVariable(value = "id") Long leaveId)
			throws ResourceNotFoundException {
		Leave leave = leaveRepository.findById(leaveId)
				.orElseThrow(() -> new ResourceNotFoundException("Leave not found for this id :: " + leaveId));

		leaveRepository.delete(leave);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
