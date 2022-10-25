  
# TextChannel
  
**Inherits:** [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel), [Guild.GuildVoiceText](./class_guild.md#guildvoicetext), [Message](./class_message.md), [PrivateChannel](./class_privatechannel.md)  
  
## Description
  
Represents a channel on Discord that accepts text messages.  
  
## Properties
  
| type                                                              | name                                                 |
|-------------------------------------------------------------------|------------------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [last\_message\_id](#property-last-message-id)       |
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage)     | [last\_message](#property-last-message)              |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [last\_pin\_timestamp](#property-last-pin-timestamp) |  
  
## Methods
  
| return type                                                           | signature                                                                                                                                                                                                                                                                                                             |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage)         | [send\_message](#method-send-message) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) content, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) tts=false, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) embeds=[ ] **)** <u>_coroutine_</u> |
| [MessageCreateAction](./class_messagecreateaction.md)                 | [create\_message](#method-create-message) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) content="" **)**                                                                                                                                                                              |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [fetch\_messages](#method-fetch-messages) **(** [ChannelFetchMessgesParams](./class_channelfetchmessgesparams.md) data=null **)** <u>_coroutine_</u>                                                                                                                                                                  |
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage)         | [fetch\_message](#method-fetch-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>                                                                                                                                                                  |
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage)         | [fetch\_last\_message](#method-fetch-last-message) **(**  **)** <u>_coroutine_</u>                                                                                                                                                                                                                                    |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [delete\_messages](#method-delete-messages) **(** PoolStringArray message\_ids **)** <u>_coroutine_</u>                                                                                                                                                                                                               |
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage)         | [get\_last\_message](#method-get-last-message) **(**  **)**                                                                                                                                                                                                                                                           |  
  
## Property Descriptions
  
- <a name="property-last-message-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **last_message_id**  
  
	The last message id in the channel.  
________________

- 	<a name="property-last-message"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **last_message**  
	  
	|          | method               |
	|----------|----------------------|
	| *Getter* | get\_last\_message() |  
  
	The last message sent in the channel.  
________________

- <a name="property-last-pin-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **last_pin_timestamp**  
  
	Unix time of the last pin of a message in the channel.
  
  
## Method Descriptions
  
- <a name="method-send-message"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **send\_message** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) content, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) tts=false, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) embeds=[ ] **)** <u>_coroutine_</u>  
  
	Sends a message to this channel.
	`embeds` takes a list of `MessageEmbedBuilder`s  
________________

- <a name="method-create-message"></a>[MessageCreateAction](./class_messagecreateaction.md) **create\_message** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) content="" **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-messages"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **fetch\_messages** **(** [ChannelFetchMessgesParams](./class_channelfetchmessgesparams.md) data=null **)** <u>_coroutine_</u>  
  
	Fetches messages sent in this channel.  
________________

- <a name="method-fetch-message"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **fetch\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)** <u>_coroutine_</u>  
  
	Fetches a message sent in this channel.  
________________

- <a name="method-fetch-last-message"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **fetch\_last\_message** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the last sent message in this channel.  
________________

- <a name="method-delete-messages"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_messages** **(** PoolStringArray message\_ids **)** <u>_coroutine_</u>  
  
	Deletes a bulk of messages in this channel.  
________________

- <a name="method-get-last-message"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **get\_last\_message** **(**  **)**  
  
	Gets the last message in this channel from the cache.  
________________

  
  
## Sub Classes
  
________________
  
  
# BaseMessage
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Abstract base class of a message on Discord.  
  
## Properties
  
| type                                                              | name                                |
|-------------------------------------------------------------------|-------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [channel\_id](#property-channel-id) |
| [TextChannel](./class_textchannel.md)                             | [channel](#property-channel)        |  
  
## Methods
  
| return type                           | signature                                        |
|---------------------------------------|--------------------------------------------------|
| [TextChannel](./class_textchannel.md) | [get\_channel](#method-get-channel) **(**  **)** |  
  
## Property Descriptions
  
- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	Channel id of the message.  
________________

- 	<a name="property-channel"></a>[TextChannel](./class_textchannel.md) **channel**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_channel() |  
  
	The channel the message was sent in.
  
  
## Method Descriptions
  
- <a name="method-get-channel"></a>[TextChannel](./class_textchannel.md) **get\_channel** **(**  **)**  
  
	`channel` getter.  
________________

  
