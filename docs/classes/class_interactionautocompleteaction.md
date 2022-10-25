  
# InteractionAutocompleteAction
  
**Inherits:** [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                                                                                               |
|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [InteractionAutocompleteAction](./class_interactionautocompleteaction.md) | [add\_string\_choice](#method-add-string-choice) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)** |
| [InteractionAutocompleteAction](./class_interactionautocompleteaction.md) | [add\_integer\_choice](#method-add-integer-choice) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)**     |
| [InteractionAutocompleteAction](./class_interactionautocompleteaction.md) | [add\_double\_choice](#method-add-double-choice) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)**   |
| [InteractionAutocompleteAction](./class_interactionautocompleteaction.md) | [add\_choice](#method-add-choice) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)**              |  
  
## Constants
  
- <a name="constant-MAX-CHOICES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_CHOICES** = 25  
  
	Maximum number of choices in an autocomplete.  
________________

- <a name="constant-MAX-CHARACTERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_CHARACTERS** = 100  
  
	Maximum number of characters for string options.
  
  
## Method Descriptions
  
- <a name="method-InteractionAutocompleteAction"></a>[InteractionAutocompleteAction](./class_interactionautocompleteaction.md) **InteractionAutocompleteAction** **(** [DiscordRESTMediator](./class_discordrestmediator.md) rest, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) interaction\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token **)**  
  
	Constructs a new `InteractionAutocompleteAction` instance.  
________________

- <a name="method-add-string-choice"></a>[InteractionAutocompleteAction](./class_interactionautocompleteaction.md) **add\_string\_choice** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)**  
  
	Adds a string choice.  
________________

- <a name="method-add-integer-choice"></a>[InteractionAutocompleteAction](./class_interactionautocompleteaction.md) **add\_integer\_choice** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)**  
  
	Adds an integer choice.  
________________

- <a name="method-add-double-choice"></a>[InteractionAutocompleteAction](./class_interactionautocompleteaction.md) **add\_double\_choice** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)**  
  
	Adds a number choice.  
________________

- <a name="method-add-choice"></a>[InteractionAutocompleteAction](./class_interactionautocompleteaction.md) **add\_choice** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) value, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) localizations **)**  
  
	Adds a choice, `value` must be either a `string`, `number` or `flaot`.  
________________

  
