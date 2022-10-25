  
# ApplicationCommandNumberOption
  
**Inherits:** [ApplicationCommandChoicesBuilder](./class_applicationcommandchoicesbuilder.md) < [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build number options for a slash command.  
  
## Properties
  
| type                                                                  | name                              | default |
|-----------------------------------------------------------------------|-----------------------------------|---------|
| [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) | [min\_value](#property-min-value) | `NAN`   |
| [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) | [max\_value](#property-max-value) | `NAN`   |  
  
## Methods
  
| return type                                                                 | signature                                                                                                                                                                                                                                                                                              |
|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) | [add\_choice](#method-add-choice) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)** |
| [ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) | [set\_min](#method-set-min) **(** [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) value **)**                                                                                                                                                                                    |
| [ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) | [set\_max](#method-set-max) **(** [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) value **)**                                                                                                                                                                                    |  
  
## Property Descriptions
  
- <a name="property-min-value"></a>[float](https://docs.godotengine.org/en/3.5/classes/class_float.html) **min_value**  
  
	Minumum value a user can input.  
________________

- <a name="property-max-value"></a>[float](https://docs.godotengine.org/en/3.5/classes/class_float.html) **max_value**  
  
	Maximum value a user can input.
  
  
## Method Descriptions
  
- <a name="method-ApplicationCommandNumberOption"></a>[ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) **ApplicationCommandNumberOption** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Constructs a new number option builder.  
________________

- <a name="method-add-choice"></a>[ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) **add\_choice** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)**  
  
	Adds a number choice.  
________________

- <a name="method-set-min"></a>[ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) **set\_min** **(** [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) value **)**  
  
	Sets the minimum value of the option.  
________________

- <a name="method-set-max"></a>[ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md) **set\_max** **(** [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) value **)**  
  
	Sets the maximum value of the option.  
________________

  
