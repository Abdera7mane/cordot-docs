  
# DiscordClient
  
**Inherits:** [Node](https://docs.godotengine.org/en/3.5/classes/class_node.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
The facade of the Discord API, used to login to bot accounts.  
  
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
  
| return type                                                             | signature                                                                                                                                                                                                                                                           |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [DiscordClient](./class_discordclient.md)                               | [DiscordClient](#method-DiscordClient) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) intents **)**                                                         |
| void                                                                    | [login](#method-login) **(**  **)**                                                                                                                                                                                                                                 |
| void                                                                    | [logout](#method-logout) **(**  **)**                                                                                                                                                                                                                               |
| void                                                                    | [update\_presence](#method-update-presence) **(** [PresenceUpdate](./class_presenceupdate.md) presence **)**                                                                                                                                                        |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_client\_connected](#method-is-client-connected) **(**  **)**                                                                                                                                                                                                   |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_token](#method-get-token) **(**  **)**                                                                                                                                                                                                                        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [get\_intents](#method-get-intents) **(**  **)**                                                                                                                                                                                                                    |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [get\_ping](#method-get-ping) **(**  **)**                                                                                                                                                                                                                          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [get\_uptime\_ms](#method-get-uptime-ms) **(**  **)**                                                                                                                                                                                                               |
| [User](./class_user.md)                                                 | [get\_self](#method-get-self) **(**  **)**                                                                                                                                                                                                                          |
| [User](./class_user.md)                                                 | [get\_user](#method-get-user) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                                      |
| [Presence](./class_presence.md)                                         | [get\_presence](#method-get-presence) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                              |
| [Guild](./class_guild.md)                                               | [get\_guild](#method-get-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                                    |
| [Channel](./class_channel.md)                                           | [get\_channel](#method-get-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                                |
| [DiscordApplication](./class_discordapplication.md)                     | [get\_application](#method-get-application) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                        |
| [DiscordApplication](./class_discordapplication.md)                     | [get\_client\_application](#method-get-client-application) **(**  **)**                                                                                                                                                                                             |
| [DiscordTeam](./class_discordteam.md)                                   | [get\_team](#method-get-team) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                                                                                                                                      |
| void                                                                    | [register\_application\_command\_executor](#method-register-application-command-executor) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) command, [ApplicationCommandExecutor](./class_applicationcommandexecutor.md) executor **)** |
| [DiscordApplicationCommand](./class_discordapplicationcommand.md)       | [register\_application\_command](#method-register-application-command) **(** [ApplicationCommandBuilder](./class_applicationcommandbuilder.md) builder, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id=0 **)** <u>_coroutine_</u>      |  
  
## Signals
  
- <a name="signal-connected"></a>**connected** **(**  **)**  
  
	Emitted when the client connect to Discord's gateway websocket server.
	To know if the bot is ready refer to `client_ready` signal  
________________

- <a name="signal-reconnected"></a>**reconnected** **(**  **)**  
  
	Emitted when the client reconnects to Discord's gateway websocket server.
	The client may attempt to reconnect when it looses connection to the server
	or when Discord requests a reconnection.  
________________

- <a name="signal-resumed"></a>**resumed** **(**  **)**  
  
	Emitted when the client resumed the session after reconecting (check `reconnected` signal).  
________________

- <a name="signal-connection-error"></a>**connection\_error** **(** error **)**  
  
	Emitted when the client fails to connect.

	- `int error`: Error code.  
________________

- <a name="signal-disconnected"></a>**disconnected** **(**  **)**  
  
	Emitted when the client disconnects from Discord's gateway websocket server.  
________________

- <a name="signal-raw-event"></a>**raw\_event** **(** event, payload **)**  
  
	Emitted when the client receives a Discord event dispatch and before it gets
	processed internally.
	<https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events>

	- `String event`: Event name.
	- `Dictionary payload`: Event data.  
________________

- <a name="signal-client-ready"></a>**client\_ready** **(** user **)**  
  
	Emitted when the client is connected and ready to interact with Discord API

	- `User user`: The connected bot's `User` object.  
________________

- <a name="signal-channel-created"></a>**channel\_created** **(** guild, channel **)**  
  
	Emitted when a guild channel is created.

	- `Guild guild`: The guild in which the channel was created.
	- `Channel channel`: The created channel.  
________________

- <a name="signal-channel-updated"></a>**channel\_updated** **(** guild, old, new **)**  
  
	Emitted when a guild channel is updated.

	- `Guild guild`: The guild in which the channel was updated.
	- `Channel old`: A copy of the channel before the update.
	- `Channel new`: The updated channel.  
________________

- <a name="signal-channel-deleted"></a>**channel\_deleted** **(** guild, channel **)**  
  
	Emitted when a guild channel is deleted.

	- `Guild guild`: The guild in which the channel was deleted.
	- `Channel channel`: The deleted channel.  
________________

- <a name="signal-channel-pins-updated"></a>**channel\_pins\_updated** **(** channel, last_pin **)**  
  
	Emitted when a message is pinned or unpinned in a text channel.

	- `TextChannel channel`: The channel in which the pins were updated.
	- `int last_pin`: unix time (in seconds) of the last recent pin.  
________________

- <a name="signal-thread-created"></a>**thread\_created** **(** guild, thread **)**  
  
	Emitted when a thread is created.

	- `Guild guild`: The guild in which the thread was created.
	- `Guild.ThreadChannel thread`: The created thread.  
________________

- <a name="signal-thread-updated"></a>**thread\_updated** **(** guild, old, new **)**  
  
	Emitted when a thread is updated.

	- `Guild guild`: The guild in which the thread was updated.
	- `Guild.ThreadChannel thread`: The updated thread.  
________________

- <a name="signal-thread-deleted"></a>**thread\_deleted** **(** guild, thread **)**  
  
	Emitted when a thread is updated.

	- `Guild guild`: The guild in which the thread was deleted.
	- `Guild.ThreadChannel thread`: The deleted thread.  
________________

- <a name="signal-thread-list-sync"></a>**thread\_list\_sync** **(**  **)**  
  
	Not implemented  
________________

- <a name="signal-thread-member-updated"></a>**thread\_member\_updated** **(**  **)**  
  
	Not implemented  
________________

- <a name="signal-thread-members-updated"></a>**thread\_members\_updated** **(** thread **)**  
  
	Not implemented  
________________

- <a name="signal-typing-started"></a>**typing\_started** **(** channel, user, timestamp **)**  
  
	Emitted when a thread is updated.

	- `Guild guild`: The guild in which the thread was deleted.
	- `Guild.ThreadChannel thread`: The deleted thread.
	Emitted when a user starts typing in a channel

	- `TextChannel channel`: The channel in which the thread was deleted.
	- `User user`: The user who started typing.
	- `int timestamp`: The unix time (in seconds) of when the user started typing.  
________________

- <a name="signal-guild-available"></a>**guild\_available** **(** guild **)**  
  
	Emitted when a guild becomes available again to the client.

	- `Guild guild`: The guild object.  
________________

- <a name="signal-guild-unavailable"></a>**guild\_unavailable** **(** guild **)**  
  
	Emitted when a guild becomes unavailable due to an outage.

	- `Guild guild`: The guild object.  
________________

- <a name="signal-guild-created"></a>**guild\_created** **(** guild **)**  
  
	Emitted when the current user joins a new Guild.

	- `Guild guild`: The joined guild.  
________________

- <a name="signal-guild-updated"></a>**guild\_updated** **(** old, new **)**  
  
	Emitted when a guild is updated.

	- `Guild old`: A copy of the guild before the update.
	- `Guild new`: The updated guild.  
________________

- <a name="signal-guild-deleted"></a>**guild\_deleted** **(** guild **)**  
  
	Emitted when the user leaves or is removed from a guild.

	- `Guild guild`: The deleted guild.  
________________

- <a name="signal-guild-ban-added"></a>**guild\_ban\_added** **(** guild, user **)**  
  
	Emitted when a user is banned from a guild.

	- `Guild guild`: The guild in which the user was banned.
	- `User user`: The banned user.  
________________

- <a name="signal-guild-ban-removed"></a>**guild\_ban\_removed** **(** guild, user **)**  
  
	Emitted when a user is unbanned from a guild.

	- `Guild guild`: The guild in which the user was unbanned.
	- `User user`: The unbanned user.  
________________

- <a name="signal-guild-emojis-updated"></a>**guild\_emojis\_updated** **(** guild, emojis **)**  
  
	Emitted when a guild's emojis have been updated.

	- `Guild guild`: The guild in which the emojis have been updated.
	- `Array emojis`: List of `Emoji` objects.  
________________

- <a name="signal-guild-role-created"></a>**guild\_role\_created** **(** guild, role **)**  
  
	Emitted when a guild role is created.

	- `Guild guild`: The guild in which the role was created.
	- `Guild.Role role`: The created role.  
________________

- <a name="signal-guild-role-updated"></a>**guild\_role\_updated** **(** guild, old, new **)**  
  
	Emitted when a guild role is updated.

	- `Guild guild`: The guild in which the role was updated.
	- `Guild.Role old`: A copy of the role before the update.
	- `Guild.Role new`: The updated role.  
________________

- <a name="signal-guild-role-deleted"></a>**guild\_role\_deleted** **(** guild, role **)**  
  
	Emitted when a guild role is deleted.

	- `Guild guild`: The guild in which the role was deleted.
	- `Guild.Role role`: The deleted role.  
________________

- <a name="signal-guild-integrations-updated"></a>**guild\_integrations\_updated** **(** guild, integration **)**  
  
	Not implemented  
________________

- <a name="signal-integration-created"></a>**integration\_created** **(** integration **)**  
  
	Not implemented  
________________

- <a name="signal-integration-updated"></a>**integration\_updated** **(** old, new **)**  
  
	Not implemented  
________________

- <a name="signal-integration-deleted"></a>**integration\_deleted** **(** integration **)**  
  
	Not implemented  
________________

- <a name="signal-interaction-created"></a>**interaction\_created** **(** interaction **)**  
  
	Not implemented  
________________

- <a name="signal-invite-created"></a>**invite\_created** **(** invite **)**  
  
	Not implemented  
________________

- <a name="signal-invite-deleted"></a>**invite\_deleted** **(** invite **)**  
  
	Not implemented  
________________

- <a name="signal-member-joined"></a>**member\_joined** **(** guild, member **)**  
  
	Emitted when a new user joins a guild.

	- `Guild guild`: The guild which the user joined.
	- `Guild.Member member`: The user who joined the guild.  
________________

- <a name="signal-member-left"></a>**member\_left** **(** guild, user **)**  
  
	Emitted when a user is removed from a guild (leave/kick/ban).

	- `Guild guild`: The guild in which the user was removed.
	- `User user`: The the removed user.  
________________

- <a name="signal-member-updated"></a>**member\_updated** **(** guild, old, new **)**  
  
	Emitted when a guild member is updated and the member is found in the internal cache.

	- `Guild guild`: The guild in which the member was updated.
	- `Guild.Member old`: A copy of the member before the update.
	- `Guild.Member new`: The updated member.  
________________

- <a name="signal-message-sent"></a>**message\_sent** **(** message **)**  
  
	Emitted when a message is created.

	- `Message message`: The created message.  
________________

- <a name="signal-message-updated"></a>**message\_updated** **(** old, new **)**  
  
	Emitted when a message is updated and found in the internal cache

	- `Message old`: A copy of the message before the update.
	- `Message new`: The updated message.  
________________

- <a name="signal-message-deleted"></a>**message\_deleted** **(** message **)**  
  
	Emitted when a message is updated.

	- `Message old`: A copy of the message before the update.
	- `Message new`: The updated message.  
________________

- <a name="signal-message-bulk-deleted"></a>**message\_bulk\_deleted** **(** messages, channel **)**  
  
	Emitted when multiple messages are deleted at once.
	and at least one of the messages were found in the internal cache

	- `Array messages`: List of `Message` objects of the deleted messages.
	- `TextChannel channel`: The channel in which the messages were deleted.  
________________

- <a name="signal-presence-updated"></a>**presence\_updated** **(** presence **)**  
  
	Emitted when a user's presence or info, such as name or avatar, is updated.

	- `Presence presence`: The presence object.  
________________

- <a name="signal-stage-instance-created"></a>**stage\_instance\_created** **(** channel, instance **)**  
  
	Not implemented  
________________

- <a name="signal-stage-instance-deleted"></a>**stage\_instance\_deleted** **(** channel, instance **)**  
  
	Not implemented  
________________

- <a name="signal-stage-instance-updated"></a>**stage\_instance\_updated** **(** channel, old, new **)**  
  
	Not implemented  
________________

- <a name="signal-user-updated"></a>**user\_updated** **(** old, new **)**  
  
	Not implemented  
________________

- <a name="signal-reaction-added"></a>**reaction\_added** **(** message, user, reaction **)**  
  
	Emitted when a user adds a reaction to a message and found in the internal cache.

	- `Message message`: The message in which the reaction was added.
	- `User user`: The user who reacted to the message.
	- `MessageReaction reaction`: The added reaction.  
________________

- <a name="signal-reaction-removed"></a>**reaction\_removed** **(** message, user, reaction **)**  
  
	Emitted when a user removes a reaction from a message and found in the internal cache.

	- `Message message`: The message in which the reaction was removed.
	- `User user`: The user who removed the reaction from the message.
	- `MessageReaction reaction`: The removed reaction.  
________________

- <a name="signal-reactions-cleared"></a>**reactions\_cleared** **(** message, reactions **)**  
  
	Emitted when a user explicitly removes all reactions from a message.

	- `Message message`: The message in which the reactions were removed.
	- `Array reaction`: List of `MessageReaction` objects of the removed reactions.  
________________

- <a name="signal-reactions-cleared-emoji"></a>**reactions\_cleared\_emoji** **(** message, reaction **)**  
  
	Emitted when a bot removes all instances of a given emoji from the reactions of a message.

	- `Message message`: The message in which the reactions were removed.
	- `Array reaction`: List of `MessageReaction` objects of the removed reactions.  
________________

- <a name="signal-voice-state-updated"></a>**voice\_state\_updated** **(** previous, current **)**  
  
	Emitted when someone joins/leaves/moves voice channels.

	- `Guild.VoiceState previous`: The previous voice state of the user.
	- `Guild.VoiceState current`: The current voice state of the user.  
________________

- <a name="signal-voice-server-updated"></a>**voice\_server\_updated** **(** old, new **)**  
  
	Not implemented  
________________

- <a name="signal-webhooks-updated"></a>**webhooks\_updated** **(** old, new **)**  
  
	Not implemented
  
  
## Constants
  
- <a name="constant-ERR-WEBSOCKET"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **ERR\_WEBSOCKET** = 49  
  
	Generic webscoket error.
  
  
## Property Descriptions
  
- <a name="property-entity-manager"></a>[BaseDiscordEntityManager](./class_basediscordentitymanager.md) **entity_manager**  
  
	The entity manager instance associated this client.  
________________

- <a name="property-rest"></a>[DiscordRESTAdapter](./class_discordrestadapter.md) **rest**  
  
	The REST client instance associated this client.  
________________

- <a name="property-gateway-websocket"></a>[DiscordWebSocketAdapter](./class_discordwebsocketadapter.md) **gateway_websocket**  
  
	The REST client instance associated this client.  
________________

- <a name="property-voice-websocket"></a>[VoiceWebSocketAdapter](./class_voicewebsocketadapter.md) **voice_websocket**  
  
	Unused, might be removed in the future.  
________________

- <a name="property-commands-map"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **commands_map**  
  
	A dictionary holding registered application/text commands.
	Should not be modified directly.  
________________

- <a name="property-use-http-pool"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **use_http_pool**  
  
	If `true`, the REST client will use an HTTP connection pool to send requests.
	Must be set before calling `login()`. This is an **unstable experimental** feature,
	it is highly recommended to leave it off, might be removed in the future.
  
  
## Method Descriptions
  
- <a name="method-DiscordClient"></a>[DiscordClient](./class_discordclient.md) **DiscordClient** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) intents **)**  
  
	Constructs a new DiscordClient with a bot `token`.
	The`intents` parameter is used to specify the group of events to be notified about.  
________________

- <a name="method-login"></a>void **login** **(**  **)**  
  
	Connects to Discord's gateway and identify as a bot account.
	The node has to be inside a SceneTree or the method will fail.  
________________

- <a name="method-logout"></a>void **logout** **(**  **)**  
  
	Disconnects from Discord's gateway if already connected.  
________________

- <a name="method-update-presence"></a>void **update\_presence** **(** [PresenceUpdate](./class_presenceupdate.md) presence **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-is-client-connected"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_client\_connected** **(**  **)**  
  
	Whether this client instance is in an active connection  
________________

- <a name="method-get-token"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_token** **(**  **)**  
  
	Gets the associated token.  
________________

- <a name="method-get-intents"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_intents** **(**  **)**  
  
	Gets the associated intents flags.  
________________

- <a name="method-get-ping"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_ping** **(**  **)**  
  
	Gets the gateway server latency in milliseconds.  
________________

- <a name="method-get-uptime-ms"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_uptime\_ms** **(**  **)**  
  
	Gets the client uptime in milliseconds.  
________________

- <a name="method-get-self"></a>[User](./class_user.md) **get\_self** **(**  **)**  
  
	Gets the user object of the current connected bot account.  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Gets a user by `id`.  
________________

- <a name="method-get-presence"></a>[Presence](./class_presence.md) **get\_presence** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Gets a user's presence by `id`.  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Gets a guild by `id`.  
________________

- <a name="method-get-channel"></a>[Channel](./class_channel.md) **get\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Gets a channel by `id`.  
________________

- <a name="method-get-application"></a>[DiscordApplication](./class_discordapplication.md) **get\_application** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Gets an application by `id`.  
________________

- <a name="method-get-client-application"></a>[DiscordApplication](./class_discordapplication.md) **get\_client\_application** **(**  **)**  
  
	Gets a the application object of the current bot account.  
________________

- <a name="method-get-team"></a>[DiscordTeam](./class_discordteam.md) **get\_team** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Gets a Discord team object by `id`.  
________________

- <a name="method-register-application-command-executor"></a>void **register\_application\_command\_executor** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) command, [ApplicationCommandExecutor](./class_applicationcommandexecutor.md) executor **)**  
  
	Registers an applications command executor for `command` name.  
________________

- <a name="method-register-application-command"></a>[DiscordApplicationCommand](./class_discordapplicationcommand.md) **register\_application\_command** **(** [ApplicationCommandBuilder](./class_applicationcommandbuilder.md) builder, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id=0 **)** <u>_coroutine_</u>  
  
	Registers an application command with the help of a command `builder` object
	If a `guild_id` is provided the command will only be registered on that guild,
	otherwise the command will be registered globally. The method should be called
	one time only in the whole bot life cycle, calling this with an already
	registered command will override its configuration.  
________________

  
