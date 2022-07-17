  
# ApplicationRESTAPI
  
**Inherits:** [DiscordRESTAPI](./class_discordrestapi.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|---------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationRESTAPI](./class_applicationrestapi.md)                       | [ApplicationRESTAPI](#method-ApplicationRESTAPI) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**                                                                                                                                                         |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_global\_application\_commands](#method-get-global-application-commands) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id **)**                                                                                                                                                                                                                                                                                  |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [create\_global\_application\_command](#method-create-global-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                                                                                                      |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_global\_application\_command](#method-get-global-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)**                                                                                                                                                                                                     |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_global\_application\_command](#method-edit-global-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                           |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_global\_application\_command](#method-delete-global-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)**                                                                                                                                                                                               |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [bulk\_overwrite\_global\_application\_commands](#method-bulk-overwrite-global-application-commands) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) application\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)**                                                                                                                                                                     |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_application\_commands](#method-get-guild-application-commands) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**                                                                                                                                                                                                       |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [create\_guild\_application\_command](#method-create-guild-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                           |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_guild\_application\_command](#method-get-guild-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)**                                                                                                                          |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_guild\_application\_command](#method-edit-guild-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_guild\_application\_command](#method-delete-guild-application-command) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)**                                                                                                                    |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [bulk\_overwrite\_guild\_application\_commands](#method-bulk-overwrite-guild-application-commands) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)**                                                                                          |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_guild\_application\_command\_permissions](#method-get-guild-application-command-permissions) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id **)**                                                                                                                                                                    |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [get\_application\_command\_permissions](#method-get-application-command-permissions) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_command\_id **)**                                                                                                |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [edit\_application\_command\_permissions](#method-edit-application-command-permissions) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_params **)**    |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [batch\_edit\_application\_command\_permissions](#method-batch-edit-application-command-permissions) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_command\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) \_params **)** |  
  
## Method Descriptions
  
- <a name="method-ApplicationRESTAPI"></a>[ApplicationRESTAPI](./class_applicationrestapi.md) **ApplicationRESTAPI** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-global-application-commands"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_global\_application\_commands** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-global-application-command"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **create\_global\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-global-application-command"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_global\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-global-application-command"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_global\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-global-application-command"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_global\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-bulk-overwrite-global-application-commands"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **bulk\_overwrite\_global\_application\_commands** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) application\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-application-commands"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_application\_commands** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-guild-application-command"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **create\_guild\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild-application-command"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_guild\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-guild-application-command"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_guild\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-guild-application-command"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_guild\_application\_command** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) command\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-bulk-overwrite-guild-application-commands"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **bulk\_overwrite\_guild\_application\_commands** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) application\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id, [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) params **)**  
  
	> *There is currently no description for this method.*  
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

  
