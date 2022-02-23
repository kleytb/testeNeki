package tech.jaya.project.dto;

import tech.jaya.project.domain.User;
import tech.jaya.project.security.JWTAuthFilter;

public class UserAuthenticatedDTO {
	
	private Long id;
	
	
	
	private String login;
	
	
	
	private String token;
	
	public UserAuthenticatedDTO() {
	}

	public UserAuthenticatedDTO(Long id,  String login,  String token) {
		this.id = id;
		
		this.login = login;
		
		this.token = token;
	}
	
	public static UserAuthenticatedDTO toDTO(User user, JWTAuthFilter token) {
		return new UserAuthenticatedDTO(user.getId(), user.getLogin(), token.getToken());
		
	}
	
	public UserAuthenticatedDTO(User user) {
		this.id = user.getId();
		
		this.login = user.getLogin();
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	
	
	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}
	

	

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}