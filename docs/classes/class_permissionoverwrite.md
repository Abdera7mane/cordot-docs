  
# PermissionOverwrite
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Holds permissions of a role or member on a channel-level.  
  
## Properties
  
| type                                                              | name                     |
|-------------------------------------------------------------------|--------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [type](#property-type)   |
| [BitFlag](./class_bitflag.md)                                     | [allow](#property-allow) |
| [BitFlag](./class_bitflag.md)                                     | [deny](#property-deny)   |  
  
## Methods
  
| return type                                           | signature                                                                                                                                           |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| [PermissionOverwrite](./class_permissionoverwrite.md) | [PermissionOverwrite](#method-PermissionOverwrite) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Type**  
  
	- **ROLE** = 0  

	- **MEMBER** = 1  

  
	Overwrite target.
  
  
## Property Descriptions
  
- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	Overwrite target type, can be either `Type.ROLE` or `Type.MEMBER`.  
________________

- <a name="property-allow"></a>[BitFlag](./class_bitflag.md) **allow**  
  
	Allowed permissions.  
________________

- <a name="property-deny"></a>[BitFlag](./class_bitflag.md) **deny**  
  
	Denied permissions.
  
  
## Method Descriptions
  
  
