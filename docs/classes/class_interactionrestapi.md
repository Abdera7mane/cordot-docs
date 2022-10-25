  
# InteractionRESTAPI
  
**Inherits:** [DiscordRESTAPI](./class_discordrestapi.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Interaction REST API implementation.  
  
## Methods
  
| return type                                                         | signature                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [create\_response](#method-create-response) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) interaction\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>                                                                                             |
| [Message](./class_message.md)                                       | [get\_original\_response](#method-get-original-response) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token **)** <u>_coroutine_</u>                                                                                                                                                                        |
| [Message](./class_message.md)                                       | [edit\_original\_response](#method-edit-original-response) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>                                                                              |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [delete\_original\_response](#method-delete-original-response) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token **)** <u>_coroutine_</u>                                                                                                                                                                  |
| [Message](./class_message.md)                                       | [create\_followup\_message](#method-create-followup-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>                                                                            |
| [Message](./class_message.md)                                       | [get\_followup\_message](#method-get-followup-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>                                                                                           |
| [Message](./class_message.md)                                       | [edit\_followup\_message](#method-edit-followup-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u> |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [delete\_followup\_message](#method-delete-followup-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>                                                                                     |  
  
## Method Descriptions
  
- <a name="method-InteractionRESTAPI"></a>[InteractionRESTAPI](./class_interactionrestapi.md) **InteractionRESTAPI** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**  
  
	Constructs a new `InteractionRESTAPI` object.  
________________

- <a name="method-create-response"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **create\_response** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) interaction\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Create a response to an interaction from the gateway.
	Returns `true` on success.  
	<https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response>  
________________

- <a name="method-get-original-response"></a>[Message](./class_message.md) **get\_original\_response** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token **)** <u>_coroutine_</u>  
  
	Returns the initial interaction response.  
	<https://discord.com/developers/docs/interactions/receiving-and-responding#get-original-interaction-response>  
________________

- <a name="method-edit-original-response"></a>[Message](./class_message.md) **edit\_original\_response** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Edits the initial interaction response.  
	<https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response>  
________________

- <a name="method-delete-original-response"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_original\_response** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token **)** <u>_coroutine_</u>  
  
	Deletes the initial interaction response. Returns `true` on success.  
	<https://discord.com/developers/docs/interactions/receiving-and-responding#delete-original-interaction-response>  
________________

- <a name="method-create-followup-message"></a>[Message](./class_message.md) **create\_followup\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Creates a followup message for an interaction.  
	<https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message>  
________________

- <a name="method-get-followup-message"></a>[Message](./class_message.md) **get\_followup\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>  
  
	Returns a followup message for an interaction.  
	<https://discord.com/developers/docs/interactions/receiving-and-responding#get-followup-message>  
________________

- <a name="method-edit-followup-message"></a>[Message](./class_message.md) **edit\_followup\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Edits a followup message for an Interaction.  
	<https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message>  
________________

- <a name="method-delete-followup-message"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_followup\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) interaction\_token, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>  
  
	Deletes a followup message for an Interaction.  
	<https://discord.com/developers/docs/interactions/receiving-and-responding#delete-followup-message>  
________________

  
