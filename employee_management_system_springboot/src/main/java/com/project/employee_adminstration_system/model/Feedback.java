package com.project.employee_adminstration_system.model;

//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Table(name = "feedback")
@Entity(name = "feedback")

public class Feedback {

	private long feedback_id;
	private String feedback_name;
	private String feedback_email;
	private String feedback_rating;
	private String feedback_message;
	
	public Feedback() {
		
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getFeedback_id() {
		return feedback_id;
	}

	public Feedback(long feedback_id, String feedback_name, String feedback_email, String feedback_rating,
			String feedback_message) {
		super();
		this.feedback_id = feedback_id;
		this.feedback_name = feedback_name;
		this.feedback_email = feedback_email;
		this.feedback_rating = feedback_rating;
		this.feedback_message = feedback_message;
	}

	@Override
	public String toString() {
		return "Feedback [feedback_id=" + feedback_id + ", feedback_name=" + feedback_name + ", feedback_email="
				+ feedback_email + ", feedback_rating=" + feedback_rating + ", feedback_message=" + feedback_message + "]";
	}

	public void setFeedback_id(long feedback_id) {
		this.feedback_id = feedback_id;
	}

	public String getFeedback_name() {
		return feedback_name;
	}

	public void setFeedback_name(String feedback_name) {
		this.feedback_name = feedback_name;
	}

	public String getFeedback_email() {
		return feedback_email;
	}

	public void setFeedback_email(String feedback_email) {
		this.feedback_email = feedback_email;
	}

	public String getFeedback_rating() {
		return feedback_rating;
	}

	public void setFeedback_rating(String feedback_rating) {
		this.feedback_rating = feedback_rating;
	}

	public String getFeedback_message() {
		return feedback_message;
	}

	public void setFeedback_message(String feedback_message) {
		this.feedback_message = feedback_message;
	}
}
