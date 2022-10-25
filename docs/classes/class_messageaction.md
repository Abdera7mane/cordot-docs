  
# MessageAction
  
**Inherits:** [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [MessageCreateAction](./class_messagecreateaction.md), [MessageEditAction](./class_messageeditaction.md)  
  
## Description
  
Abstract class for message actions.  
  
## Methods
  
| return type                               | signature                                                                                                                                 |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| [Message](./class_message.md)             | [submit](#method-submit) **(**  **)** <u>_coroutine_</u>                                                                                  |
| [MessageAction](./class_messageaction.md) | [set\_content](#method-set-content) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) content **)**           |
| [MessageAction](./class_messageaction.md) | [add\_embed](#method-add-embed) **(** [MessageEmbedBuilder](./class_messageembedbuilder.md) embed **)**                                   |
| [MessageAction](./class_messageaction.md) | [add\_component](#method-add-component) **(** [MessageComponentBuilder](./class_messagecomponentbuilder.md) component **)**               |
| [MessageAction](./class_messageaction.md) | [suppress\_mentions](#method-suppress-mentions) **(**  **)**                                                                              |
| [MessageAction](./class_messageaction.md) | [allow\_user\_mention](#method-allow-user-mention) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)** |
| [MessageAction](./class_messageaction.md) | [allow\_user\_mentions](#method-allow-user-mentions) **(**  **)**                                                                         |
| [MessageAction](./class_messageaction.md) | [allow\_role\_mention](#method-allow-role-mention) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)** |
| [MessageAction](./class_messageaction.md) | [allow\_role\_mentions](#method-allow-role-mentions) **(**  **)**                                                                         |
| [MessageAction](./class_messageaction.md) | [allow\_everyone\_mention](#method-allow-everyone-mention) **(**  **)**                                                                   |
| [MessageAction](./class_messageaction.md) | [suppress\_embeds](#method-suppress-embeds) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**         |  
  
## Constants
  
- <a name="constant-MAX-CONTENT-LENGTH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_CONTENT\_LENGTH** = 2000  
  
	Maxiumum embeds in a message.  
________________

- <a name="constant-MAX-EMBEDS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_EMBEDS** = 10  
  
	Maxiumum number of embeds in a message.
  
  
## Method Descriptions
  
- <a name="method-submit"></a>[Message](./class_message.md) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Executes the action.  
________________

- <a name="method-set-content"></a>[MessageAction](./class_messageaction.md) **set\_content** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) content **)**  
  
	Sets content of the message.  
________________

- <a name="method-add-embed"></a>[MessageAction](./class_messageaction.md) **add\_embed** **(** [MessageEmbedBuilder](./class_messageembedbuilder.md) embed **)**  
  
	Attach an embed to the message.  
________________

- <a name="method-add-component"></a>[MessageAction](./class_messageaction.md) **add\_component** **(** [MessageComponentBuilder](./class_messagecomponentbuilder.md) component **)**  
  
	Adds a component to the message.  
________________

- <a name="method-suppress-mentions"></a>[MessageAction](./class_messageaction.md) **suppress\_mentions** **(**  **)**  
  
	Suppresses all mentions in the message  
________________

- <a name="method-allow-user-mention"></a>[MessageAction](./class_messageaction.md) **allow\_user\_mention** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**  
  
	Allows a user with `user_id` to be mentioned in a message.  
________________

- <a name="method-allow-user-mentions"></a>[MessageAction](./class_messageaction.md) **allow\_user\_mentions** **(**  **)**  
  
	Allows all user mentions.  
________________

- <a name="method-allow-role-mention"></a>[MessageAction](./class_messageaction.md) **allow\_role\_mention** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**  
  
	Allows a role with `role_id` to be mentioned in a message.  
________________

- <a name="method-allow-role-mentions"></a>[MessageAction](./class_messageaction.md) **allow\_role\_mentions** **(**  **)**  
  
	Allows all role mentions.  
________________

- <a name="method-allow-everyone-mention"></a>[MessageAction](./class_messageaction.md) **allow\_everyone\_mention** **(**  **)**  
  
	Allows `@everyone` and `@here` mentions.  
________________

- <a name="method-suppress-embeds"></a>[MessageAction](./class_messageaction.md) **suppress\_embeds** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Hides all embeds from the message.  
________________

  
