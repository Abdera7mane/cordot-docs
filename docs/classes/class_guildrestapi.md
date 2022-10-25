  
# GuildRESTAPI
  
**Inherits:** [DiscordRESTAPI](./class_discordrestapi.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Guild REST API implementation.  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                                                                                                                                                                                             |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild](./class_guild.md)                                                 | [create\_guild](#method-create-guild) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>                                                                                                                                                                                                                                                           |
| [Guild](./class_guild.md)                                                 | [get\_guild](#method-get-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) with\_counts=false **)** <u>_coroutine_</u>                                                                                                                                                                                    |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [get\_guild\_preview](#method-get-guild-preview) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**                                                                                                                                                                                                                                                                            |
| [Guild](./class_guild.md)                                                 | [edit\_guild](#method-edit-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                               |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [delete\_guild](#method-delete-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                                                                                      |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_guild\_channels](#method-get-guild-channels) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                                                                         |
| [Channel](./class_channel.md)                                             | [create\_guild\_channel](#method-create-guild-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason **)** <u>_coroutine_</u>                                                                             |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [edit\_guild\_channel\_positions](#method-edit-guild-channel-positions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)** <u>_coroutine_</u>                                                                                                                                                      |
| [Guild.Member](./class_guild.md#member)                                   | [get\_guild\_member](#method-get-guild-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) user\_id **)** <u>_coroutine_</u>                                                                                                                                                                         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [list\_guild\_members](#method-list-guild-members) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0 **)** <u>_coroutine_</u>                                                                                                   |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [search\_guild\_members](#method-search-guild-members) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) query, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1 **)** <u>_coroutine_</u>                                                                                           |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [add\_guild\_member](#method-add-guild-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>                                                                                         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [edit\_guild\_member](#method-edit-guild-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>    |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [edit\_current\_member](#method-edit-current-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                            |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [add\_guild\_member\_role](#method-add-guild-member-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>       |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [remove\_guild\_member\_role](#method-remove-guild-member-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u> |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [remove\_guild\_member](#method-remove-guild-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                        |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_guild\_bans](#method-get-guild-bans) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                                                                                 |
| [GuildBan](./class_guildban.md)                                           | [get\_guild\_ban](#method-get-guild-ban) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)** <u>_coroutine_</u>                                                                                                                                                                                       |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [create\_guild\_ban](#method-create-guild-ban) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>      |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [remove\_guild\_ban](#method-remove-guild-ban) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                              |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_guild\_roles](#method-get-guild-roles) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                                                                               |
| [Guild.Role](./class_guild.md#role)                                       | [create\_guild\_role](#method-create-guild-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [edit\_guild\_role\_positions](#method-edit-guild-role-positions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                         |
| [Guild.Role](./class_guild.md#role)                                       | [edit\_guild\_role](#method-edit-guild-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>        |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [delete\_guild\_role](#method-delete-guild-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                            |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [get\_guild\_prune\_count](#method-get-guild-prune-count) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, PoolStringArray include\_roles=[ ] **)** <u>_coroutine_</u>                                                                                                                                    |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [begin\_guild\_prune](#method-begin-guild-prune) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>                                                                                |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_guild\_voice\_regions](#method-get-guild-voice-regions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                                                              |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_guild\_invites](#method-get-guild-invites) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                                                                           |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_guild\_integrations](#method-get-guild-integrations) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**                                                                                                                                                                                                                                                                  |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [delete\_guild\_integration](#method-delete-guild-integration) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_integration\_id **)**                                                                                                                                                                         |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [get\_guild\_widget\_settings](#method-get-guild-widget-settings) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**                                                                                                                                                                                                                                                           |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [edit\_guild\_widget\_settings](#method-edit-guild-widget-settings) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**                                                                                                                                                               |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [get\_guild\_widget](#method-get-guild-widget) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**                                                                                                                                                                                                                                                                              |
| [Guild.Invite](./class_guild.md#invite)                                   | [get\_guild\_vanity\_url](#method-get-guild-vanity-url) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                                                                    |
| [Texture](https://docs.godotengine.org/en/3.5/classes/class_texture.html) | [get\_guild\_widget\_image](#method-get-guild-widget-image) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) style="shield" **)** <u>_coroutine_</u>                                                                                                                                                        |
| [WelcomeScreen](./class_welcomescreen.md)                                 | [get\_guild\_welcome\_screen](#method-get-guild-welcome-screen) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**                                                                                                                                                                                                                                                             |
| [WelcomeScreen](./class_welcomescreen.md)                                 | [edit\_guild\_welcome\_screen](#method-edit-guild-welcome-screen) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**                                                                                                                                                                 |
| void                                                                      | [edit\_current\_user\_voice\_state](#method-edit-current-user-voice-state) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**                                                                                                                                                        |
| void                                                                      | [edit\_user\_voice\_state](#method-edit-user-voice-state) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**                                                                                           |  
  
## Method Descriptions
  
- <a name="method-GuildRESTAPI"></a>[GuildRESTAPI](./class_guildrestapi.md) **GuildRESTAPI** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**  
  
	Constructs a new `GuildRESTAPI` object.  
________________

- <a name="method-create-guild"></a>[Guild](./class_guild.md) **create\_guild** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Creates a new guild.  
	<https://discord.com/developers/docs/resources/guild#create-guild>  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) with\_counts=false **)** <u>_coroutine_</u>  
  
	Returns the guild object for the given `guild_id`.  
	<https://discord.com/developers/docs/resources/guild#get-guild>  
________________

- <a name="method-get-guild-preview"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **get\_guild\_preview** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild"></a>[Guild](./class_guild.md) **edit\_guild** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Modifies a guild's settings. Returns the updated guild object.  
	<https://discord.com/developers/docs/resources/guild#modify-guild>  
________________

- <a name="method-delete-guild"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_guild** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>  
  
	Delete a guild permanently. User must be owner. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/guild#delete-guild>  
________________

- <a name="method-get-guild-channels"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_guild\_channels** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>  
  
	Returns a list of guild channel. Does not include threads.  
	<https://discord.com/developers/docs/resources/guild#get-guild-channels>  
________________

- <a name="method-create-guild-channel"></a>[Channel](./class_channel.md) **create\_guild\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason **)** <u>_coroutine_</u>  
  
	Creates a new channel for the guild.  
	<https://discord.com/developers/docs/resources/guild#create-guild-channel>  
________________

- <a name="method-edit-guild-channel-positions"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **edit\_guild\_channel\_positions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)** <u>_coroutine_</u>  
  
	Modify the positions of a set of channel for the guild.
	Returns `true` on success.  
	<https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions>  
________________

- <a name="method-get-guild-member"></a>[Guild.Member](./class_guild.md#member) **get\_guild\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) user\_id **)** <u>_coroutine_</u>  
  
	Returns a `Guild.Member` object for the specified `user_id`.  
	<https://discord.com/developers/docs/resources/guild#get-guild-member>  
________________

- <a name="method-list-guild-members"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **list\_guild\_members** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0 **)** <u>_coroutine_</u>  
  
	Returns a list of `Guild.Member` objects that are members of the guild.  
	<https://discord.com/developers/docs/resources/guild#list-guild-members>  
________________

- <a name="method-search-guild-members"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **search\_guild\_members** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) query, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1 **)** <u>_coroutine_</u>  
  
	Returns a list of `Guild.Member` objects whose username or nickname starts
	with a provided `query` string.  
	<https://discord.com/developers/docs/resources/guild#search-guild-members>  
________________

- <a name="method-add-guild-member"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **add\_guild\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Adds a user to the guild, provided you have a valid oauth2 access token for
	the user with the guilds.join scope.  
	<https://discord.com/developers/docs/resources/guild#add-guild-member>  
________________

- <a name="method-edit-guild-member"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **edit\_guild\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Modify attributes of a guild member.  
	<https://discord.com/developers/docs/resources/guild#modify-guild-member>  
________________

- <a name="method-edit-current-member"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **edit\_current\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Modifies the current member in a guild.  
	<https://discord.com/developers/docs/resources/guild#modify-current-member>  
________________

- <a name="method-add-guild-member-role"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **add\_guild\_member\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Adds a role to a guild member. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/guild#add-guild-member-role>  
________________

- <a name="method-remove-guild-member-role"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **remove\_guild\_member\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Removes a role from a guild member. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/guild#remove-guild-member-role>  
________________

- <a name="method-remove-guild-member"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **remove\_guild\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Removes a member from a guild. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/guild#remove-guild-member>  
________________

- <a name="method-get-guild-bans"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_guild\_bans** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>  
  
	Returns a list of `GuildBan` objects for the users banned from a guild.  
	<https://discord.com/developers/docs/resources/guild#get-guild-bans>  
________________

- <a name="method-get-guild-ban"></a>[GuildBan](./class_guildban.md) **get\_guild\_ban** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)** <u>_coroutine_</u>  
  
	Returns a `GuildBan` object for the given `user_id`.  
	<https://discord.com/developers/docs/resources/guild#get-guild-ban>  
________________

- <a name="method-create-guild-ban"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **create\_guild\_ban** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Creates a guild ban, and optionally delete previous messages sent by the 
	banned user. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/guild#create-guild-ban>  
________________

- <a name="method-remove-guild-ban"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **remove\_guild\_ban** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Removes the ban for a user. Returns `true` on success.  
	<https://discord.com/developers/docs/resources/guild#remove-guild-ban>  
________________

- <a name="method-get-guild-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_guild\_roles** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>  
  
	Returns a list of `Guild.Role` objects for the guild.  
	<https://discord.com/developers/docs/resources/guild#get-guild-roles>  
________________

- <a name="method-create-guild-role"></a>[Guild.Role](./class_guild.md#role) **create\_guild\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Create a new role for the guild.  
	<https://discord.com/developers/docs/resources/guild#create-guild-role>  
________________

- <a name="method-edit-guild-role-positions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **edit\_guild\_role\_positions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Modifies the positions of the guild roles. Returns a list of all of the
	guild's role objects on success.  
	<https://discord.com/developers/docs/resources/guild#modify-guild-role-positions>  
________________

- <a name="method-edit-guild-role"></a>[Guild.Role](./class_guild.md#role) **edit\_guild\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Modifies the properties of a role. Returns the updated role on success.
	<https://discord.com/developers/docs/resources/guild#modify-guild-role>  
________________

- <a name="method-delete-guild-role"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_guild\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Deletes a guild role. Returns `true` on success.
	<https://discord.com/developers/docs/resources/guild#delete-guild-role>  
________________

- <a name="method-get-guild-prune-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_guild\_prune\_count** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, PoolStringArray include\_roles=[ ] **)** <u>_coroutine_</u>  
  
	Returns the guild prune count indicating the number of members that would be
	removed in a prune operation.  
	<https://discord.com/developers/docs/resources/guild#get-guild-prune-count>  
________________

- <a name="method-begin-guild-prune"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **begin\_guild\_prune** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** <u>_coroutine_</u>  
  
	Begin a prune operation.
	<https://discord.com/developers/docs/resources/guild#begin-guild-prune>  
________________

- <a name="method-get-guild-voice-regions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_guild\_voice\_regions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>  
  
	Returns a list of `DiscordVoiceRegion` objects for the guild.
	<https://discord.com/developers/docs/resources/guild#get-guild-voice-regions>  
________________

- <a name="method-get-guild-invites"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_guild\_invites** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>  
  
	Returns a list of `Guild.Invite` objects for the guild.  
	<https://discord.com/developers/docs/resources/guild#get-guild-invites>  
________________

- <a name="method-get-guild-integrations"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_guild\_integrations** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-guild-integration"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_guild\_integration** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_integration\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-widget-settings"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **get\_guild\_widget\_settings** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild-widget-settings"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **edit\_guild\_widget\_settings** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-widget"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **get\_guild\_widget** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-vanity-url"></a>[Guild.Invite](./class_guild.md#invite) **get\_guild\_vanity\_url** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>  
  
	Returns a partial `Guild.Invite` object for guilds with that feature enabled.  
	<https://discord.com/developers/docs/resources/guild#get-guild-vanity-url>  
________________

- <a name="method-get-guild-widget-image"></a>[Texture](https://docs.godotengine.org/en/3.5/classes/class_texture.html) **get\_guild\_widget\_image** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) style="shield" **)** <u>_coroutine_</u>  
  
	Returns a PNG image widget for the guild.
	<https://discord.com/developers/docs/resources/guild#get-guild-widget-image>  
________________

- <a name="method-get-guild-welcome-screen"></a>[WelcomeScreen](./class_welcomescreen.md) **get\_guild\_welcome\_screen** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild-welcome-screen"></a>[WelcomeScreen](./class_welcomescreen.md) **edit\_guild\_welcome\_screen** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-current-user-voice-state"></a>void **edit\_current\_user\_voice\_state** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-user-voice-state"></a>void **edit\_user\_voice\_state** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**  
  
	> *There is currently no description for this method.*  
________________

  
