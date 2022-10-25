  
# DiscordApplicationCommandData
  
**Inherits:** [DiscordInteractionData](./class_discordinteractiondata.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents an application command event data.  
  
## Properties
  
| type                                                                                      | name                                |
|-------------------------------------------------------------------------------------------|-------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                         | [command\_id](#property-command-id) |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                   | [name](#property-name)              |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                         | [type](#property-type)              |
| [DiscordApplicationCommandResolvedData](./class_discordapplicationcommandresolveddata.md) | [resolved](#property-resolved)      |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)                     | [options](#property-options)        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                         | [target\_id](#property-target-id)   |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                         | [guild\_id](#property-guild-id)     |  
  
## Property Descriptions
  
- <a name="property-command-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **command_id**  
  
	Id of the executed command.  
________________

- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Name of the executed command.  
________________

- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	Type of application command.  
________________

- <a name="property-resolved"></a>[DiscordApplicationCommandResolvedData](./class_discordapplicationcommandresolveddata.md) **resolved**  
  
	Resolved entities data.  
________________

- <a name="property-options"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **options**  
  
	List of `DiscordApplicationCommandData.DataOption`s
	of user input.  
________________

- <a name="property-target-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **target_id**  
  
	Id of the user or message targeted by a user
	or message command.  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	Id of the guild the command is registered to.
  
  
## Sub Classes
  
________________
  
  
# DataOption
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents the options sent along with
an application command data.  
  
## Properties
  
| type                                                                      | name                         |
|---------------------------------------------------------------------------|------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [name](#property-name)       |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [type](#property-type)       |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [value](#property-value)     |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [options](#property-options) |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [focused](#property-focused) |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Represents the options sent along with
	an application command data.
	Option's name.  
________________

- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	Option's type.  
________________

- <a name="property-value"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **value**  
  
	Option's value.  
________________

- <a name="property-options"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **options**  
  
	If this option is group or a subcommand it contains a list of
	`DiscordApplicationCommandData.DataOption`s.  
________________

- <a name="property-focused"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **focused**  
  
	In an autocomplete interaction, this is `true` if user input is currently
	focused on this option.
  
