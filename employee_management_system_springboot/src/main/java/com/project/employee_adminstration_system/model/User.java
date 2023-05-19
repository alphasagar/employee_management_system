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

@Table(name = "user")
@Entity(name = "user")

public class User {

	private long user_id;
	private String user_email;
	private String user_password;
	private String user_first_name;
	private String user_last_name;
	private String user_dob;


	private String user_address;
	private String user_city;
	private String user_state;
	private String user_country;
	private String user_mobile;
	private String user_nationalty;
	private String user_level_id;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getUser_id() {
		return user_id;
	}

	public User() {
		
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

	public String getUser_first_name() {
		return user_first_name;
	}

	public void setUser_first_name(String user_first_name) {
		this.user_first_name = user_first_name;
	}

	public String getUser_last_name() {
		return user_last_name;
	}

	public void setUser_last_name(String user_last_name) {
		this.user_last_name = user_last_name;
	}

	public String getUser_dob() {
		return user_dob;
	}

	public void setUser_dob(String user_dob) {
		this.user_dob = user_dob;
	}

	public String getUser_address() {
		return user_address;
	}

	public void setUser_address(String user_address) {
		this.user_address = user_address;
	}

	public String getUser_city() {
		return user_city;
	}

	public void setUser_city(String user_city) {
		this.user_city = user_city;
	}

	public String getUser_state() {
		return user_state;
	}

	public void setUser_state(String user_state) {
		this.user_state = user_state;
	}

	public String getUser_country() {
		return user_country;
	}

	public void setUser_country(String user_country) {
		this.user_country = user_country;
	}

	public String getUser_mobile() {
		return user_mobile;
	}

	public void setUser_mobile(String user_mobile) {
		this.user_mobile = user_mobile;
	}

	public String getUser_nationalty() {
		return user_nationalty;
	}

	public void setUser_nationalty(String user_nationalty) {
		this.user_nationalty = user_nationalty;
	}

	public String getUser_level_id() {
		return user_level_id;
	}

	public void setUser_level_id(String user_level_id) {
		this.user_level_id = user_level_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", user_email=" + user_email + ", user_password=" + user_password
				+ ", user_first_name=" + user_first_name + ", user_last_name=" + user_last_name + ", user_dob="
				+ user_dob + ", user_address=" + user_address + ", user_city=" + user_city + ", user_state="
				+ user_state + ", user_country=" + user_country + ", user_mobile=" + user_mobile + ", user_nationalty="
				+ user_nationalty + ", user_level_id=" + user_level_id + "]";
	}

	public User(long user_id, String user_email, String user_password, String user_first_name, String user_last_name,
			String user_dob, String user_address, String user_city, String user_state, String user_country,
			String user_mobile, String user_nationalty, String user_level_id) {
		super();
		this.user_id = user_id;
		this.user_email = user_email;
		this.user_password = user_password;
		this.user_first_name = user_first_name;
		this.user_last_name = user_last_name;
		this.user_dob = user_dob;
		this.user_address = user_address;
		this.user_city = user_city;
		this.user_state = user_state;
		this.user_country = user_country;
		this.user_mobile = user_mobile;
		this.user_nationalty = user_nationalty;
		this.user_level_id = user_level_id;
	}

}
