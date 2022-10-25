  
# InteractionMessageCreateAction
  
**Inherits:** [MessageCreateAction](./class_messagecreateaction.md) < [MessageAction](./class_messageaction.md) < [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Action to edit an interaction original message response.  
  
## Methods
  
| return type                                                               | signature                                                |
|---------------------------------------------------------------------------|----------------------------------------------------------|
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [submit](#method-submit) **(**  **)** <u>_coroutine_</u> |  
  
## Method Descriptions
  
- <a name="method-InteractionMessageCreateAction"></a>[InteractionMessageCreateAction](./class_interactionmessagecreateaction.md) **InteractionMessageCreateAction** **(** [DiscordRESTMediator](./class_discordrestmediator.md) rest, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) interaction\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token **)**  
  
	Constructs a new `InteractionMessageCreateAction` instance.  
________________

- <a name="method-submit"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Creates the message response to the interaction.


	doc-return-override:bool  
________________

  
