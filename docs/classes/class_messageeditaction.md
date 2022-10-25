  
# MessageEditAction
  
**Inherits:** [MessageAction](./class_messageaction.md) < [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [InteractionFollowupEditAction](./class_interactionfollowupeditaction.md), [InteractionMessageEditAction](./class_interactionmessageeditaction.md)  
  
## Description
  
Message action to edit an existing message.  
  
## Methods
  
| return type                   | signature                                                |
|-------------------------------|----------------------------------------------------------|
| [Message](./class_message.md) | [submit](#method-submit) **(**  **)** <u>_coroutine_</u> |  
  
## Method Descriptions
  
- <a name="method-MessageEditAction"></a>[MessageEditAction](./class_messageeditaction.md) **MessageEditAction** **(** [DiscordRESTMediator](./class_discordrestmediator.md) rest, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**  
  
	Constructs a new `MessageEditAction` instance.  
________________

- <a name="method-submit"></a>[Message](./class_message.md) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Edits the message.  
________________

  
