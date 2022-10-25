  
# ChannelRESTAPI
  
**Inherits:** [DiscordRESTAPI](./class_discordrestapi.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Channel REST API implementation.  
  
## Methods
  
| return type                                                           | signature                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Channel](./class_channel.md)                                         | [get\_channel](#method-get-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                                                                                                     |
| [Channel](./class_channel.md)                                         | [edit\_channel](#method-edit-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                                        |
| [Channel](./class_channel.md)                                         | [delete\_channel](#method-delete-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                                                                                                                            |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [get\_messages](#method-get-messages) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) query={limit=50} **)** <u>_coroutine_</u>                                                                                                                                                                                 |
| [Message](./class_message.md)                                         | [get\_message](#method-get-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                      |
| [Message](./class_message.md)                                         | [create\_message](#method-create-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>                                                                                                                                                                                       |
| [Message](./class_message.md)                                         | [crosspost\_message](#method-crosspost-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>                                                                                                                                                                                          |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [create\_reaction](#method-create-reaction) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)** <u>_coroutine_</u>                                                                                                                                                             |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [delete\_own\_reaction](#method-delete-own-reaction) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)** <u>_coroutine_</u>                                                                                                                                                    |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [delete\_user\_reaction](#method-delete-user-reaction) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)** <u>_coroutine_</u>                                                                      |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [get\_reactions](#method-get-reactions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=25 **)** <u>_coroutine_</u>          |
| void                                                                  | [delete\_all\_reactions](#method-delete-all-reactions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>                                                                                                                                                                                   |
| void                                                                  | [delete\_emoji\_reactions](#method-delete-emoji-reactions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)** <u>_coroutine_</u>                                                                                                                                              |
| [Message](./class_message.md)                                         | [edit\_message](#method-edit-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>                                                                                                            |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [delete\_message](#method-delete-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                                             |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [bulk\_delete\_messages](#method-bulk-delete-messages) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, PoolStringArray messages\_ids, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                                                                                |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [edit\_channel\_permissions](#method-edit-channel-permissions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) overwrite\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason **)** <u>_coroutine_</u> |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [get\_channel\_invites](#method-get-channel-invites) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                                                                                    |
| [Guild.Invite](./class_guild.md#invite)                               | [create\_channel\_invite](#method-create-channel-invite) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                     |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [delete\_channel\_permission](#method-delete-channel-permission) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) overwrite\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason **)** <u>_coroutine_</u>                                                                                       |  
  
## Method Descriptions
  
- <a name="method-ChannelRESTAPI"></a>[ChannelRESTAPI](./class_channelrestapi.md) **ChannelRESTAPI** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**  
  
	Constructs a new `ChannelRESTAPI` object.  
________________

- <a name="method-get-channel"></a>[Channel](./class_channel.md) **get\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)** <u>_coroutine_</u>  
  
	Gets the channel with the given `channel_id`.  
	<https://discord.com/developers/docs/resources/channel#get-channel>  
________________

- <a name="method-edit-channel"></a>[Channel](./class_channel.md) **edit\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Update a channel's settings.  
	<https://discord.com/developers/docs/resources/channel#modify-channel>  
________________

- <a name="method-delete-channel"></a>[Channel](./class_channel.md) **delete\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Deletes a channel, or closes a private message.  
	<https://discord.com/developers/docs/resources/channel#get-channel>  
________________

- <a name="method-get-messages"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_messages** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) query={limit=50} **)** <u>_coroutine_</u>  
  
	Gets a list of messages in a channel.  
	<https://discord.com/developers/docs/resources/channel#get-channel-messages>  
________________

- <a name="method-get-message"></a>[Message](./class_message.md) **get\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>  
  
	Gets a message in a channel.  
	<https://discord.com/developers/docs/resources/channel#get-channel-message>  
________________

- <a name="method-create-message"></a>[Message](./class_message.md) **create\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Creates a message in a channel.  
	<https://discord.com/developers/docs/resources/channel#create-message>  
________________

- <a name="method-crosspost-message"></a>[Message](./class_message.md) **crosspost\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>  
  
	Cross-posts a message in a News Channel to following channels.  
	<https://discord.com/developers/docs/resources/channel#crosspost-message>  
________________

- <a name="method-create-reaction"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **create\_reaction** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)** <u>_coroutine_</u>  
  
	Creates a reaction for a message. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/channel#create-reaction>  
________________

- <a name="method-delete-own-reaction"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_own\_reaction** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)** <u>_coroutine_</u>  
  
	Deletes a reaction the current user has made for the message.  
	Returns `true` on success.
	<https://discord.com/developers/docs/resources/channel#delete-own-reaction>  
________________

- <a name="method-delete-user-reaction"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_user\_reaction** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)** <u>_coroutine_</u>  
  
	Deletes another user's reaction. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/channel#delete-user-reaction>  
________________

- <a name="method-get-reactions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_reactions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=25 **)** <u>_coroutine_</u>  
  
	Gets a list of users that reacted with the given `emoji`.  
	<https://discord.com/developers/docs/resources/channel#get-reactions>  
________________

- <a name="method-delete-all-reactions"></a>void **delete\_all\_reactions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>  
  
	Deletes all reactions on a message.  
	<https://discord.com/developers/docs/resources/channel#get-channel-message>  
________________

- <a name="method-delete-emoji-reactions"></a>void **delete\_emoji\_reactions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)** <u>_coroutine_</u>  
  
	Deletes all the reactions for a given `emoji` on a message.  
	<https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji>  
________________

- <a name="method-edit-message"></a>[Message](./class_message.md) **edit\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Edits a previously sent message.  
	<https://discord.com/developers/docs/resources/channel#edit-message>  
________________

- <a name="method-delete-message"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Deletes a message. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/channel#delete-message>  
________________

- <a name="method-bulk-delete-messages"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **bulk\_delete\_messages** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, PoolStringArray messages\_ids, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Delete multiple messages in a single request. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/channel#bulk-delete-messages>  
________________

- <a name="method-edit-channel-permissions"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **edit\_channel\_permissions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) overwrite\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason **)** <u>_coroutine_</u>  
  
	Edit the channel permission overwrites for a user or role in a channel.
	Only usable for guild channels. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/channel#edit-channel-permissions>  
________________

- <a name="method-get-channel-invites"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_channel\_invites** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)** <u>_coroutine_</u>  
  
	Returns a list of `Guild.Invite` objects for the channel.  
	<https://discord.com/developers/docs/resources/channel#get-channel-invites>  
________________

- <a name="method-create-channel-invite"></a>[Guild.Invite](./class_guild.md#invite) **create\_channel\_invite** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Create a new invite for the channel. Only usable for guild channels.  
	<https://discord.com/developers/docs/resources/channel#create-channel-invite>  
________________

- <a name="method-delete-channel-permission"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_channel\_permission** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) overwrite\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason **)** <u>_coroutine_</u>  
  
	Delete a channel permission overwrite for a user or role in a channel.
	Only usable for guild channels. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/channel#delete-channel-permissions>  
________________

  
