  
# DiscordTeam
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                              |
|-------------------------------------------------------------------------|-----------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [icon\_hash](#property-icon-hash) |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [members](#property-members)      |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)            |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [owner\_id](#property-owner-id)   |
| [DiscordTeam.TeamMember](./class_discordteam.md#teammember)             | [owner](#property-owner)          |  
  
## Methods
  
| return type                                                             | signature                                        |
|-------------------------------------------------------------------------|--------------------------------------------------|
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_members](#method-get-members) **(**  **)** |
| [DiscordTeam.TeamMember](./class_discordteam.md#teammember)             | [get\_owner](#method-get-owner) **(**  **)**     |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**     |  
  
## Property Descriptions
  
- <a name="property-icon-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **icon_hash**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-members"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **members**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_members() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-owner-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **owner_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-owner"></a>[DiscordTeam.TeamMember](./class_discordteam.md#teammember) **owner**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_owner() |  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-DiscordTeam"></a>[DiscordTeam](./class_discordteam.md) **DiscordTeam** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-members"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_members** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-owner"></a>[DiscordTeam.TeamMember](./class_discordteam.md#teammember) **get\_owner** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
  
## Sub Classes
  
________________
  
  
# TeamMember
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                              | name                                            |
|-------------------------------------------------------------------|-------------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [membership\_state](#property-membership-state) |
| PoolStringArray                                                   | [permissions](#property-permissions)            |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [team\_id](#property-team-id)                   |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [user\_id](#property-user-id)                   |
| [User](./class_user.md)                                           | [user](#property-user)                          |  
  
## Methods
  
| return type                                                             | signature                                    |
|-------------------------------------------------------------------------|----------------------------------------------|
| [User](./class_user.md)                                                 | [get\_user](#method-get-user) **(**  **)**   |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)** |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **MembershipState**  
  
	- **INVITED** = 1  

	- **ACCEPTED** = 2  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-membership-state"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **membership_state**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-permissions"></a>PoolStringArray **permissions**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-team-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **team_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-user-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **user_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-user"></a>[User](./class_user.md) **user**  
	  
	|          | method      |
	|----------|-------------|
	| *Getter* | get\_user() |  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-TeamMember"></a>[DiscordTeam.TeamMember](./class_discordteam.md#teammember) **TeamMember** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
