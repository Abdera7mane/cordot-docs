  
# DiscordInteraction
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                                             |
|-------------------------------------------------------------------------|--------------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [application\_id](#property-application-id)      |
| [DiscordApplication](./class_discordapplication.md)                     | [application](#property-application)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [type](#property-type)                           |
| [DiscordInteractionData](./class_discordinteractiondata.md)             | [data](#property-data)                           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)                  |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)                         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [channel\_id](#property-channel-id)              |
| [TextChannel](./class_textchannel.md)                                   | [channel](#property-channel)                     |
| [Guild.Member](./class_guild.md#member)                                 | [member](#property-member)                       |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [user\_id](#property-user-id)                    |
| [User](./class_user.md)                                                 | [user](#property-user)                           |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [token](#property-token)                         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [version](#property-version)                     |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [message\_id](#property-message-id)              |
| [Message](./class_message.md)                                           | [message](#property-message)                     |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [locale](#property-locale)                       |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [guild\_locale](#property-guild-locale)          |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [replied](#property-replied)                     |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [deferred](#property-deferred)                   |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [last\_followup\_id](#property-last-followup-id) |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [followup\_ids](#property-followup-ids)          |  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                                |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [DiscordInteraction](./class_discordinteraction.md)                       | [DiscordInteraction](#method-DiscordInteraction) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_data **)**                                                                                                      |
| [DiscordApplication](./class_discordapplication.md)                       | [get\_application](#method-get-application) **(**  **)**                                                                                                                                                                                                 |
| [Guild](./class_guild.md)                                                 | [get\_guild](#method-get-guild) **(**  **)**                                                                                                                                                                                                             |
| [TextChannel](./class_textchannel.md)                                     | [get\_channel](#method-get-channel) **(**  **)**                                                                                                                                                                                                         |
| [Guild.Member](./class_guild.md#member)                                   | [get\_member](#method-get-member) **(**  **)**                                                                                                                                                                                                           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [get\_user\_id](#method-get-user-id) **(**  **)**                                                                                                                                                                                                        |
| [User](./class_user.md)                                                   | [get\_user](#method-get-user) **(**  **)**                                                                                                                                                                                                               |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_named\_option\_value](#method-get-named-option-value) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) default=null **)**             |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_named\_string\_option\_value](#method-get-named-string-option-value) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) default="" **)**  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [get\_named\_integer\_option\_value](#method-get-named-integer-option-value) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) default=0 **)**       |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [get\_named\_boolean\_option\_value](#method-get-named-boolean-option-value) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) default=false **)** |
| [User](./class_user.md)                                                   | [get\_named\_user\_option\_value](#method-get-named-user-option-value) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [User](./class_user.md) default=null **)**                                                    |
| [Channel](./class_channel.md)                                             | [get\_named\_channel\_option\_value](#method-get-named-channel-option-value) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Channel](./class_channel.md) default=null **)**                                        |
| [Guild.Role](./class_guild.md#role)                                       | [get\_named\_role\_option\_value](#method-get-named-role-option-value) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Guild.Role](./class_guild.md#role) default=null **)**                                        |
| [MentionableEntity](./class_mentionableentity.md)                         | [get\_named\_mentionable\_option\_value](#method-get-named-mentionable-option-value) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [MentionableEntity](./class_mentionableentity.md) default=null **)**            |
| [float](https://docs.godotengine.org/en/3.5/classes/class_float.html)     | [get\_named\_number\_option\_value](#method-get-named-number-option-value) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) default=NAN **)**   |
| [MessageAttachment](./class_messageattachment.md)                         | [get\_named\_attachment\_option\_value](#method-get-named-attachment-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [MessageAttachment](./class_messageattachment.md) default=null **)**                   |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_option\_name](#method-get-option-name) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index **)**                                                                                                                         |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_option\_value](#method-get-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) default=null **)**                               |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_string\_option\_value](#method-get-string-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) default="" **)**                    |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [get\_integer\_option\_value](#method-get-integer-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) default=0 **)**                         |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [get\_boolean\_option\_value](#method-get-boolean-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) default=false **)**                   |
| [User](./class_user.md)                                                   | [get\_user\_option\_value](#method-get-user-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [User](./class_user.md) default=null **)**                                                                      |
| [Channel](./class_channel.md)                                             | [get\_channel\_option\_value](#method-get-channel-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [Channel](./class_channel.md) default=null **)**                                                          |
| [Guild.Role](./class_guild.md#role)                                       | [get\_role\_option\_value](#method-get-role-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [Guild.Role](./class_guild.md#role) default=null **)**                                                          |
| [MentionableEntity](./class_mentionableentity.md)                         | [get\_mentionable\_option\_value](#method-get-mentionable-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [MentionableEntity](./class_mentionableentity.md) default=null **)**                              |
| [float](https://docs.godotengine.org/en/3.5/classes/class_float.html)     | [get\_number\_option\_value](#method-get-number-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) default=NAN **)**                     |
| [MessageAttachment](./class_messageattachment.md)                         | [get\_attachment\_option\_value](#method-get-attachment-option-value) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [MessageAttachment](./class_messageattachment.md) default=null **)**                                |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [has\_named\_option](#method-has-named-option) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**                                                                                                                  |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [has\_option](#method-has-option) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index **)**                                                                                                                                    |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [is\_command](#method-is-command) **(**  **)**                                                                                                                                                                                                           |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [is\_autocomplete](#method-is-autocomplete) **(**  **)**                                                                                                                                                                                                 |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [in\_guild](#method-in-guild) **(**  **)**                                                                                                                                                                                                               |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [reply](#method-reply) **(** [DiscordInteractionMessage](./class_discordinteractionmessage.md) message\_reply **)**                                                                                                                                      |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [defer\_reply](#method-defer-reply) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) ephemeral=false **)**                                                                                                                      |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [defer\_update](#method-defer-update) **(**  **)**                                                                                                                                                                                                       |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [autocomplete](#method-autocomplete) **(** [ApplicationCommandChoicesBuilder](./class_applicationcommandchoicesbuilder.md) choices **)**                                                                                                                 |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [create\_followup](#method-create-followup) **(** [DiscordInteractionMessage](./class_discordinteractionmessage.md) message\_data **)**                                                                                                                  |
| [Message](./class_message.md)                                             | [fetch\_followup](#method-fetch-followup) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)**                                                                                                                     |
| [Message](./class_message.md)                                             | [edit\_followup](#method-edit-followup) **(** [MessageEditData](./class_messageeditdata.md) message\_edit, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)**                                                          |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_followup](#method-delete-followup) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)**                                                                                                                   |
| [Message](./class_message.md)                                             | [fetch\_response](#method-fetch-response) **(**  **)**                                                                                                                                                                                                   |
| [Message](./class_message.md)                                             | [edit\_response](#method-edit-response) **(** [MessageEditData](./class_messageeditdata.md) message\_edit **)**                                                                                                                                          |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_response](#method-delete-response) **(**  **)**                                                                                                                                                                                                 |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_channel](#method-fetch-channel) **(**  **)**                                                                                                                                                                                                     |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_guild](#method-fetch-guild) **(**  **)**                                                                                                                                                                                                         |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_message](#method-fetch-message) **(**  **)**                                                                                                                                                                                                     |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_class](#method-get-class) **(**  **)**                                                                                                                                                                                                             |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Type**  
  
	- **PING** = 1  

	- **APPLICATION\_COMMAND** = 2  

	- **MESSAGE\_COMPONENT** = 3  

	- **AUTOCOMPLETE** = 4  

	- **MODAL\_SUBMIT** = 5  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Callback**  
  
	- **PONG** = 1  

	- **CHANNEL\_MESSAGE** = 4  

	- **DEFERRED\_CHANNEL\_MESSAGE** = 5  

	- **DEFERRED\_UPDATE\_MESSAGE** = 6  

	- **UPDATE\_MESSAGE** = 7  

	- **AUTOCOMPLETE\_RESULT** = 8  

	- **MODAL** = 9  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-application-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **application_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-application"></a>[DiscordApplication](./class_discordapplication.md) **application**  
	  
	|          | method             |
	|----------|--------------------|
	| *Getter* | get\_application() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-data"></a>[DiscordInteractionData](./class_discordinteractiondata.md) **data**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channel"></a>[TextChannel](./class_textchannel.md) **channel**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-member"></a>[Guild.Member](./class_guild.md#member) **member**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-user-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **user_id**  
	  
	|          | method          |
	|----------|-----------------|
	| *Getter* | get\_user\_id() |  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-user"></a>[User](./class_user.md) **user**  
	  
	|          | method      |
	|----------|-------------|
	| *Getter* | get\_user() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-token"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **token**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-version"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **version**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-message-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **message_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-message"></a>[Message](./class_message.md) **message**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-locale"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **locale**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild-locale"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **guild_locale**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-replied"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **replied**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-deferred"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **deferred**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-last-followup-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **last_followup_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-followup-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **followup_ids**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-DiscordInteraction"></a>[DiscordInteraction](./class_discordinteraction.md) **DiscordInteraction** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-application"></a>[DiscordApplication](./class_discordapplication.md) **get\_application** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channel"></a>[TextChannel](./class_textchannel.md) **get\_channel** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-member"></a>[Guild.Member](./class_guild.md#member) **get\_member** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-user-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_user\_id** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-named-option-value"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_named\_option\_value** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) default=null **)**  
  
	Variant  
________________

- <a name="method-get-named-string-option-value"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_named\_string\_option\_value** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) default="" **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-named-integer-option-value"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_named\_integer\_option\_value** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) default=0 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-named-boolean-option-value"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **get\_named\_boolean\_option\_value** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) default=false **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-named-user-option-value"></a>[User](./class_user.md) **get\_named\_user\_option\_value** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [User](./class_user.md) default=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-named-channel-option-value"></a>[Channel](./class_channel.md) **get\_named\_channel\_option\_value** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Channel](./class_channel.md) default=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-named-role-option-value"></a>[Guild.Role](./class_guild.md#role) **get\_named\_role\_option\_value** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [Guild.Role](./class_guild.md#role) default=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-named-mentionable-option-value"></a>[MentionableEntity](./class_mentionableentity.md) **get\_named\_mentionable\_option\_value** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [MentionableEntity](./class_mentionableentity.md) default=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-named-number-option-value"></a>[float](https://docs.godotengine.org/en/3.5/classes/class_float.html) **get\_named\_number\_option\_value** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) default=NAN **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-named-attachment-option-value"></a>[MessageAttachment](./class_messageattachment.md) **get\_named\_attachment\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [MessageAttachment](./class_messageattachment.md) default=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-option-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_option\_name** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-option-value"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) default=null **)**  
  
	Variant  
________________

- <a name="method-get-string-option-value"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_string\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) default="" **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-integer-option-value"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_integer\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) default=0 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-boolean-option-value"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **get\_boolean\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) default=false **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-user-option-value"></a>[User](./class_user.md) **get\_user\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [User](./class_user.md) default=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channel-option-value"></a>[Channel](./class_channel.md) **get\_channel\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [Channel](./class_channel.md) default=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-role-option-value"></a>[Guild.Role](./class_guild.md#role) **get\_role\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [Guild.Role](./class_guild.md#role) default=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-mentionable-option-value"></a>[MentionableEntity](./class_mentionableentity.md) **get\_mentionable\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [MentionableEntity](./class_mentionableentity.md) default=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-number-option-value"></a>[float](https://docs.godotengine.org/en/3.5/classes/class_float.html) **get\_number\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [float](https://docs.godotengine.org/en/3.5/classes/class_float.html) default=NAN **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-attachment-option-value"></a>[MessageAttachment](./class_messageattachment.md) **get\_attachment\_option\_value** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index, [MessageAttachment](./class_messageattachment.md) default=null **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-has-named-option"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_named\_option** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-has-option"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_option** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) index **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-is-command"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_command** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-is-autocomplete"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_autocomplete** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-in-guild"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **in\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-reply"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **reply** **(** [DiscordInteractionMessage](./class_discordinteractionmessage.md) message\_reply **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-defer-reply"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **defer\_reply** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) ephemeral=false **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-defer-update"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **defer\_update** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-autocomplete"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **autocomplete** **(** [ApplicationCommandChoicesBuilder](./class_applicationcommandchoicesbuilder.md) choices **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-followup"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **create\_followup** **(** [DiscordInteractionMessage](./class_discordinteractionmessage.md) message\_data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-followup"></a>[Message](./class_message.md) **fetch\_followup** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-followup"></a>[Message](./class_message.md) **edit\_followup** **(** [MessageEditData](./class_messageeditdata.md) message\_edit, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-followup"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_followup** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) followup\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-response"></a>[Message](./class_message.md) **fetch\_response** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-response"></a>[Message](./class_message.md) **edit\_response** **(** [MessageEditData](./class_messageeditdata.md) message\_edit **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-response"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_response** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-channel"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_channel** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-guild"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-message"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_message** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
