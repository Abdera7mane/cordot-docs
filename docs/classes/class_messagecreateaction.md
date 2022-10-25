  
# MessageCreateAction
  
**Inherits:** [MessageAction](./class_messageaction.md) < [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [InteractionFollowupCreateAction](./class_interactionfollowupcreateaction.md), [InteractionMessageCreateAction](./class_interactionmessagecreateaction.md)  
  
## Description
  
Message action to send a message to a channel.  
  
## Methods
  
| return type                                           | signature                                                                                                                                                                                                         |
|-------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Message](./class_message.md)                         | [submit](#method-submit) **(**  **)** <u>_coroutine_</u>                                                                                                                                                          |
| [MessageCreateAction](./class_messagecreateaction.md) | [set\_tts](#method-set-tts) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**                                                                                                 |
| [MessageCreateAction](./class_messagecreateaction.md) | [reply\_to](#method-reply-to) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) fail\_on\_error=true **)** |
| [MessageCreateAction](./class_messagecreateaction.md) | [add\_sticker](#method-add-sticker) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) sticker\_id **)**                                                                                     |  
  
## Constants
  
- <a name="constant-MAX-STICKERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_STICKERS** = 3  
  
	Maxiumum number of stickers in a message.
  
  
## Method Descriptions
  
- <a name="method-MessageCreateAction"></a>[MessageCreateAction](./class_messagecreateaction.md) **MessageCreateAction** **(** [DiscordRESTMediator](./class_discordrestmediator.md) rest, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**  
  
	Constructs a new `MessageCreateAction` instance.  
________________

- <a name="method-submit"></a>[Message](./class_message.md) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Sends the message.  
________________

- <a name="method-set-tts"></a>[MessageCreateAction](./class_messagecreateaction.md) **set\_tts** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Enables/Disables TTS (Text To Speach) to the message. `false` by default.  
________________

- <a name="method-reply-to"></a>[MessageCreateAction](./class_messagecreateaction.md) **reply\_to** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) fail\_on\_error=true **)**  
  
	References a message by `message_id` to reply to. When `fail_on_error` is `true`
	the action fails if the referenced message does not exist.  
________________

- <a name="method-add-sticker"></a>[MessageCreateAction](./class_messagecreateaction.md) **add\_sticker** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) sticker\_id **)**  
  
	Attach a sticker to the message.  
________________

  
