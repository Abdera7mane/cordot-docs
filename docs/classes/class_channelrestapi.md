  
# ChannelRESTAPI
  
**Inherits:** [DiscordRESTAPI](./class_discordrestapi.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                                                                                                                                                                                |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ChannelRESTAPI](./class_channelrestapi.md)                               | [ChannelRESTAPI](#method-ChannelRESTAPI) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**                                                                                                             |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_channel](#method-get-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**                                                                                                                                                                                                                                                                            |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_channel](#method-edit-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                                                                                                  |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_channel](#method-delete-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**                                                                                                                                                                                                                                                                      |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_messages](#method-get-messages) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) query=50 **)**                                                                                                                                                                                |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_message](#method-get-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**                                                                                                                                                                                             |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [create\_message](#method-create-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                                                                                              |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [crosspost\_message](#method-crosspost-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**                                                                                                                                                                                 |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [create\_reaction](#method-create-reaction) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)**                                                                                                                                                    |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_own\_reaction](#method-delete-own-reaction) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)**                                                                                                                                           |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_user\_reaction](#method-delete-user-reaction) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**                                                             |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_reactions](#method-get-reactions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=25 **)** |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_all\_reactions](#method-delete-all-reactions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**                                                                                                                                                                          |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_emoji\_reactions](#method-delete-emoji-reactions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)**                                                                                                                                     |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_message](#method-edit-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                   |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_message](#method-delete-message) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**                                                                                                                                                                                       |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [bulk\_delete\_messages](#method-bulk-delete-messages) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) messages\_ids **)**                                                                                                                                                |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_channel\_permissions](#method-edit-channel-permissions) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) overwrite\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                        |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_channel\_invites](#method-get-channel-invites) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**                                                                                                                                                                                                                                                           |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [create\_channel\_invite](#method-create-channel-invite) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**                                                                                                                                                               |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete\_channel\_permission](#method-delete-channel-permission) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) overwrite\_id **)**                                                                                                                                                              |  
  
## Method Descriptions
  
- <a name="method-ChannelRESTAPI"></a>[ChannelRESTAPI](./class_channelrestapi.md) **ChannelRESTAPI** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_token, [DiscordRESTRequester](./class_discordrestrequester.md) \_requester, [BaseDiscordEntityManager](./class_basediscordentitymanager.md) \_entity\_manager **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channel"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-channel"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-channel"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-messages"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_messages** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) query=50 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-message"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-message"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **create\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-crosspost-message"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **crosspost\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-reaction"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **create\_reaction** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-own-reaction"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_own\_reaction** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-user-reaction"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_user\_reaction** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-reactions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_reactions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=25 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-all-reactions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_all\_reactions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-emoji-reactions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_emoji\_reactions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Emoji](./class_emoji.md) emoji **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-message"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-message"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_message** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-bulk-delete-messages"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **bulk\_delete\_messages** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) messages\_ids **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-channel-permissions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_channel\_permissions** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) overwrite\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channel-invites"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_channel\_invites** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-channel-invite"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **create\_channel\_invite** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) params **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete-channel-permission"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete\_channel\_permission** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) overwrite\_id **)**  
  
	> *There is currently no description for this method.*  
________________

  
