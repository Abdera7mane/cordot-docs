  
# ApplicationCommandBuilder
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to construct application commands data.  
  
## Properties
  
| type                                                                    | name                                 |
|-------------------------------------------------------------------------|--------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)               |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [description](#property-description) |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [options](#property-options)         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [type](#property-type)               |  
  
## Methods
  
| return type                                                                           | signature                                                                                                                                                           |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationCommandBuilder](./class_applicationcommandbuilder.md)                     | [add\_option](#method-add-option) **(** [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) option **)**                                  |
| [ApplicationCommandSubCommandGroup](./class_applicationcommandsubcommandgroup.md)     | [add\_subcommand\_group](#method-add-subcommand-group) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) group\_name **)**              |
| [ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md)               | [add\_subcommand](#method-add-subcommand) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) subcommand **)**                            |
| [ApplicationCommandStringOption](./class_applicationcommandstringoption.md)           | [add\_string\_option](#method-add-string-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**                   |
| [ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md)         | [add\_integer\_option](#method-add-integer-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**                 |
| [ApplicationCommandBoolOption](./class_applicationcommandbooloption.md)               | [add\_boolean\_option](#method-add-boolean-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**                 |
| [ApplicationCommandUserOption](./class_applicationcommanduseroption.md)               | [add\_user\_option](#method-add-user-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**                       |
| [ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md)         | [add\_channel\_option](#method-add-channel-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**                 |
| [ApplicationCommandRoleOption](./class_applicationcommandroleoption.md)               | [add\_role\_option](#method-add-role-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**                       |
| [ApplicationCommandMentionableOption](./class_applicationcommandmentionableoption.md) | [add\_mentionable\_option](#method-add-mentionable-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**         |
| [ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md)           | [add\_number\_option](#method-add-number-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**                   |
| [ApplicationCommandAttachmentOption](./class_applicationcommandattachmentoption.md)   | [add\_attachment\_option](#method-add-attachment-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**           |
| [ApplicationCommandBuilder](./class_applicationcommandbuilder.md)                     | [with\_description](#method-with-description) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) command\_description **)**              |
| [ApplicationCommandBuilder](./class_applicationcommandbuilder.md)                     | [of\_type](#method-of-type) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_type **)**                                             |
| [ApplicationCommandBuilder](./class_applicationcommandbuilder.md)                     | [as\_chat\_input](#method-as-chat-input) **(**  **)**                                                                                                               |
| [ApplicationCommandBuilder](./class_applicationcommandbuilder.md)                     | [as\_user\_command](#method-as-user-command) **(**  **)**                                                                                                           |
| [ApplicationCommandBuilder](./class_applicationcommandbuilder.md)                     | [as\_message\_command](#method-as-message-command) **(**  **)**                                                                                                     |
| [ApplicationCommandSubCommandGroup](./class_applicationcommandsubcommandgroup.md)     | [subcommand\_group\_builder](#method-subcommand-group-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) group\_name **)**      |
| [ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md)               | [subcommand\_builder](#method-subcommand-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) subcommand **)**                    |
| [ApplicationCommandStringOption](./class_applicationcommandstringoption.md)           | [string\_option\_builder](#method-string-option-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**           |
| [ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md)         | [integer\_option\_builder](#method-integer-option-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**         |
| [ApplicationCommandBoolOption](./class_applicationcommandbooloption.md)               | [boolean\_option\_builder](#method-boolean-option-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**         |
| [ApplicationCommandUserOption](./class_applicationcommanduseroption.md)               | [user\_option\_builder](#method-user-option-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**               |
| [ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md)         | [channel\_option\_builder](#method-channel-option-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**         |
| [ApplicationCommandRoleOption](./class_applicationcommandroleoption.md)               | [role\_option\_builder](#method-role-option-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**               |
| [ApplicationCommandMentionableOption](./class_applicationcommandmentionableoption.md) | [mentionable\_option\_builder](#method-mentionable-option-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)** |
| [ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md)           | [number\_option\_builder](#method-number-option-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**           |
| [ApplicationCommandAttachmentOption](./class_applicationcommandattachmentoption.md)   | [attachment\_option\_builder](#method-attachment-option-builder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**   |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html)       | [build](#method-build) **(**  **)**                                                                                                                                 |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Name application command.  
________________

- <a name="property-description"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **description**  
  
	Description of application command.  
________________

- <a name="property-options"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **options**  
  
	If building a slash command (chat input command),
	this contains command options.  
________________

- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	Type of application command.
  
  
## Method Descriptions
  
- <a name="method-ApplicationCommandBuilder"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **ApplicationCommandBuilder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) command\_name **)**  
  
	Constructs a builder for `command_name`.  
________________

- <a name="method-add-option"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **add\_option** **(** [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) option **)**  
  
	Adds an option to a slash command.  
________________

- <a name="method-add-subcommand-group"></a>[ApplicationCommandSubCommandGroup](./class_applicationcommandsubcommandgroup.md) **add\_subcommand\_group** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) group\_name **)**  
  
	Adds a sub-command group.  
________________

- <a name="method-add-subcommand"></a>[ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md) **add\_subcommand** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) subcommand **)**  
  
	Adds a subcommand.  
________________

- <a name="method-add-string-option"></a>[ApplicationCommandStringOption](./class_applicationcommandstringoption.md) **add\_string\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds a string option.  
________________

- <a name="method-add-integer-option"></a>[ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) **add\_integer\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds an integer option.  
________________

- <a name="method-add-boolean-option"></a>[ApplicationCommandBoolOption](./class_applicationcommandbooloption.md) **add\_boolean\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds a bollean option.  
________________

- <a name="method-add-user-option"></a>[ApplicationCommandUserOption](./class_applicationcommanduseroption.md) **add\_user\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds a user option.  
________________

- <a name="method-add-channel-option"></a>[ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md) **add\_channel\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds channel option.  
________________

- <a name="method-add-role-option"></a>[ApplicationCommandRoleOption](./class_applicationcommandroleoption.md) **add\_role\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds a role option.  
________________

- <a name="method-add-mentionable-option"></a>[ApplicationCommandMentionableOption](./class_applicationcommandmentionableoption.md) **add\_mentionable\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds a mentionable option.  
________________

- <a name="method-add-number-option"></a>[ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) **add\_number\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds a number option.  
________________

- <a name="method-add-attachment-option"></a>[ApplicationCommandAttachmentOption](./class_applicationcommandattachmentoption.md) **add\_attachment\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Adds an attachment option.  
________________

- <a name="method-with-description"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **with\_description** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) command\_description **)**  
  
	Sets the command description.  
________________

- <a name="method-of-type"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **of\_type** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_type **)**  
  
	Sets command's type.  
________________

- <a name="method-as-chat-input"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **as\_chat\_input** **(**  **)**  
  
	Sets the command's type to slash command.  
________________

- <a name="method-as-user-command"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **as\_user\_command** **(**  **)**  
  
	Sets the command's type to user command.  
________________

- <a name="method-as-message-command"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **as\_message\_command** **(**  **)**  
  
	Sets the command's type to message command.  
________________

- <a name="method-subcommand-group-builder"></a>[ApplicationCommandSubCommandGroup](./class_applicationcommandsubcommandgroup.md) **subcommand\_group\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) group\_name **)**  
  
	Creates a new sub-comand group builder  
________________

- <a name="method-subcommand-builder"></a>[ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md) **subcommand\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) subcommand **)**  
  
	Creates a new sub-command builder.  
________________

- <a name="method-string-option-builder"></a>[ApplicationCommandStringOption](./class_applicationcommandstringoption.md) **string\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Creates a new string builder.  
________________

- <a name="method-integer-option-builder"></a>[ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) **integer\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Creates a new integer builder.  
________________

- <a name="method-boolean-option-builder"></a>[ApplicationCommandBoolOption](./class_applicationcommandbooloption.md) **boolean\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Creates a new boolean builder.  
________________

- <a name="method-user-option-builder"></a>[ApplicationCommandUserOption](./class_applicationcommanduseroption.md) **user\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Creates a new user builder.  
________________

- <a name="method-channel-option-builder"></a>[ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md) **channel\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Creates a new channel builder.  
________________

- <a name="method-role-option-builder"></a>[ApplicationCommandRoleOption](./class_applicationcommandroleoption.md) **role\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Creates a new role builder.  
________________

- <a name="method-mentionable-option-builder"></a>[ApplicationCommandMentionableOption](./class_applicationcommandmentionableoption.md) **mentionable\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Creates a new mentuinable builder.  
________________

- <a name="method-number-option-builder"></a>[ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) **number\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Creates a new number builder.  
________________

- <a name="method-attachment-option-builder"></a>[ApplicationCommandAttachmentOption](./class_applicationcommandattachmentoption.md) **attachment\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Creates a new attachment builder.  
________________

- <a name="method-build"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **build** **(**  **)**  
  
	Builds the commands data.  
________________

  
