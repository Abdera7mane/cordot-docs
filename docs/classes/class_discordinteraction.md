  
# DiscordInteraction
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [DiscordAutocompleteInteraction](./class_discordautocompleteinteraction.md), [DiscordRepliableInteraction](./class_discordrepliableinteraction.md)  
  
## Description
  
Abstraction of Discord interactions such as Application Commands
and Message Components. An interaction remains valid for **15 minutes**.  
  
## Properties
  
| type                                                                    | name                                          |
|-------------------------------------------------------------------------|-----------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [application\_id](#property-application-id)   |
| [DiscordApplication](./class_discordapplication.md)                     | [application](#property-application)          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [type](#property-type)                        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)               |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)                      |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [channel\_id](#property-channel-id)           |
| [TextChannel](./class_textchannel.md)                                   | [channel](#property-channel)                  |
| [Guild.Member](./class_guild.md#member)                                 | [member](#property-member)                    |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [user\_id](#property-user-id)                 |
| [User](./class_user.md)                                                 | [user](#property-user)                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [token](#property-token)                      |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [version](#property-version)                  |
| [BitFlag](./class_bitflag.md)                                           | [app\_permissions](#property-app-permissions) |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [locale](#property-locale)                    |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [guild\_locale](#property-guild-locale)       |  
  
## Methods
  
| return type                                                         | signature                                                               |
|---------------------------------------------------------------------|-------------------------------------------------------------------------|
| [DiscordApplication](./class_discordapplication.md)                 | [get\_application](#method-get-application) **(**  **)**                |
| [Guild](./class_guild.md)                                           | [get\_guild](#method-get-guild) **(**  **)**                            |
| [TextChannel](./class_textchannel.md)                               | [get\_channel](#method-get-channel) **(**  **)**                        |
| [Guild.Member](./class_guild.md#member)                             | [get\_member](#method-get-member) **(**  **)**                          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [get\_user\_id](#method-get-user-id) **(**  **)**                       |
| [User](./class_user.md)                                             | [get\_user](#method-get-user) **(**  **)**                              |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [is\_command](#method-is-command) **(**  **)**                          |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [is\_autocomplete](#method-is-autocomplete) **(**  **)**                |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [is\_message\_component](#method-is-message-component) **(**  **)**     |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [is\_modal\_submit](#method-is-modal-submit) **(**  **)**               |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [in\_guild](#method-in-guild) **(**  **)**                              |
| [User](./class_user.md)                                             | [fetch\_user](#method-fetch-user) **(**  **)** <u>_coroutine_</u>       |
| [TextChannel](./class_textchannel.md)                               | [fetch\_channel](#method-fetch-channel) **(**  **)** <u>_coroutine_</u> |
| [Guild.Member](./class_guild.md#member)                             | [fetch\_member](#method-fetch-member) **(**  **)** <u>_coroutine_</u>   |
| [Guild](./class_guild.md)                                           | [fetch\_guild](#method-fetch-guild) **(**  **)** <u>_coroutine_</u>     |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Type**  
  
	- **PING** = 1  

	- **APPLICATION\_COMMAND** = 2  

	- **MESSAGE\_COMPONENT** = 3  

	- **AUTOCOMPLETE** = 4  

	- **MODAL\_SUBMIT** = 5  

  
	Interaction types.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Callback**  
  
	- **PONG** = 1  

	- **CHANNEL\_MESSAGE** = 4  

	- **DEFERRED\_CHANNEL\_MESSAGE** = 5  

	- **DEFERRED\_UPDATE\_MESSAGE** = 6  

	- **UPDATE\_MESSAGE** = 7  

	- **AUTOCOMPLETE\_RESULT** = 8  

	- **MODAL** = 9  

  
	Interaction callback types.
  
  
## Property Descriptions
  
- <a name="property-application-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **application_id**  
  
	Id of the Discord application this interaction is for.  
________________

- 	<a name="property-application"></a>[DiscordApplication](./class_discordapplication.md) **application**  
	  
	|          | method             |
	|----------|--------------------|
	| *Getter* | get\_application() |  
  
	Reference to the Discord application.  
________________

- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	Type of interaction.  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	The guild id that the interaction was sent from.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	Reference to the guild that the interaction was sent from.  
________________

- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	The channel id that the interaction was sent from.  
________________

- 	<a name="property-channel"></a>[TextChannel](./class_textchannel.md) **channel**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_channel() |  
  
	Reference to the channel that the interaction was sent from.  
________________

- <a name="property-member"></a>[Guild.Member](./class_guild.md#member) **member**  
  
	Guild member who invoked the interaction if inside a guild.  
________________

- 	<a name="property-user-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **user_id**  
	  
	|          | method          |
	|----------|-----------------|
	| *Getter* | get\_user\_id() |  
  
	User id of who invoked the interaction.  
________________

- 	<a name="property-user"></a>[User](./class_user.md) **user**  
	  
	|          | method      |
	|----------|-------------|
	| *Getter* | get\_user() |  
  
	Reference to the user who invoked the interaction.  
________________

- <a name="property-token"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **token**  
  
	Continuation token for responding to the interaction.  
________________

- <a name="property-version"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **version**  
  
	Discord Interaction API version.  
________________

- <a name="property-app-permissions"></a>[BitFlag](./class_bitflag.md) **app_permissions**  
  
	Set of permissions the app or bot has within the channel the interaction
	was sent from.  
________________

- <a name="property-locale"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **locale**  
  
	Selected language of the invoking user.  
________________

- <a name="property-guild-locale"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **guild_locale**  
  
	Guild's preferred locale, if invoked in a guild.
  
  
## Method Descriptions
  
- <a name="method-get-application"></a>[DiscordApplication](./class_discordapplication.md) **get\_application** **(**  **)**  
  
	`application` getter.  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

- <a name="method-get-channel"></a>[TextChannel](./class_textchannel.md) **get\_channel** **(**  **)**  
  
	`channel` getter.  
________________

- <a name="method-get-member"></a>[Guild.Member](./class_guild.md#member) **get\_member** **(**  **)**  
  
	`member` getter.  
________________

- <a name="method-get-user-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_user\_id** **(**  **)**  
  
	`user_id` getter.  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(**  **)**  
  
	`user` getter.  
________________

- <a name="method-is-command"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_command** **(**  **)**  
  
	Whether this is a `DiscordApplicationCommandInteraction`.  
________________

- <a name="method-is-autocomplete"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_autocomplete** **(**  **)**  
  
	Whether this is a `DiscordAutocompleteInteraction`.  
________________

- <a name="method-is-message-component"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_message\_component** **(**  **)**  
  
	Whether this is a `DiscordMessageComponentInteraction`.  
________________

- <a name="method-is-modal-submit"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_modal\_submit** **(**  **)**  
  
	Whether this is a `DiscordModalSubmit`.  
________________

- <a name="method-in-guild"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **in\_guild** **(**  **)**  
  
	Whether the interaction was invoked in a guild.  
________________

- <a name="method-fetch-user"></a>[User](./class_user.md) **fetch\_user** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the `user`.  
________________

- <a name="method-fetch-channel"></a>[TextChannel](./class_textchannel.md) **fetch\_channel** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the `channel`.  
________________

- <a name="method-fetch-member"></a>[Guild.Member](./class_guild.md#member) **fetch\_member** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the `member` if the interaction was invoked in a guild.  
________________

- <a name="method-fetch-guild"></a>[Guild](./class_guild.md) **fetch\_guild** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the `guild` if the interaction was invoked in a guild.  
________________

  
