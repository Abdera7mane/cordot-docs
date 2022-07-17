  
# TextChannel
  
**Inherits:** [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel), [Message](./class_message.md), [PrivateChannel](./class_privatechannel.md)  
  
## Properties
  
| type                                                              | name                                                 |
|-------------------------------------------------------------------|------------------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [last\_message\_id](#property-last-message-id)       |
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage)     | [last\_message](#property-last-message)              |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [last\_pin\_timestamp](#property-last-pin-timestamp) |  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                                                                          |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [TextChannel](./class_textchannel.md)                                     | [TextChannel](#method-TextChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                                                                                                                |
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage)             | [send\_message](#method-send-message) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) content, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) tts=false, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) embeds=[ ] **)** |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_messages](#method-fetch-messages) **(** [ChannelFetchMessgesParams](./class_channelfetchmessgesparams.md) data=null **)**                                                                                                                                                                  |
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage)             | [fetch\_message](#method-fetch-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**                                                                                                                                                                  |
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage)             | [fetch\_last\_message](#method-fetch-last-message) **(**  **)**                                                                                                                                                                                                                                    |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [delete\_messages](#method-delete-messages) **(** [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) message\_ids **)**                                                                                                                                     |
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage)             | [get\_last\_message](#method-get-last-message) **(**  **)**                                                                                                                                                                                                                                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_class](#method-get-class) **(**  **)**                                                                                                                                                                                                                                                       |  
  
## Property Descriptions
  
- <a name="property-last-message-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **last_message_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-last-message"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **last_message**  
	  
	|          | method               |
	|----------|----------------------|
	| *Getter* | get\_last\_message() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-last-pin-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **last_pin_timestamp**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-TextChannel"></a>[TextChannel](./class_textchannel.md) **TextChannel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-send-message"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **send\_message** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) content, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) tts=false, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) embeds=[ ] **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-messages"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_messages** **(** [ChannelFetchMessgesParams](./class_channelfetchmessgesparams.md) data=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-message"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **fetch\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-last-message"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **fetch\_last\_message** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-messages"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_messages** **(** [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) message\_ids **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-last-message"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **get\_last\_message** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
  
## Sub Classes
  
________________
  
  
# BaseMessage
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                              | name                                |
|-------------------------------------------------------------------|-------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [channel\_id](#property-channel-id) |
| [TextChannel](./class_textchannel.md)                             | [channel](#property-channel)        |  
  
## Methods
  
| return type                                                   | signature                                                                                                                           |
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| [TextChannel.BaseMessage](./class_textchannel.md#basemessage) | [BaseMessage](#method-BaseMessage) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [TextChannel](./class_textchannel.md)                         | [get\_channel](#method-get-channel) **(**  **)**                                                                                    |  
  
## Property Descriptions
  
- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-channel"></a>[TextChannel](./class_textchannel.md) **channel**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_channel() |  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-BaseMessage"></a>[TextChannel.BaseMessage](./class_textchannel.md#basemessage) **BaseMessage** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channel"></a>[TextChannel](./class_textchannel.md) **get\_channel** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
