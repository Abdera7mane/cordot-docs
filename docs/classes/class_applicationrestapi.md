  
# ApplicationRESTAPI
  
**Inherits:** [DiscordRESTAPI](./class_discordrestapi.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Discord Application REST API implementation.  
  
## Methods
  
| return type                                                             | signature                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_global\_application\_commands](#method-get-global-application-commands) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id **)** <u>_coroutine_</u>                                                                                                                                                                                                                                                               |
| [DiscordApplicationCommand](./class_discordapplicationcommand.md)       | [create\_global\_application\_command](#method-create-global-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>                                                                                                                                                                   |
| [DiscordApplicationCommand](./class_discordapplicationcommand.md)       | [get\_global\_application\_command](#method-get-global-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)** <u>_coroutine_</u>                                                                                                                                                                                  |
| [DiscordApplicationCommand](./class_discordapplicationcommand.md)       | [edit\_global\_application\_command](#method-edit-global-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>                                                                                        |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [delete\_global\_application\_command](#method-delete-global-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)** <u>_coroutine_</u>                                                                                                                                                                            |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [bulk\_overwrite\_global\_application\_commands](#method-bulk-overwrite-global-application-commands) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) application\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)** <u>_coroutine_</u>                                                                                                                                                  |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_guild\_application\_commands](#method-get-guild-application-commands) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>                                                                                                                                                                                    |
| [DiscordApplicationCommand](./class_discordapplicationcommand.md)       | [create\_guild\_application\_command](#method-create-guild-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>                                                                                        |
| [DiscordApplicationCommand](./class_discordapplicationcommand.md)       | [get\_guild\_application\_command](#method-get-guild-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)** <u>_coroutine_</u>                                                                                                       |
| [DiscordApplicationCommand](./class_discordapplicationcommand.md)       | [edit\_guild\_application\_command](#method-edit-guild-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>             |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [delete\_guild\_application\_command](#method-delete-guild-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)** <u>_coroutine_</u>                                                                                                 |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [bulk\_overwrite\_guild\_application\_commands](#method-bulk-overwrite-guild-application-commands) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)** <u>_coroutine_</u>                                                                       |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_guild\_application\_command\_permissions](#method-get-guild-application-command-permissions) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**                                                                                                                                                                    |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) | [get\_application\_command\_permissions](#method-get-application-command-permissions) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_command\_id **)**                                                                                                |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) | [edit\_application\_command\_permissions](#method-edit-application-command-permissions) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**    |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [batch\_edit\_application\_command\_permissions](#method-batch-edit-application-command-permissions) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_command\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) \_params **)** |  
  
## Method Descriptions
  
- <a name="method-ApplicationRESTAPI"></a>[ApplicationRESTAPI](./class_applicationrestapi.md) **ApplicationRESTAPI** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**  
  
	Constructs a new `ApplicationRESTAPI` object.  
________________

- <a name="method-get-global-application-commands"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_global\_application\_commands** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id **)** <u>_coroutine_</u>  
  
	Fetches all of the global commands for a Discord application.
	Returns an array of `DiscordApplicationCommand` objects.  
	<https://discord.com/developers/docs/interactions/application-commands#create-global-application-command>  
________________

- <a name="method-create-global-application-command"></a>[DiscordApplicationCommand](./class_discordapplicationcommand.md) **create\_global\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Creates a new global application command.  
	<https://discord.com/developers/docs/interactions/application-commands#create-global-application-command>  
________________

- <a name="method-get-global-application-command"></a>[DiscordApplicationCommand](./class_discordapplicationcommand.md) **get\_global\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)** <u>_coroutine_</u>  
  
	Fetches a global application command.  
	<https://discord.com/developers/docs/interactions/application-commands#get-global-application-command>  
________________

- <a name="method-edit-global-application-command"></a>[DiscordApplicationCommand](./class_discordapplicationcommand.md) **edit\_global\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Edits a global application command.  
	<https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command>  
________________

- <a name="method-delete-global-application-command"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_global\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)** <u>_coroutine_</u>  
  
	Deletes a global command. Returns `true` on success.  
	<https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command>  
________________

- <a name="method-bulk-overwrite-global-application-commands"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **bulk\_overwrite\_global\_application\_commands** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) application\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)** <u>_coroutine_</u>  
  
	Takes a list of application commands, overwriting the existing global command
	list for an application. Returns a list of `DiscordApplicationCommand` objects.  
	<https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands>  
________________

- <a name="method-get-guild-application-commands"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_guild\_application\_commands** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)** <u>_coroutine_</u>  
  
	Fetches all of the guild commands for an application for a specific guild.
	Returns a list of `DiscordApplicationCommand` objects.  
	<https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands>  
________________

- <a name="method-create-guild-application-command"></a>[DiscordApplicationCommand](./class_discordapplicationcommand.md) **create\_guild\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Creates a new guild command. New guild commands will be available in the guild
	immediately.  
	<https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command>  
________________

- <a name="method-get-guild-application-command"></a>[DiscordApplicationCommand](./class_discordapplicationcommand.md) **get\_guild\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)** <u>_coroutine_</u>  
  
	Fetches a guild command for an application.  
	<https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command>  
________________

- <a name="method-edit-guild-application-command"></a>[DiscordApplicationCommand](./class_discordapplicationcommand.md) **edit\_guild\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)** <u>_coroutine_</u>  
  
	Edits a guild command. Updates for guild commands will be available immediately.  
	<https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command>  
________________

- <a name="method-delete-guild-application-command"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete\_guild\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)** <u>_coroutine_</u>  
  
	Delete a guild application command. Returns `true` on success.  
	<https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command>  
________________

- <a name="method-bulk-overwrite-guild-application-commands"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **bulk\_overwrite\_guild\_application\_commands** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)** <u>_coroutine_</u>  
  
	Takes a list of application commands, overwriting the existing command list for
	an application for the targeted guild.  
	<https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands>  
________________

- <a name="method-get-guild-application-command-permissions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_guild\_application\_command\_permissions** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-application-command-permissions"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **get\_application\_command\_permissions** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_command\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-application-command-permissions"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **edit\_application\_command\_permissions** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-batch-edit-application-command-permissions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **batch\_edit\_application\_command\_permissions** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_command\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) \_params **)**  
  
	> *There is currently no description for this method.*  
________________

  
