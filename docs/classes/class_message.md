  
# Message
  
**Inherits:** [TextChannel](./class_textchannel.md) < [TextChannel.BaseMessage](./class_textchannel.md#basemessage) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [GuildMessage](./class_guildmessage.md)  
  
## Description
  
Represents a message sent in a channel within Discord.  
  
## Properties
  
| type                                                                    | name                                                       |
|-------------------------------------------------------------------------|------------------------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [author\_id](#property-author-id)                          |
| [User](./class_user.md)                                                 | [author](#property-author)                                 |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [timestamp](#property-timestamp)                           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [type](#property-type)                                     |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [content](#property-content)                               |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [edited\_timestamp](#property-edited-timestamp)            |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [mentions](#property-mentions)                             |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [channel\_mentions](#property-channel-mentions)            |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [attachments](#property-attachments)                       |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [embeds](#property-embeds)                                 |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [reactions](#property-reactions)                           |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [nonce](#property-nonce)                                   |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_pinned](#property-is-pinned)                          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [webhook\_id](#property-webhook-id)                        |
| [DiscordWebhook](./class_discordwebhook.md)                             | [webhook](#property-webhook)                               |
| [MessageActivity](./class_messageactivity.md)                           | [activity](#property-activity)                             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [application\_id](#property-application-id)                |
| [DiscordApplication](./class_discordapplication.md)                     | [application](#property-application)                       |
| [MessageReference](./class_messagereference.md)                         | [message\_reference](#property-message-reference)          |
| [BitFlag](./class_bitflag.md)                                           | [flags](#property-flags)                                   |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [referenced\_message\_id](#property-referenced-message-id) |
| [Message](./class_message.md)                                           | [referenced\_message](#property-referenced-message)        |
| [MessageInteraction](./class_messageinteraction.md)                     | [interaction](#property-interaction)                       |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [components](#property-components)                         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [sticker\_items](#property-sticker-items)                  |  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                      |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Message](./class_message.md)                                             | [Message](#method-Message) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                                                                    |
| [User](./class_user.md)                                                   | [get\_author](#method-get-author) **(**  **)**                                                                                                                                                                                                 |
| [Message](./class_message.md)                                             | [get\_referenced\_message](#method-get-referenced-message) **(**  **)**                                                                                                                                                                        |
| [Message](./class_message.md)                                             | [edit](#method-edit) **(** [MessageEditData](./class_messageeditdata.md) message\_edit **)**                                                                                                                                                   |
| [Message](./class_message.md)                                             | [fetch\_message](#method-fetch-message) **(**  **)**                                                                                                                                                                                           |
| [Message](./class_message.md)                                             | [fetch\_referenced\_message](#method-fetch-referenced-message) **(**  **)**                                                                                                                                                                    |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [react](#method-react) **(** [Emoji](./class_emoji.md) emoji **)**                                                                                                                                                                             |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [unreact](#method-unreact) **(** [Emoji](./class_emoji.md) emoji **)**                                                                                                                                                                         |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [remove\_reaction](#method-remove-reaction) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Emoji](./class_emoji.md) emoji **)**                                                                            |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_reactions](#method-fetch-reactions) **(** [Emoji](./class_emoji.md) emoji, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=25 **)** |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [clear\_all\_reactions](#method-clear-all-reactions) **(**  **)**                                                                                                                                                                              |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [clear\_emoji\_reactions](#method-clear-emoji-reactions) **(** [Emoji](./class_emoji.md) emoji **)**                                                                                                                                           |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete](#method-delete) **(**  **)**                                                                                                                                                                                                          |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Type**  
  
	- **DEFAULT** = 0  

	- **RECIPIENT\_ADD** = 1  

	- **RECIPIENT\_REMOVE** = 2  

	- **CALL** = 3  

	- **CHANNEL\_NAME\_CHANGE** = 4  

	- **CHANNEL\_ICON\_CHANGE** = 5  

	- **CHANNEL\_PINNED\_MESSAGE** = 6  

	- **GUILD\_MEMBER\_JOIN** = 7  

	- **GUILD\_SUBSCRIPTION** = 8  

	- **GUILD\_SUBSCRIPTION\_TIER\_1** = 9  

	- **GUILD\_SUBSCRIPTION\_TIER\_2** = 10  

	- **GUILD\_SUBSCRIPTION\_TIER\_3** = 11  

	- **CHANNEL\_FOLLOW\_ADD** = 12  

	- **GUILD\_DISCOVERY\_DISQUALIFIED** = 14  

	- **GUILD\_DISCOVERY\_REQUALIFIED** = 15  

	- **GUILD\_DISCOVERY\_GRACE\_PERIOD\_INITIAL\_WARNING** = 16  

	- **GUILD\_DISCOVERY\_GRACE\_PERIOD\_FINAL\_WARNING** = 17  

	- **THREAD\_CREATED** = 18  

	- **REPLY** = 19  

	- **APPLICATION\_COMMAND** = 20  

	- **THREAD\_STARTER\_MESSAGE** = 21  

	- **GUILD\_INVITE\_REMINDER** = 22  

	- **CONTEXT\_MENU\_COMMAND** = 23  

  
	Message types.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Flags**  
  
	- **CROSSPOSTED** = 1  

	- **IS\_CROSSPOST** = 2  

	- **SUPPRESS\_EMBEDS** = 4  

	- **SOURCE\_MESSAGE\_DELETED** = 8  

	- **URGENT** = 16  

	- **HAS\_THREAD** = 32  

	- **EPHEMERAL** = 64  

	- **LOADING** = 128  

  
	Message flags.
  
  
## Property Descriptions
  
- <a name="property-author-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **author_id**  
  
	The author's id of this message.  
________________

- 	<a name="property-author"></a>[User](./class_user.md) **author**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_author() |  
  
	The author of this message.  
________________

- <a name="property-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **timestamp**  
  
	When this message was sent in unix time in seconds.  
________________

- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	Type of message.  
________________

- <a name="property-content"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **content**  
  
	Contents of the message.  
________________

- <a name="property-edited-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **edited_timestamp**  
  
	When this message was edited (or `0` if never).  
________________

- <a name="property-mentions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **mentions**  
  
	Users mentioned in the message.  
________________

- <a name="property-channel-mentions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **channel_mentions**  
  
	Channels mentioned in this message.  
________________

- <a name="property-attachments"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **attachments**  
  
	Attached files to this message.  
________________

- <a name="property-embeds"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **embeds**  
  
	Embedded content.  
________________

- <a name="property-reactions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **reactions**  
  
	Reactions to the message.  
________________

- <a name="property-nonce"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **nonce**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-pinned"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_pinned**  
  
	Whether this message is pinned.  
________________

- <a name="property-webhook-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **webhook_id**  
  
	Webhook's id if the message is from a webhook.  
________________

- <a name="property-webhook"></a>[DiscordWebhook](./class_discordwebhook.md) **webhook**  
  
	Webhook object reference if the message is fro ma webhook.  
________________

- <a name="property-activity"></a>[MessageActivity](./class_messageactivity.md) **activity**  
  
	Webhook object reference if the message is fro ma webhook.  
________________

- <a name="property-application-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **application_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-application"></a>[DiscordApplication](./class_discordapplication.md) **application**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-message-reference"></a>[MessageReference](./class_messagereference.md) **message_reference**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-flags"></a>[BitFlag](./class_bitflag.md) **flags**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-referenced-message-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **referenced_message_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-referenced-message"></a>[Message](./class_message.md) **referenced_message**  
	  
	|          | method                     |
	|----------|----------------------------|
	| *Getter* | get\_referenced\_message() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-interaction"></a>[MessageInteraction](./class_messageinteraction.md) **interaction**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-components"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **components**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-sticker-items"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **sticker_items**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-get-author"></a>[User](./class_user.md) **get\_author** **(**  **)**  
  
	`author` getter.  
________________

- <a name="method-get-referenced-message"></a>[Message](./class_message.md) **get\_referenced\_message** **(**  **)**  
  
	`referenced_message` getter.  
________________

- <a name="method-edit"></a>[Message](./class_message.md) **edit** **(** [MessageEditData](./class_messageeditdata.md) message\_edit **)**  
  
	Edits the message, the messge author must be same bot user.  
________________

- <a name="method-fetch-message"></a>[Message](./class_message.md) **fetch\_message** **(**  **)**  
  
	Fetches the message from Discord API.  
________________

- <a name="method-fetch-referenced-message"></a>[Message](./class_message.md) **fetch\_referenced\_message** **(**  **)**  
  
	Fetches the referenced message if there is any from Discord API.  
________________

- <a name="method-react"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **react** **(** [Emoji](./class_emoji.md) emoji **)**  
  
	Reacts to the message with `emoji`.
	Requires bot to have `ADD_REACTIONS` permission in guild channels.  
________________

- <a name="method-unreact"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **unreact** **(** [Emoji](./class_emoji.md) emoji **)**  
  
	Removes the `emoji` reaction from the message.  
________________

- <a name="method-remove-reaction"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **remove\_reaction** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Emoji](./class_emoji.md) emoji **)**  
  
	Removes a user reactions from the message.
	Requires the bot to have `MANAGE_MESSAGES` permission.  
________________

- <a name="method-fetch-reactions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_reactions** **(** [Emoji](./class_emoji.md) emoji, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=25 **)**  
  
	Fetches the `emoji` reactions from Discord API.
	Requires the bot to have `MANAGE_MESSAGES` permission  
________________

- <a name="method-clear-all-reactions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **clear\_all\_reactions** **(**  **)**  
  
	Removes all reactions from the message.
	Requires the bot to have `MANAGE_MESSAGES` permission  
________________

- <a name="method-clear-emoji-reactions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **clear\_emoji\_reactions** **(** [Emoji](./class_emoji.md) emoji **)**  
  
	Removes all `emoji` reactions from the message.  
________________

- <a name="method-delete"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete** **(**  **)**  
  
	Deletes the message if the author is the same bot user. If the message
	is inside a guild channel, the bot must have `MANAGE_MESSAGES` permission
	to delete other members messages.  
________________

  
