package com.project.employee_adminstration_system.model;

import javax.persistence.CascadeType;
//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Table(name = "leaves")
@Entity(name = "leaves")

public class Leave {

	private long leave_id;
	private String leave_employee_id;
	private String leave_reason;
	private String leave_description;
	private String leave_from_date;
	private String leave_to_date;
	private String leave_status;
	private String leave_total_days;
	

	public Leave(long leave_id, String leave_employee_id, String leave_reason, String leave_description,
			String leave_from_date, String leave_to_date, String leave_status, String leave_total_days) {
		super();
		this.leave_id = leave_id;
		this.leave_employee_id = leave_employee_id;
		this.leave_reason = leave_reason;
		this.leave_description = leave_description;
		this.leave_from_date = leave_from_date;
		this.leave_to_date = leave_to_date;
		this.leave_status = leave_status;
		this.leave_total_days = leave_total_days;
	}

	public String getLeave_total_days() {
		return leave_total_days;
	}

	public void setLeave_total_days(String leave_total_days) {
		this.leave_total_days = leave_total_days;
	}

	@Override
	public String toString() {
		return "Leave [leave_id=" + leave_id + ", leave_employee_id=" + leave_employee_id + ", leave_reason="
				+ leave_reason + ", leave_description=" + leave_description + ", leave_from_date=" + leave_from_date
				+ ", leave_to_date=" + leave_to_date + ", leave_status=" + leave_status + ", leave_total_days="
				+ leave_total_days + "]";
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getLeave_id() {
		return leave_id;
	}

	public void setLeave_id(long leave_id) {
		this.leave_id = leave_id;
	}

	public String getLeave_employee_id() {
		return leave_employee_id;
	}

	public void setLeave_employee_id(String leave_employee_id) {
		this.leave_employee_id = leave_employee_id;
	}

	public String getLeave_reason() {
		return leave_reason;
	}

	public void setLeave_reason(String leave_reason) {
		this.leave_reason = leave_reason;
	}

	public String getLeave_description() {
		return leave_description;
	}

	public void setLeave_description(String leave_description) {
		this.leave_description = leave_description;
	}

	public String getLeave_from_date() {
		return leave_from_date;
	}

	public void setLeave_from_date(String leave_from_date) {
		this.leave_from_date = leave_from_date;
	}

	public String getLeave_to_date() {
		return leave_to_date;
	}

	public void setLeave_to_date(String leave_to_date) {
		this.leave_to_date = leave_to_date;
	}

	public String getLeave_status() {
		return leave_status;
	}

	public void setLeave_status(String leave_status) {
		this.leave_status = leave_status;
	}

	public Leave() {
	}
}
