  
# ApplicationCommandIntegerOption
  
**Inherits:** [ApplicationCommandChoicesBuilder](./class_applicationcommandchoicesbuilder.md) < [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build integer options for a slash command.  
  
## Properties
  
| type                                                              | name                              |
|-------------------------------------------------------------------|-----------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [min\_value](#property-min-value) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [max\_value](#property-max-value) |  
  
## Methods
  
| return type                                                                   | signature                                                                                                                                                                                                                                                                                          |
|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) | [add\_choice](#method-add-choice) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)** |
| [ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) | [set\_min](#method-set-min) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) value **)**                                                                                                                                                                                    |
| [ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) | [set\_max](#method-set-max) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) value **)**                                                                                                                                                                                    |  
  
## Property Descriptions
  
- <a name="property-min-value"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **min_value**  
  
	Minumum value a user can input.  
________________

- <a name="property-max-value"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **max_value**  
  
	Maximum value a user can input.
  
  
## Method Descriptions
  
- <a name="method-ApplicationCommandIntegerOption"></a>[ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) **ApplicationCommandIntegerOption** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Constructs a new integer option builder.  
________________

- <a name="method-add-choice"></a>[ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) **add\_choice** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)**  
  
	Adds an integer choice.  
________________

- <a name="method-set-min"></a>[ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) **set\_min** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) value **)**  
  
	Sets the minimum value of the option.  
________________

- <a name="method-set-max"></a>[ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md) **set\_max** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) value **)**  
  
	Sets the maximum value of the option.  
________________

  
