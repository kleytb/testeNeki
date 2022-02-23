package tech.jaya.project.dto;

import java.util.Objects;

import javax.validation.constraints.NotBlank;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel
public class UserResgisterDTO {
	
	@ApiModelProperty(value = "The Login", name = "login", required = true, position = 0)
	@NotBlank
	private String login;
		
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	@ApiModelProperty(value = "The user Password", name = "password", required = true,example = "123456", position = 3)
	@NotBlank
	private String password;
		
	

	public UserResgisterDTO() {
		super();
	}

	public UserResgisterDTO( String login, String password) {
		super();
		this.login = login;
		this.password = password;
		
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	@Override
	public int hashCode() {
		return Objects.hash(login, password);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserResgisterDTO other = (UserResgisterDTO) obj;
		return  Objects.equals(login, other.login)
				 && Objects.equals(password, other.password);
	}

	@Override
	public String toString() {
		return "UserCadastroDTO: "
				+ "\nLogin: " + login;
				
	}
}