  
# ApplicationCommandChoicesBuilder
  
**Inherits:** [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [ApplicationCommandIntegerOption](./class_applicationcommandintegeroption.md), [ApplicationCommandNumberOption](./class_applicationcommandnumberoption.md), [ApplicationCommandStringOption](./class_applicationcommandstringoption.md)  
  
## Description
  
Abstract builder for application command option choices.  
  
## Properties
  
| type                                                                  | name                                   |
|-----------------------------------------------------------------------|----------------------------------------|
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [choices](#property-choices)           |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [autocomplete](#property-autocomplete) |  
  
## Methods
  
| return type                                                                     | signature                                                                                                                           |
|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationCommandChoicesBuilder](./class_applicationcommandchoicesbuilder.md) | [set\_autocomplete](#method-set-autocomplete) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)** |  
  
## Property Descriptions
  
- <a name="property-choices"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **choices**  
  
	List of choices stored in `Dictionary` containing `name`, `value`
	and `name_localizations` as keys.  
________________

- <a name="property-autocomplete"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **autocomplete**  
  
	Whether autocomplete is enabled on this option.
  
  
## Method Descriptions
  
- <a name="method-set-autocomplete"></a>[ApplicationCommandChoicesBuilder](./class_applicationcommandchoicesbuilder.md) **set\_autocomplete** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Whether to enable autocomplete on this option. Can not be `true` if a list of
	choices were added.  
________________

  
