  
# DiscordClient
  
**Inherits:** [Node](https://docs.godotengine.org/en/3.5/classes/class_node.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                            | name                                              |
|---------------------------------------------------------------------------------|---------------------------------------------------|
| [BaseDiscordEntityManager](./class_basediscordentitymanager.md)                 | [entity\_manager](#property-entity-manager)       |
| [DiscordRESTAdapter](./class_discordrestadapter.md)                             | [rest](#property-rest)                            |
| [DiscordWebSocketAdapter](./class_discordwebsocketadapter.md)                   | [gateway\_websocket](#property-gateway-websocket) |
| [VoiceWebSocketAdapter](./class_voicewebsocketadapter.md)                       | [voice\_websocket](#property-voice-websocket)     |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [commands\_map](#property-commands-map)           |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)             | [use\_http\_pool](#property-use-http-pool)        |  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                                           |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [DiscordClient](./class_discordclient.md)                                 | [DiscordClient](#method-DiscordClient) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) intents **)**                                                         |
| void                                                                      | [login](#method-login) **(**  **)**                                                                                                                                                                                                                                 |
| void                                                                      | [logout](#method-logout) **(**  **)**                                                                                                                                                                                                                               |
| void                                                                      | [update\_presence](#method-update-presence) **(** [PresenceUpdate](./class_presenceupdate.md) presence **)**                                                                                                                                                        |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [is\_client\_connected](#method-is-client-connected) **(**  **)**                                                                                                                                                                                                   |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_token](#method-get-token) **(**  **)**                                                                                                                                                                                                                        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [get\_intents](#method-get-intents) **(**  **)**                                                                                                                                                                                                                    |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [get\_ping](#method-get-ping) **(**  **)**                                                                                                                                                                                                                          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [get\_uptime\_ms](#method-get-uptime-ms) **(**  **)**                                                                                                                                                                                                               |
| [User](./class_user.md)                                                   | [get\_self](#method-get-self) **(**  **)**                                                                                                                                                                                                                          |
| [User](./class_user.md)                                                   | [get\_user](#method-get-user) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                                      |
| [Presence](./class_presence.md)                                           | [get\_presence](#method-get-presence) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                              |
| [Guild](./class_guild.md)                                                 | [get\_guild](#method-get-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                                    |
| [Channel](./class_channel.md)                                             | [get\_channel](#method-get-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                                |
| [DiscordApplication](./class_discordapplication.md)                       | [get\_application](#method-get-application) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                        |
| [DiscordApplication](./class_discordapplication.md)                       | [get\_client\_application](#method-get-client-application) **(**  **)**                                                                                                                                                                                             |
| [DiscordTeam](./class_discordteam.md)                                     | [get\_team](#method-get-team) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                                      |
| void                                                                      | [register\_application\_command\_executor](#method-register-application-command-executor) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) command, [ApplicationCommandExecutor](./class_applicationcommandexecutor.md) executor **)** |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [register\_application\_command](#method-register-application-command) **(** [ApplicationCommandBuilder](./class_applicationcommandbuilder.md) builder, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id=0 **)**                         |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_class](#method-get-class) **(**  **)**                                                                                                                                                                                                                        |  
  
## Signals
  
- <a name="signal-connected"></a>**connected** **(**  **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-reconnected"></a>**reconnected** **(**  **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-resumed"></a>**resumed** **(**  **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-connection-error"></a>**connection\_error** **(** error **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-disconnected"></a>**disconnected** **(**  **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-raw-event"></a>**raw\_event** **(** event, payload **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-client-ready"></a>**client\_ready** **(** user **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-channel-created"></a>**channel\_created** **(** guild, channel **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-channel-updated"></a>**channel\_updated** **(** guild, old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-channel-deleted"></a>**channel\_deleted** **(** guild, channel **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-channel-pins-updated"></a>**channel\_pins\_updated** **(** channel, last_pin **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-thread-created"></a>**thread\_created** **(** guild, thread **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-thread-updated"></a>**thread\_updated** **(** guild, old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-thread-deleted"></a>**thread\_deleted** **(** guild, thread **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-thread-list-sync"></a>**thread\_list\_sync** **(**  **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-thread-member-updated"></a>**thread\_member\_updated** **(** thread **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-thread-members-updated"></a>**thread\_members\_updated** **(** thread **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-typing-started"></a>**typing\_started** **(** channel, user, timestamp **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-available"></a>**guild\_available** **(** guild **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-unavailable"></a>**guild\_unavailable** **(** guild **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-created"></a>**guild\_created** **(** guild **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-updated"></a>**guild\_updated** **(** old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-deleted"></a>**guild\_deleted** **(** guild **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-ban-added"></a>**guild\_ban\_added** **(** guild, user **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-ban-removed"></a>**guild\_ban\_removed** **(** guild, user **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-emojis-updated"></a>**guild\_emojis\_updated** **(** guild, emojis **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-integrations-updated"></a>**guild\_integrations\_updated** **(** guild, integration **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-role-created"></a>**guild\_role\_created** **(** guild, role **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-role-updated"></a>**guild\_role\_updated** **(** guild, old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-guild-role-deleted"></a>**guild\_role\_deleted** **(** guild, role **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-integration-created"></a>**integration\_created** **(** integration **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-integration-updated"></a>**integration\_updated** **(** old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-integration-deleted"></a>**integration\_deleted** **(** integration **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-interaction-created"></a>**interaction\_created** **(** interaction **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-invite-created"></a>**invite\_created** **(** invite **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-invite-deleted"></a>**invite\_deleted** **(** invite **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-member-joined"></a>**member\_joined** **(** guild, member **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-member-left"></a>**member\_left** **(** guild, member **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-member-updated"></a>**member\_updated** **(** guild, old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-message-sent"></a>**message\_sent** **(** message **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-message-updated"></a>**message\_updated** **(** old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-message-deleted"></a>**message\_deleted** **(** message **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-message-bulk-deleted"></a>**message\_bulk\_deleted** **(** messages, channel **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-presence-updated"></a>**presence\_updated** **(** presence **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-stage-instance-created"></a>**stage\_instance\_created** **(** channel, instance **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-stage-instance-deleted"></a>**stage\_instance\_deleted** **(** channel, instance **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-stage-instance-updated"></a>**stage\_instance\_updated** **(** channel, old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-user-updated"></a>**user\_updated** **(** old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-reaction-added"></a>**reaction\_added** **(** message, user, reaction **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-reaction-removed"></a>**reaction\_removed** **(** message, user, reaction **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-reactions-cleared"></a>**reactions\_cleared** **(** message, reactions **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-reactions-cleared-emoji"></a>**reactions\_cleared\_emoji** **(** message, reaction **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-voice-state-updated"></a>**voice\_state\_updated** **(** old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-voice-server-updated"></a>**voice\_server\_updated** **(** old, new **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-webhooks-updated"></a>**webhooks\_updated** **(** old, new **)**  
  
	> *There is currently no description for this signal.*
  
  
## Constants
  
- <a name="constant-ERR-WEBSOCKET"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **ERR\_WEBSOCKET** = 49  
  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-entity-manager"></a>[BaseDiscordEntityManager](./class_basediscordentitymanager.md) **entity_manager**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-rest"></a>[DiscordRESTAdapter](./class_discordrestadapter.md) **rest**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-gateway-websocket"></a>[DiscordWebSocketAdapter](./class_discordwebsocketadapter.md) **gateway_websocket**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-voice-websocket"></a>[VoiceWebSocketAdapter](./class_voicewebsocketadapter.md) **voice_websocket**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-commands-map"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **commands_map**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-use-http-pool"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **use_http_pool**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-DiscordClient"></a>[DiscordClient](./class_discordclient.md) **DiscordClient** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) intents **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-login"></a>void **login** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-logout"></a>void **logout** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-update-presence"></a>void **update\_presence** **(** [PresenceUpdate](./class_presenceupdate.md) presence **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-is-client-connected"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_client\_connected** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-token"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_token** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-intents"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_intents** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-ping"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_ping** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-uptime-ms"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_uptime\_ms** **(**  **)**  
  
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

- <a name="method-get-application"></a>[DiscordApplication](./class_discordapplication.md) **get\_application** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-client-application"></a>[DiscordApplication](./class_discordapplication.md) **get\_client\_application** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-team"></a>[DiscordTeam](./class_discordteam.md) **get\_team** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-register-application-command-executor"></a>void **register\_application\_command\_executor** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) command, [ApplicationCommandExecutor](./class_applicationcommandexecutor.md) executor **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-register-application-command"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **register\_application\_command** **(** [ApplicationCommandBuilder](./class_applicationcommandbuilder.md) builder, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id=0 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
