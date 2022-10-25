  
# MessageManager
  
**Inherits:** [BaseMessageManager](./class_basemessagemanager.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                      | name                                        |
|---------------------------------------------------------------------------|---------------------------------------------|
| [WeakRef](https://docs.godotengine.org/en/3.5/classes/class_weakref.html) | [entity\_manager](#property-entity-manager) |  
  
## Methods
  
| return type                                                                     | signature                                                                                                                                                                         |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [BaseDiscordEntityManager](./class_basediscordentitymanager.md)                 | [get\_manager](#method-get-manager) **(**  **)**                                                                                                                                  |
| [Message](./class_message.md)                                                   | [construct\_message](#method-construct-message) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                  |
| [MessageEmbed](./class_messageembed.md)                                         | [construct\_embed](#method-construct-embed) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                      |
| [MessageEmbedFooter](./class_messageembedfooter.md)                             | [construct\_embed\_footer](#method-construct-embed-footer) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                       |
| [MessageEmbedImage](./class_messageembedimage.md)                               | [construct\_embed\_image](#method-construct-embed-image) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                         |
| [MessageEmbedThumbnail](./class_messageembedthumbnail.md)                       | [construct\_embed\_thumbnail](#method-construct-embed-thumbnail) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                 |
| [MessageEmbedVideo](./class_messageembedvideo.md)                               | [construct\_embed\_video](#method-construct-embed-video) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                         |
| [MessageEmbedProvider](./class_messageembedprovider.md)                         | [construct\_embed\_provider](#method-construct-embed-provider) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                   |
| [MessageEmbedAuthor](./class_messageembedauthor.md)                             | [construct\_embed\_author](#method-construct-embed-author) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                       |
| [MessageEmbedField](./class_messageembedfield.md)                               | [construct\_embed\_field](#method-construct-embed-field) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                         |
| [MessageAttachment](./class_messageattachment.md)                               | [construct\_message\_attachment](#method-construct-message-attachment) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**           |
| [MessageReference](./class_messagereference.md)                                 | [construct\_message\_reference](#method-construct-message-reference) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**             |
| [ChannelMention](./class_channelmention.md)                                     | [construct\_channel\_mention](#method-construct-channel-mention) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                 |
| [MessageReaction](./class_messagereaction.md)                                   | [construct\_reaction](#method-construct-reaction) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                |
| [MessageActionRow](./class_messageactionrow.md)                                 | [construct\_action\_row](#method-construct-action-row) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                           |
| [MessageButton](./class_messagebutton.md)                                       | [construct\_button](#method-construct-button) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                    |
| [MessageSelectMenu](./class_messageselectmenu.md)                               | [construct\_select\_menu](#method-construct-select-menu) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                         |
| [MessageSelectOption](./class_messageselectoption.md)                           | [construct\_select\_option](#method-construct-select-option) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                     |
| [MessageTextInput](./class_messagetextinput.md)                                 | [construct\_text\_input](#method-construct-text-input) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                           |
| void                                                                            | [update\_message](#method-update-message) **(** [Message](./class_message.md) message, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [parse\_message\_data](#method-parse-message-data) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                               |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)         | [get\_class](#method-get-class) **(**  **)**                                                                                                                                      |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | **static** [string\_to\_embed\_type](#method-string-to-embed-type) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) type **)**                       |  
  
## Property Descriptions
  
- <a name="property-entity-manager"></a>[WeakRef](https://docs.godotengine.org/en/3.5/classes/class_weakref.html) **entity_manager**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-MessageManager"></a>[MessageManager](./class_messagemanager.md) **MessageManager** **(** [BaseDiscordEntityManager](./class_basediscordentitymanager.md) manager **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-manager"></a>[BaseDiscordEntityManager](./class_basediscordentitymanager.md) **get\_manager** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-message"></a>[Message](./class_message.md) **construct\_message** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-embed"></a>[MessageEmbed](./class_messageembed.md) **construct\_embed** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-embed-footer"></a>[MessageEmbedFooter](./class_messageembedfooter.md) **construct\_embed\_footer** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-embed-image"></a>[MessageEmbedImage](./class_messageembedimage.md) **construct\_embed\_image** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-embed-thumbnail"></a>[MessageEmbedThumbnail](./class_messageembedthumbnail.md) **construct\_embed\_thumbnail** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-embed-video"></a>[MessageEmbedVideo](./class_messageembedvideo.md) **construct\_embed\_video** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-embed-provider"></a>[MessageEmbedProvider](./class_messageembedprovider.md) **construct\_embed\_provider** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-embed-author"></a>[MessageEmbedAuthor](./class_messageembedauthor.md) **construct\_embed\_author** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-embed-field"></a>[MessageEmbedField](./class_messageembedfield.md) **construct\_embed\_field** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-message-attachment"></a>[MessageAttachment](./class_messageattachment.md) **construct\_message\_attachment** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-message-reference"></a>[MessageReference](./class_messagereference.md) **construct\_message\_reference** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-channel-mention"></a>[ChannelMention](./class_channelmention.md) **construct\_channel\_mention** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-reaction"></a>[MessageReaction](./class_messagereaction.md) **construct\_reaction** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-action-row"></a>[MessageActionRow](./class_messageactionrow.md) **construct\_action\_row** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-button"></a>[MessageButton](./class_messagebutton.md) **construct\_button** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-select-menu"></a>[MessageSelectMenu](./class_messageselectmenu.md) **construct\_select\_menu** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-select-option"></a>[MessageSelectOption](./class_messageselectoption.md) **construct\_select\_option** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-construct-text-input"></a>[MessageTextInput](./class_messagetextinput.md) **construct\_text\_input** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-update-message"></a>void **update\_message** **(** [Message](./class_message.md) message, [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-message-data"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **parse\_message\_data** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-string-to-embed-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **static** **string\_to\_embed\_type** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) type **)**  
  
	> *There is currently no description for this method.*
  
