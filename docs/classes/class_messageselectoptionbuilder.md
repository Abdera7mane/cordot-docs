  
# MessageSelectOptionBuilder
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build message select menu options.  
  
## Methods
  
| return type                                                                     | signature                                                                                                                                       |
|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| [MessageSelectOptionBuilder](./class_messageselectoptionbuilder.md)             | [with\_descriptions](#method-with-descriptions) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) description **)** |
| [MessageSelectOptionBuilder](./class_messageselectoptionbuilder.md)             | [with\_emoji](#method-with-emoji) **(** [Emoji](./class_emoji.md) emoji **)**                                                                   |
| [MessageSelectOptionBuilder](./class_messageselectoptionbuilder.md)             | [default](#method-default) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                                |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [build](#method-build) **(**  **)**                                                                                                             |  
  
## Constants
  
- <a name="constant-MAX-CHARACTERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_CHARACTERS** = 100  
  
	Maximum number of characters in text fields.
  
  
## Method Descriptions
  
- <a name="method-MessageSelectOptionBuilder"></a>[MessageSelectOptionBuilder](./class_messageselectoptionbuilder.md) **MessageSelectOptionBuilder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) label, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) value **)**  
  
	Constructs a new `MessageSelectOptionBuilder` with a `label` and `value`.  
________________

- <a name="method-with-descriptions"></a>[MessageSelectOptionBuilder](./class_messageselectoptionbuilder.md) **with\_descriptions** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) description **)**  
  
	Sets an additional description of the option.  
________________

- <a name="method-with-emoji"></a>[MessageSelectOptionBuilder](./class_messageselectoptionbuilder.md) **with\_emoji** **(** [Emoji](./class_emoji.md) emoji **)**  
  
	Sets an `emoji` for the option.  
________________

- <a name="method-default"></a>[MessageSelectOptionBuilder](./class_messageselectoptionbuilder.md) **default** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Renders this option as selected by default.  
________________

- <a name="method-build"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **build** **(**  **)**  
  
	Returns the select menu option data as a `Dictionary`.  
________________

  
