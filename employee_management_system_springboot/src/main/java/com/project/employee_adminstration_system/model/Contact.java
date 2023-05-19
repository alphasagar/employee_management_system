package com.project.employee_adminstration_system.model;

//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Table(name = "contact")
@Entity(name = "contact")

public class Contact {

	private long contact_id;
	private String contact_name;
	private String contact_email;
	private String contact_subject;
	private String contact_message;
	
	public Contact() {
		
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getContact_id() {
		return contact_id;
	}

	public Contact(long contact_id, String contact_name, String contact_email, String contact_subject,
			String contact_message) {
		super();
		this.contact_id = contact_id;
		this.contact_name = contact_name;
		this.contact_email = contact_email;
		this.contact_subject = contact_subject;
		this.contact_message = contact_message;
	}

	@Override
	public String toString() {
		return "Contact [contact_id=" + contact_id + ", contact_name=" + contact_name + ", contact_email="
				+ contact_email + ", contact_subject=" + contact_subject + ", contact_message=" + contact_message + "]";
	}

	public void setContact_id(long contact_id) {
		this.contact_id = contact_id;
	}

	public String getContact_name() {
		return contact_name;
	}

	public void setContact_name(String contact_name) {
		this.contact_name = contact_name;
	}

	public String getContact_email() {
		return contact_email;
	}

	public void setContact_email(String contact_email) {
		this.contact_email = contact_email;
	}

	public String getContact_subject() {
		return contact_subject;
	}

	public void setContact_subject(String contact_subject) {
		this.contact_subject = contact_subject;
	}

	public String getContact_message() {
		return contact_message;
	}

	public void setContact_message(String contact_message) {
		this.contact_message = contact_message;
	}
}
