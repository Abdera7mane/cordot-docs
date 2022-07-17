  
# ApplicationCommandBuilder
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                                                | default |
|-------------------------------------------------------------------------|-----------------------------------------------------|---------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)                              |         |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [description](#property-description)                |         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [options](#property-options)                        |         |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [default\_permission](#property-default-permission) | `true`  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [type](#property-type)                              | `1`     |  
  
## Methods
  
| return type                                                                           | signature                                                                                                                                                           |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationCommandBuilder](./class_applicationcommandbuilder.md)                     | [ApplicationCommandBuilder](#method-ApplicationCommandBuilder) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) command\_name **)**    |
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
| [ApplicationCommandBuilder](./class_applicationcommandbuilder.md)                     | [with\_default\_permission](#method-with-default-permission) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                  |
| [ApplicationCommandBuilder](./class_applicationcommandbuilder.md)                     | [of\_type](#method-of-type) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_type **)**                                             |
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
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)               | [get\_class](#method-get-class) **(**  **)**                                                                                                                        |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-description"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **description**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-options"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **options**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-default-permission"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **default_permission**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-ApplicationCommandBuilder"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **ApplicationCommandBuilder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) command\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-option"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **add\_option** **(** [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) option **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-subcommand-group"></a>[ApplicationCommandSubCommandGroup](./class_applicationcommandsubcommandgroup.md) **add\_subcommand\_group** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) group\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-subcommand"></a>[ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md) **add\_subcommand** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) subcommand **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-string-option"></a>[ApplicationCommandStringOption](./class_applicationcommandstringoption.md) **add\_string\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-integer-option"></a>[ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) **add\_integer\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-boolean-option"></a>[ApplicationCommandBoolOption](./class_applicationcommandbooloption.md) **add\_boolean\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-user-option"></a>[ApplicationCommandUserOption](./class_applicationcommanduseroption.md) **add\_user\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-channel-option"></a>[ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md) **add\_channel\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-role-option"></a>[ApplicationCommandRoleOption](./class_applicationcommandroleoption.md) **add\_role\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-mentionable-option"></a>[ApplicationCommandMentionableOption](./class_applicationcommandmentionableoption.md) **add\_mentionable\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-number-option"></a>[ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) **add\_number\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-attachment-option"></a>[ApplicationCommandAttachmentOption](./class_applicationcommandattachmentoption.md) **add\_attachment\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-with-description"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **with\_description** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) command\_description **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-with-default-permission"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **with\_default\_permission** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-of-type"></a>[ApplicationCommandBuilder](./class_applicationcommandbuilder.md) **of\_type** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_type **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-subcommand-group-builder"></a>[ApplicationCommandSubCommandGroup](./class_applicationcommandsubcommandgroup.md) **subcommand\_group\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) group\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-subcommand-builder"></a>[ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md) **subcommand\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) subcommand **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-string-option-builder"></a>[ApplicationCommandStringOption](./class_applicationcommandstringoption.md) **string\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-integer-option-builder"></a>[ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) **integer\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-boolean-option-builder"></a>[ApplicationCommandBoolOption](./class_applicationcommandbooloption.md) **boolean\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-user-option-builder"></a>[ApplicationCommandUserOption](./class_applicationcommanduseroption.md) **user\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-channel-option-builder"></a>[ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md) **channel\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-role-option-builder"></a>[ApplicationCommandRoleOption](./class_applicationcommandroleoption.md) **role\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-mentionable-option-builder"></a>[ApplicationCommandMentionableOption](./class_applicationcommandmentionableoption.md) **mentionable\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-number-option-builder"></a>[ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) **number\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-attachment-option-builder"></a>[ApplicationCommandAttachmentOption](./class_applicationcommandattachmentoption.md) **attachment\_option\_builder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-build"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **build** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
