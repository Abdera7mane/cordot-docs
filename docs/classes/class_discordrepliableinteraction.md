  
# DiscordRepliableInteraction
  
**Inherits:** [DiscordInteraction](./class_discordinteraction.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [DiscordApplicationCommandInteraction](./class_discordapplicationcommandinteraction.md), [DiscordMessageComponentInteraction](./class_discordmessagecomponentinteraction.md), [DiscordModalSubmit](./class_discordmodalsubmit.md)  
  
## Description
  
Represent an interaction that accepts message replies and followups.
Interactions are expected to be replid to within **3 seconds** or
they get invalidated.  
  
## Properties
  
| type                                                                  | name                                             |
|-----------------------------------------------------------------------|--------------------------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [replied](#property-replied)                     |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [deferred](#property-deferred)                   |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)     | [last\_followup\_id](#property-last-followup-id) |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [followup\_ids](#property-followup-ids)          |  
  
## Methods
  
| return type                                                                   | signature                                                                                                                                                 |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| [InteractionMessageCreateAction](./class_interactionmessagecreateaction.md)   | [create\_reply](#method-create-reply) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) with\_content="" **)**                |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)           | [defer\_reply](#method-defer-reply) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) ephemeral=false **)** <u>_coroutine_</u>    |
| [InteractionFollowupCreateAction](./class_interactionfollowupcreateaction.md) | [create\_followup](#method-create-followup) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) with\_content="" **)**          |
| [Message](./class_message.md)                                                 | [fetch\_followup](#method-fetch-followup) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)** <u>_coroutine_</u>   |
| [InteractionFollowupEditAction](./class_interactionfollowupeditaction.md)     | [edit\_followup](#method-edit-followup) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)**                        |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)           | [delete\_followup](#method-delete-followup) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)** <u>_coroutine_</u> |
| [Message](./class_message.md)                                                 | [fetch\_response](#method-fetch-response) **(**  **)** <u>_coroutine_</u>                                                                                 |
| [InteractionMessageEditAction](./class_interactionmessageeditaction.md)       | [edit\_response](#method-edit-response) **(**  **)**                                                                                                      |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)           | [delete\_response](#method-delete-response) **(**  **)** <u>_coroutine_</u>                                                                               |  
  
## Property Descriptions
  
- <a name="property-replied"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **replied**  
  
	Whether this interaction has been replied to.  
________________

- <a name="property-deferred"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **deferred**  
  
	Whether this interaction was deferred.  
________________

- <a name="property-last-followup-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **last_followup_id**  
  
	Last followup message id.  
________________

- <a name="property-followup-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **followup_ids**  
  
	List of followup message ids.
  
  
## Method Descriptions
  
- <a name="method-create-reply"></a>[InteractionMessageCreateAction](./class_interactionmessagecreateaction.md) **create\_reply** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) with\_content="" **)**  
  
	Create a message reply to respond to the interation.  
________________

- <a name="method-defer-reply"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **defer\_reply** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) ephemeral=false **)** <u>_coroutine_</u>  
  
	Defers the reply to the message.  
________________

- <a name="method-create-followup"></a>[InteractionFollowupCreateAction](./class_interactionfollowupcreateaction.md) **create\_followup** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) with\_content="" **)**  
  
	Creates a followup message to the interaction. Must reply to the interaction first.  
________________

- <a name="method-fetch-followup"></a>[Message](./class_message.md) **fetch\_followup** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)** <u>_coroutine_</u>  
  
	Fetches a followup message.  
________________

- <a name="method-edit-followup"></a>[InteractionFollowupEditAction](./class_interactionfollowupeditaction.md) **edit\_followup** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)**  
  
	Edits a followup message.  
________________

- <a name="method-delete-followup"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_followup** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)** <u>_coroutine_</u>  
  
	Deletes a followup message.  
________________

- <a name="method-fetch-response"></a>[Message](./class_message.md) **fetch\_response** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the original message response of the interaction.  
________________

- <a name="method-edit-response"></a>[InteractionMessageEditAction](./class_interactionmessageeditaction.md) **edit\_response** **(**  **)**  
  
	Edits the original message response.  
________________

- <a name="method-delete-response"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_response** **(**  **)** <u>_coroutine_</u>  
  
	Deletes the original message response.  
________________

  
