  
# ApplicationCommandOptionBuilder
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [ApplicationCommandAttachmentOption](./class_applicationcommandattachmentoption.md), [ApplicationCommandBoolOption](./class_applicationcommandbooloption.md), [ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md), [ApplicationCommandChoicesBuilder](./class_applicationcommandchoicesbuilder.md), [ApplicationCommandMentionableOption](./class_applicationcommandmentionableoption.md), [ApplicationCommandRoleOption](./class_applicationcommandroleoption.md), [ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md), [ApplicationCommandSubCommandGroup](./class_applicationcommandsubcommandgroup.md), [ApplicationCommandUserOption](./class_applicationcommanduseroption.md)  
  
## Description
  
Abstract command option builder.  
  
## Properties
  
| type                                                                    | name                                 |
|-------------------------------------------------------------------------|--------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [type](#property-type)               |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)               |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [description](#property-description) |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [required](#property-required)       |  
  
## Methods
  
| return type                                                                   | signature                                                                                                                                             |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) | [with\_description](#method-with-description) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_description **)** |
| [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) | [is\_required](#method-is-required) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                             |  
  
## Property Descriptions
  
- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	Type of option.  
________________

- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Name of option.  
________________

- <a name="property-description"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **description**  
  
	Description of option.  
________________

- <a name="property-required"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **required**  
  
	Whether the option is reuired.
  
  
## Method Descriptions
  
- <a name="method-ApplicationCommandOptionBuilder"></a>[ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) **ApplicationCommandOptionBuilder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Constructs a new option builder.  
________________

- <a name="method-with-description"></a>[ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) **with\_description** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_description **)**  
  
	Sets the options description.  
________________

- <a name="method-is-required"></a>[ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) **is\_required** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Whether the option should be required.  
________________

  
