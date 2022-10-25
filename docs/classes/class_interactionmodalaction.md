  
# InteractionModalAction
  
**Inherits:** [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Methods
  
| return type                                                         | signature                                                                                                                       |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [submit](#method-submit) **(**  **)** <u>_coroutine_</u>                                                                        |
| [InteractionModalAction](./class_interactionmodalaction.md)         | [set\_custom\_id](#method-set-custom-id) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) id **)** |
| [InteractionModalAction](./class_interactionmodalaction.md)         | [set\_title](#method-set-title) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) title **)**       |
| [InteractionModalAction](./class_interactionmodalaction.md)         | [add\_component](#method-add-component) **(** [MessageComponentBuilder](./class_messagecomponentbuilder.md) component **)**     |  
  
## Constants
  
- <a name="constant-MAX-TITLE-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_TITLE\_LENGTH** = 45  
  
	Maximum number of characters in a modal title.  
________________

- <a name="constant-MAX-ID-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_ID\_LENGTH** = 100  
  
	Maximum number ofcharacters in a modal custom id.  
________________

- <a name="constant-MAX-COMPONENTS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_COMPONENTS** = 5  
  
	Maximum number of components in single modal.
  
  
## Method Descriptions
  
- <a name="method-InteractionModalAction"></a>[InteractionModalAction](./class_interactionmodalaction.md) **InteractionModalAction** **(** [DiscordRESTMediator](./class_discordrestmediator.md) rest, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) interaction\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token **)**  
  
	Constructs a new `InteractionModalAction` instance.  
________________

- <a name="method-submit"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Shows a modal popup to the user.
	Return `true` on success.  
________________

- <a name="method-set-custom-id"></a>[InteractionModalAction](./class_interactionmodalaction.md) **set\_custom\_id** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) id **)**  
  
	Sets a custom identifier to the modal.  
________________

- <a name="method-set-title"></a>[InteractionModalAction](./class_interactionmodalaction.md) **set\_title** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) title **)**  
  
	Sets the modal title.  
________________

- <a name="method-add-component"></a>[InteractionModalAction](./class_interactionmodalaction.md) **add\_component** **(** [MessageComponentBuilder](./class_messagecomponentbuilder.md) component **)**  
  
	Adds a component to the modal.  
________________

  
