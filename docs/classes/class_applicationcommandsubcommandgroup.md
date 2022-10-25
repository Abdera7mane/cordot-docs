  
# ApplicationCommandSubCommandGroup
  
**Inherits:** [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build sub-command options to group sub-commands 
for a slash command.  
  
## Properties
  
| type                                                                  | name                         |
|-----------------------------------------------------------------------|------------------------------|
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [options](#property-options) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                          |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md) | [add\_subcommand](#method-add-subcommand) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)** |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                       |  
  
## Property Descriptions
  
- <a name="property-options"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **options**  
  
	List of `ApplicationCommandOptionBuilder`s.
  
  
## Method Descriptions
  
- <a name="method-ApplicationCommandSubCommandGroup"></a>[ApplicationCommandSubCommandGroup](./class_applicationcommandsubcommandgroup.md) **ApplicationCommandSubCommandGroup** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Constructs new command sub-command option builder.  
________________

- <a name="method-add-subcommand"></a>[ApplicationCommandSubCommand](./class_applicationcommandsubcommand.md) **add\_subcommand** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**  
  
	Adds a sub-command option.  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
