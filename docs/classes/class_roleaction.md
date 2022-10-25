  
# RoleAction
  
**Inherits:** [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [RoleCreateAction](./class_rolecreateaction.md), [RoleEditAction](./class_roleeditaction.md)  
  
## Methods
  
| return type                         | signature                                                                                                                                    |
|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.Role](./class_guild.md#role) | [submit](#method-submit) **(**  **)** <u>_coroutine_</u>                                                                                     |
| [RoleAction](./class_roleaction.md) | [set\_name](#method-set-name) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**                       |
| [RoleAction](./class_roleaction.md) | [set\_permissions](#method-set-permissions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) flags **)**              |
| [RoleAction](./class_roleaction.md) | [set\_color](#method-set-color) **(** [Color](https://docs.godotengine.org/en/3.5/classes/class_color.html) color **)**                      |
| [RoleAction](./class_roleaction.md) | [set\_hoist](#method-set-hoist) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                        |
| [RoleAction](./class_roleaction.md) | [set\_icon](#method-set-icon) **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**                        |
| [RoleAction](./class_roleaction.md) | [set\_unicode\_emoji](#method-set-unicode-emoji) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) unicode **)** |
| [RoleAction](./class_roleaction.md) | [mentionable](#method-mentionable) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                     |
| [RoleAction](./class_roleaction.md) | [reason](#method-reason) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) why **)**                             |  
  
## Method Descriptions
  
- <a name="method-submit"></a>[Guild.Role](./class_guild.md#role) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Executes the action.  
________________

- <a name="method-set-name"></a>[RoleAction](./class_roleaction.md) **set\_name** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**  
  
	Sets the role name.  
________________

- <a name="method-set-permissions"></a>[RoleAction](./class_roleaction.md) **set\_permissions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) flags **)**  
  
	Sets the role's permission flags.  
________________

- <a name="method-set-color"></a>[RoleAction](./class_roleaction.md) **set\_color** **(** [Color](https://docs.godotengine.org/en/3.5/classes/class_color.html) color **)**  
  
	Sets the role color.  
________________

- <a name="method-set-hoist"></a>[RoleAction](./class_roleaction.md) **set\_hoist** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Whether to display the role seperately in the sidebar.  
________________

- <a name="method-set-icon"></a>[RoleAction](./class_roleaction.md) **set\_icon** **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**  
  
	Sets the role's icon image.
	Requires the guild to have `ROLE_ICONS` feature.  
________________

- <a name="method-set-unicode-emoji"></a>[RoleAction](./class_roleaction.md) **set\_unicode\_emoji** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) unicode **)**  
  
	Sets hte role's unicode emoji.
	Requires the guild to have `ROLE_ICONS` feature.  
________________

- <a name="method-mentionable"></a>[RoleAction](./class_roleaction.md) **mentionable** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Whether to allow the role to be mentioned.  
________________

- <a name="method-reason"></a>[RoleAction](./class_roleaction.md) **reason** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) why **)**  
  
	Sets the reason for executing this action.  
________________

  
