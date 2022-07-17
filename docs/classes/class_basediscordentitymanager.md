  
# BaseDiscordEntityManager
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [DiscordEntityManager](./class_discordentitymanager.md)  
  
## Properties
  
| type                                                                            | name                                                  | default |
|---------------------------------------------------------------------------------|-------------------------------------------------------|---------|
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [container](#property-container)                      |         |
| [BaseDiscordApplicationManager](./class_basediscordapplicationmanager.md)       | [application\_manager](#property-application-manager) |         |
| [BaseChannelManager](./class_basechannelmanager.md)                             | [channel\_manager](#property-channel-manager)         |         |
| [BaseEmojiManager](./class_baseemojimanager.md)                                 | [emoji\_manager](#property-emoji-manager)             |         |
| [BaseGuildManager](./class_baseguildmanager.md)                                 | [guild\_manager](#property-guild-manager)             |         |
| [BaseDiscordInteractionManager](./class_basediscordinteractionmanager.md)       | [interaction\_manager](#property-interaction-manager) |         |
| [BaseMessageManager](./class_basemessagemanager.md)                             | [message\_manager](#property-message-manager)         |         |
| [BaseUserManager](./class_baseusermanager.md)                                   | [user\_manager](#property-user-manager)               |         |
| [DiscordRESTMediator](./class_discordrestmediator.md)                           | [rest\_mediator](#property-rest-mediator)             |         |
| [BitFlag](./class_bitflag.md)                                                   | [cache\_flags](#property-cache-flags)                 |         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [max\_messages](#property-max-messages)               | `1000`  |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                                                                                                                                    |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| void                                                                    | [cache\_flags\_from\_intents](#method-cache-flags-from-intents) **(** [BitFlag](./class_bitflag.md) intents **)**                                                                                                                                            |
| void                                                                    | [reset](#method-reset) **(**  **)**                                                                                                                                                                                                                          |
| [Channel](./class_channel.md)                                           | [get\_or\_construct\_channel](#method-get-or-construct-channel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=true **)**             |
| [Emoji](./class_emoji.md)                                               | [get\_or\_construct\_emoji](#method-get-or-construct-emoji) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                                                 |
| [Guild](./class_guild.md)                                               | [get\_or\_construct\_guild](#method-get-or-construct-guild) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=true **)**                 |
| [DiscordTeam.Member](./class_discordteam.md#member)                     | [get\_or\_construct\_guild\_member](#method-get-or-construct-guild-member) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=false **)** |
| [Message](./class_message.md)                                           | [get\_or\_construct\_message](#method-get-or-construct-message) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=false **)**            |
| [User](./class_user.md)                                                 | [get\_or\_construct\_user](#method-get-or-construct-user) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=true **)**                   |
| [Presence](./class_presence.md)                                         | [get\_or\_construct\_presence](#method-get-or-construct-presence) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=false **)**          |
| [Guild.VoiceState](./class_guild.md#voicestate)                         | [get\_or\_construct\_voice\_state](#method-get-or-construct-voice-state) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                                    |
| [User](./class_user.md)                                                 | [get\_self](#method-get-self) **(**  **)**                                                                                                                                                                                                                   |
| [User](./class_user.md)                                                 | [get\_user](#method-get-user) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                               |
| [Presence](./class_presence.md)                                         | [get\_presence](#method-get-presence) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                       |
| [Guild](./class_guild.md)                                               | [get\_guild](#method-get-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                             |
| [Channel](./class_channel.md)                                           | [get\_channel](#method-get-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                         |
| [Message](./class_message.md)                                           | [get\_message](#method-get-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                         |
| [DiscordApplication](./class_discordapplication.md)                     | [get\_application](#method-get-application) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                 |
| [DiscordTeam](./class_discordteam.md)                                   | [get\_team](#method-get-team) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                               |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_users](#method-get-users) **(**  **)**                                                                                                                                                                                                                 |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_presences](#method-get-presences) **(**  **)**                                                                                                                                                                                                         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_guilds](#method-get-guilds) **(**  **)**                                                                                                                                                                                                               |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_channels](#method-get-channels) **(**  **)**                                                                                                                                                                                                           |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_messages](#method-get-messages) **(**  **)**                                                                                                                                                                                                           |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_applications](#method-get-applications) **(**  **)**                                                                                                                                                                                                   |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_teams](#method-get-teams) **(**  **)**                                                                                                                                                                                                                 |
| void                                                                    | [put\_user](#method-put-user) **(** [User](./class_user.md) user **)**                                                                                                                                                                                       |
| void                                                                    | [put\_guild](#method-put-guild) **(** [Guild](./class_guild.md) guild **)**                                                                                                                                                                                  |
| void                                                                    | [put\_channel](#method-put-channel) **(** [Channel](./class_channel.md) channel **)**                                                                                                                                                                        |
| void                                                                    | [put\_pesence](#method-put-pesence) **(** [Presence](./class_presence.md) presence **)**                                                                                                                                                                     |
| void                                                                    | [put\_message](#method-put-message) **(** [Message](./class_message.md) message **)**                                                                                                                                                                        |
| void                                                                    | [remove\_user](#method-remove-user) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                         |
| void                                                                    | [remove\_guild](#method-remove-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                       |
| void                                                                    | [remove\_channel](#method-remove-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                   |
| void                                                                    | [remove\_pesence](#method-remove-pesence) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                   |
| void                                                                    | [remove\_message](#method-remove-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                   |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                                                                                                                                 |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **CacheFlags**  
  
	- **GUILD\_MEMBERS** = 1  

	- **MESSAGES** = 2  

	- **PRESENCES** = 4  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-container"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **container**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-application-manager"></a>[BaseDiscordApplicationManager](./class_basediscordapplicationmanager.md) **application_manager**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channel-manager"></a>[BaseChannelManager](./class_basechannelmanager.md) **channel_manager**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-emoji-manager"></a>[BaseEmojiManager](./class_baseemojimanager.md) **emoji_manager**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild-manager"></a>[BaseGuildManager](./class_baseguildmanager.md) **guild_manager**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-interaction-manager"></a>[BaseDiscordInteractionManager](./class_basediscordinteractionmanager.md) **interaction_manager**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-message-manager"></a>[BaseMessageManager](./class_basemessagemanager.md) **message_manager**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-user-manager"></a>[BaseUserManager](./class_baseusermanager.md) **user_manager**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-rest-mediator"></a>[DiscordRESTMediator](./class_discordrestmediator.md) **rest_mediator**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-cache-flags"></a>[BitFlag](./class_bitflag.md) **cache_flags**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-max-messages"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **max_messages**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-cache-flags-from-intents"></a>void **cache\_flags\_from\_intents** **(** [BitFlag](./class_bitflag.md) intents **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-reset"></a>void **reset** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-or-construct-channel"></a>[Channel](./class_channel.md) **get\_or\_construct\_channel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=true **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-or-construct-emoji"></a>[Emoji](./class_emoji.md) **get\_or\_construct\_emoji** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-or-construct-guild"></a>[Guild](./class_guild.md) **get\_or\_construct\_guild** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=true **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-or-construct-guild-member"></a>[DiscordTeam.Member](./class_discordteam.md#member) **get\_or\_construct\_guild\_member** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=false **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-or-construct-message"></a>[Message](./class_message.md) **get\_or\_construct\_message** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=false **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-or-construct-user"></a>[User](./class_user.md) **get\_or\_construct\_user** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=true **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-or-construct-presence"></a>[Presence](./class_presence.md) **get\_or\_construct\_presence** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) cache=false **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-or-construct-voice-state"></a>[Guild.VoiceState](./class_guild.md#voicestate) **get\_or\_construct\_voice\_state** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-self"></a>[User](./class_user.md) **get\_self** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-presence"></a>[Presence](./class_presence.md) **get\_presence** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channel"></a>[Channel](./class_channel.md) **get\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-message"></a>[Message](./class_message.md) **get\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-application"></a>[DiscordApplication](./class_discordapplication.md) **get\_application** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-team"></a>[DiscordTeam](./class_discordteam.md) **get\_team** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-users"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_users** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-presences"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_presences** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guilds"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_guilds** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channels"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_channels** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-messages"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_messages** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-applications"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_applications** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-teams"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_teams** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-put-user"></a>void **put\_user** **(** [User](./class_user.md) user **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-put-guild"></a>void **put\_guild** **(** [Guild](./class_guild.md) guild **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-put-channel"></a>void **put\_channel** **(** [Channel](./class_channel.md) channel **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-put-pesence"></a>void **put\_pesence** **(** [Presence](./class_presence.md) presence **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-put-message"></a>void **put\_message** **(** [Message](./class_message.md) message **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-remove-user"></a>void **remove\_user** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-remove-guild"></a>void **remove\_guild** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-remove-channel"></a>void **remove\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-remove-pesence"></a>void **remove\_pesence** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-remove-message"></a>void **remove\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
