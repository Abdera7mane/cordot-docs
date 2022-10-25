  
# DiscordSlashCommand
  
**Inherits:** [DiscordApplicationCommandInteraction](./class_discordapplicationcommandinteraction.md) < [DiscordRepliableInteraction](./class_discordrepliableinteraction.md) < [DiscordInteraction](./class_discordinteraction.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
A chat input based commad interaction, supports multiple options.  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                                                                            |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_option](#method-get-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) default=null, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) expect\_type=0 **)** |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_string\_option](#method-get-string-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) default="" **)**                                                                        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [get\_integer\_option](#method-get-integer-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) default=0 **)**                                                                             |
| [float](https://docs.godotengine.org/en/3.5/classes/class_float.html)     | [get\_number\_option](#method-get-number-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) default=0 **)**                                                                           |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [get\_boolean\_option](#method-get-boolean-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) default=false **)**                                                                       |
| [User](./class_user.md)                                                   | [get\_user\_option](#method-get-user-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [User](./class_user.md) default=null **)**                                                                                                                          |
| [Channel](./class_channel.md)                                             | [get\_channel\_option](#method-get-channel-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Channel](./class_channel.md) default=null **)**                                                                                                              |
| [Guild.Role](./class_guild.md#role)                                       | [get\_role\_option](#method-get-role-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Guild.Role](./class_guild.md#role) default=null **)**                                                                                                              |
| [MentionableEntity](./class_mentionableentity.md)                         | [get\_mentionable\_option](#method-get-mentionable-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [MentionableEntity](./class_mentionableentity.md) default=null **)**                                                                                  |
| [MessageAttachment](./class_messageattachment.md)                         | [get\_attachment\_option](#method-get-attachment-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [MessageAttachment](./class_messageattachment.md) default=null **)**                                                                                    |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [get\_options\_count](#method-get-options-count) **(**  **)**                                                                                                                                                                                                                                        |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [has\_option](#method-has-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**                                                                                                                                                                           |  
  
## Constants
  
  
  
## Method Descriptions
  
- <a name="method-get-option"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) default=null, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) expect\_type=0 **)**  
  
	Gets an option by `name`, returns `default` if not found.
	Set `expect_type` to a `DiscordApplicationCommandOption.Option`
	value to restric the return type.
	Variant  
________________

- <a name="method-get-string-option"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_string\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) default="" **)**  
  
	Gets a string option by `name`.  
________________

- <a name="method-get-integer-option"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_integer\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) default=0 **)**  
  
	Gets a integer option by `name`.  
________________

- <a name="method-get-number-option"></a>[float](https://docs.godotengine.org/en/3.5/classes/class_float.html) **get\_number\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) default=0 **)**  
  
	Gets a number option by `name`.  
________________

- <a name="method-get-boolean-option"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **get\_boolean\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) default=false **)**  
  
	Gets a boolean option by `name`.  
________________

- <a name="method-get-user-option"></a>[User](./class_user.md) **get\_user\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [User](./class_user.md) default=null **)**  
  
	Gets a user option by `name`.  
________________

- <a name="method-get-channel-option"></a>[Channel](./class_channel.md) **get\_channel\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Channel](./class_channel.md) default=null **)**  
  
	Gets a channel option by `name`.  
________________

- <a name="method-get-role-option"></a>[Guild.Role](./class_guild.md#role) **get\_role\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Guild.Role](./class_guild.md#role) default=null **)**  
  
	Gets a role option by `name`.  
________________

- <a name="method-get-mentionable-option"></a>[MentionableEntity](./class_mentionableentity.md) **get\_mentionable\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [MentionableEntity](./class_mentionableentity.md) default=null **)**  
  
	Gets a mentionable entity (`User` or `Guild.Role`) option by `name`.  
________________

- <a name="method-get-attachment-option"></a>[MessageAttachment](./class_messageattachment.md) **get\_attachment\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [MessageAttachment](./class_messageattachment.md) default=null **)**  
  
	Gets an attachement option by `name`.  
________________

- <a name="method-get-options-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_options\_count** **(**  **)**  
  
	Gets the number of options inputed by the user.  
________________

- <a name="method-has-option"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**  
  
	Checks if option by `name` exists.  
________________

  
