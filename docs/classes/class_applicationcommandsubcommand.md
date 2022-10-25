  
# ApplicationCommandSubCommand
  
**Inherits:** [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build sub-command options for a slash command.  
  
## Properties
  
| type                                                                  | name                         |
|-----------------------------------------------------------------------|------------------------------|
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [options](#property-options) |  
  
## Methods
  
| return type                                                                   | signature                                                                                                                                           |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md)       | [add\_option](#method-add-option) **(** [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) option **)**                  |
| [ApplicationCommandStringOption](./class_applicationcommandstringoption.md)   | [add\_string\_option](#method-add-string-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**   |
| [ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) | [add\_integer\_option](#method-add-integer-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)** |
| [ApplicationCommandBoolOption](./class_applicationcommandbooloption.md)       | [add\_boolean\_option](#method-add-boolean-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)** |
| [ApplicationCommandUserOption](./class_applicationcommanduseroption.md)       | [add\_user\_option](#method-add-user-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**       |
| [ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md) | [add\_channel\_option](#method-add-channel-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)** |
| [ApplicationCommandRoleOption](./class_applicationcommandroleoption.md)       | [add\_role\_option](#method-add-role-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**       |  
  
## Property Descriptions
  
- <a name="property-options"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **options**  
  
	List of `ApplicationCommandOptionBuilder`s.
  
  
## Method Descriptions
  
- <a name="method-ApplicationCommandSubCommand"></a>[ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md) **ApplicationCommandSubCommand** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Constructs a new sub-command option builder.  
________________

- <a name="method-add-option"></a>[ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md) **add\_option** **(** [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) option **)**  
  
	Adds a command option, can not be a a sub-command group or an other subcomand.  
________________

- <a name="method-add-string-option"></a>[ApplicationCommandStringOption](./class_applicationcommandstringoption.md) **add\_string\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds a string option.  
________________

- <a name="method-add-integer-option"></a>[ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) **add\_integer\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds an integer option.  
________________

- <a name="method-add-boolean-option"></a>[ApplicationCommandBoolOption](./class_applicationcommandbooloption.md) **add\_boolean\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds an boolean option.  
________________

- <a name="method-add-user-option"></a>[ApplicationCommandUserOption](./class_applicationcommanduseroption.md) **add\_user\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds a user option.  
________________

- <a name="method-add-channel-option"></a>[ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md) **add\_channel\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds a channel option.  
________________

- <a name="method-add-role-option"></a>[ApplicationCommandRoleOption](./class_applicationcommandroleoption.md) **add\_role\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds a channel option.  
________________

  
