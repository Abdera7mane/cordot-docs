  
# GuildRESTAPI
  
**Inherits:** [DiscordRESTAPI](./class_discordrestapi.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                                                                                                                 |
|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [GuildRESTAPI](./class_guildrestapi.md)                                   | [GuildRESTAPI](#method-GuildRESTAPI) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**                                                  |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [create\_guild](#method-create-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                                     |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild](#method-get-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) with\_counts=false **)**                                                                                                                           |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [get\_guild\_preview](#method-get-guild-preview) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                                  |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_guild](#method-edit-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                                         |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_guild](#method-delete-guild) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                                             |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_channels](#method-get-guild-channels) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                                |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [create\_guild\_channel](#method-create-guild-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                    |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_guild\_channel\_positions](#method-edit-guild-channel-positions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)**                                                                                             |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_member](#method-get-guild-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) user\_id **)**                                                                                                                |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [list\_guild\_members](#method-list-guild-members) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0 **)**                                          |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [search\_guild\_members](#method-search-guild-members) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) query, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1 **)**                                  |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [add\_guild\_member](#method-add-guild-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_guild\_member](#method-edit-guild-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                              |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_current\_member](#method-edit-current-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                      |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [add\_guild\_member\_role](#method-add-guild-member-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**                                 |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [remove\_guild\_member\_role](#method-remove-guild-member-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**                           |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [remove\_guild\_member](#method-remove-guild-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**                                                                                                                  |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_bans](#method-get-guild-bans) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                                        |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_ban](#method-get-guild-ban) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**                                                                                                                              |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [create\_guild\_ban](#method-create-guild-ban) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [remove\_guild\_ban](#method-remove-guild-ban) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**                                                                                                                        |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_roles](#method-get-guild-roles) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                                      |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [create\_guild\_role](#method-create-guild-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                          |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_guild\_role\_positions](#method-edit-guild-role-positions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)**                                                                                                   |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_guild\_role](#method-edit-guild-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                  |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_guild\_role](#method-delete-guild-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**                                                                                                                      |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_prune\_count](#method-get-guild-prune-count) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) include\_roles=[ ] **)** |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [begin\_guild\_prune](#method-begin-guild-prune) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                          |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_voice\_regions](#method-get-guild-voice-regions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                     |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_invites](#method-get-guild-invites) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                                  |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_guild\_integrations](#method-get-guild-integrations) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                        |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [delete\_guild\_integration](#method-delete-guild-integration) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) integration\_id **)**                                                                                                 |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [get\_guild\_widget\_settings](#method-get-guild-widget-settings) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                 |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [edit\_guild\_widget\_settings](#method-edit-guild-widget-settings) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                       |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [get\_guild\_widget](#method-get-guild-widget) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                                    |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_vanity\_url](#method-get-guild-vanity-url) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                           |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_widget\_image](#method-get-guild-widget-image) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) style="shield" **)**                                                                                               |
| [WelcomeScreen](./class_welcomescreen.md)                                 | [get\_guild\_welcome\_screen](#method-get-guild-welcome-screen) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                   |
| [WelcomeScreen](./class_welcomescreen.md)                                 | [edit\_guild\_welcome\_screen](#method-edit-guild-welcome-screen) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                         |
| void                                                                      | [edit\_current\_user\_voice\_state](#method-edit-current-user-voice-state) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                |
| void                                                                      | [edit\_user\_voice\_state](#method-edit-user-voice-state) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                     |  
  
## Method Descriptions
  
- <a name="method-GuildRESTAPI"></a>[GuildRESTAPI](./class_guildrestapi.md) **GuildRESTAPI** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-guild"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **create\_guild** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) with\_counts=false **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-preview"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **get\_guild\_preview** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_guild** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-guild"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_guild** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-channels"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_channels** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-guild-channel"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **create\_guild\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild-channel-positions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_guild\_channel\_positions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-member"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) user\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-list-guild-members"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **list\_guild\_members** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-search-guild-members"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **search\_guild\_members** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) query, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-guild-member"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **add\_guild\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild-member"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_guild\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-current-member"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_current\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-guild-member-role"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **add\_guild\_member\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-remove-guild-member-role"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **remove\_guild\_member\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-remove-guild-member"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **remove\_guild\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-bans"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_bans** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-ban"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_ban** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-guild-ban"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **create\_guild\_ban** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-remove-guild-ban"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **remove\_guild\_ban** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-roles"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_roles** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-guild-role"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **create\_guild\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild-role-positions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_guild\_role\_positions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild-role"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_guild\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-guild-role"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_guild\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-prune-count"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_prune\_count** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) include\_roles=[ ] **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-begin-guild-prune"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **begin\_guild\_prune** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-voice-regions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_voice\_regions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-invites"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_invites** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-integrations"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_guild\_integrations** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-guild-integration"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_guild\_integration** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) integration\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-widget-settings"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **get\_guild\_widget\_settings** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild-widget-settings"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **edit\_guild\_widget\_settings** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-widget"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **get\_guild\_widget** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-vanity-url"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_vanity\_url** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-widget-image"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_widget\_image** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) style="shield" **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-welcome-screen"></a>[WelcomeScreen](./class_welcomescreen.md) **get\_guild\_welcome\_screen** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild-welcome-screen"></a>[WelcomeScreen](./class_welcomescreen.md) **edit\_guild\_welcome\_screen** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-current-user-voice-state"></a>void **edit\_current\_user\_voice\_state** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-user-voice-state"></a>void **edit\_user\_voice\_state** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

  
