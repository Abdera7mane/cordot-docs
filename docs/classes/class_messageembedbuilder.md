  
# MessageEmbedBuilder
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build message embeds.  
  
## Methods
  
| return type                                                                     | signature                                                                                                                                                                                                                                                                                 |
|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_title](#method-set-title) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) title **)**                                                                                                                                                                 |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_description](#method-set-description) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) description **)**                                                                                                                                               |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_url](#method-set-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**                                                                                                                                                                       |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_timestamp](#method-set-timestamp) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) unix\_timestamp **)**                                                                                                                                                     |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_color](#method-set-color) **(** [Color](https://docs.godotengine.org/en/3.5/classes/class_color.html) color **)**                                                                                                                                                                   |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_footer](#method-set-footer) **(** [MessageEmbedFooterBuilder](./class_messageembedfooterbuilder.md) footer **)**                                                                                                                                                                    |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_image](#method-set-image) **(** [MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) image **)**                                                                                                                                                               |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_thumbnail](#method-set-thumbnail) **(** [MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) thumbnail **)**                                                                                                                                                   |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_video](#method-set-video) **(** [MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) video **)**                                                                                                                                                               |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_provider](#method-set-provider) **(** [MessageEmbedProviderBuilder](./class_messageembedproviderbuilder.md) provider **)**                                                                                                                                                          |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [set\_author](#method-set-author) **(** [MessageEmbedAuthorBuilder](./class_messageembedauthorbuilder.md) author **)**                                                                                                                                                                    |
| [MessageEmbedBuilder](./class_messageembedbuilder.md)                           | [add\_field](#method-add-field) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) value, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) inline=false **)** |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [build](#method-build) **(**  **)**                                                                                                                                                                                                                                                       |  
  
## Constants
  
- <a name="constant-MAX-FIELDS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MAX\_FIELDS** = 25  
  
	> *There is currently no description for this constant.*
  
  
## Method Descriptions
  
- <a name="method-set-title"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_title** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) title **)**  
  
	Sets the embed's title.  
________________

- <a name="method-set-description"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_description** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) description **)**  
  
	Sets the embed's description.  
________________

- <a name="method-set-url"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**  
  
	Sets the embed's url.  
________________

- <a name="method-set-timestamp"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_timestamp** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) unix\_timestamp **)**  
  
	Sets the embed's timestamp. `unix_timestamp` takes a Unix time in seconds.  
________________

- <a name="method-set-color"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_color** **(** [Color](https://docs.godotengine.org/en/3.5/classes/class_color.html) color **)**  
  
	Sets the embed's color.  
________________

- <a name="method-set-footer"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_footer** **(** [MessageEmbedFooterBuilder](./class_messageembedfooterbuilder.md) footer **)**  
  
	Sets the embed's footer information.  
________________

- <a name="method-set-image"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_image** **(** [MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) image **)**  
  
	Sets the embed's image.  
________________

- <a name="method-set-thumbnail"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_thumbnail** **(** [MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) thumbnail **)**  
  
	Sets the embed's thumbnail.  
________________

- <a name="method-set-video"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_video** **(** [MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) video **)**  
  
	Sets the embed's video.  
________________

- <a name="method-set-provider"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_provider** **(** [MessageEmbedProviderBuilder](./class_messageembedproviderbuilder.md) provider **)**  
  
	Sets the embed's provider information.  
________________

- <a name="method-set-author"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **set\_author** **(** [MessageEmbedAuthorBuilder](./class_messageembedauthorbuilder.md) author **)**  
  
	Sets the embed's author information.  
________________

- <a name="method-add-field"></a>[MessageEmbedBuilder](./class_messageembedbuilder.md) **add\_field** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) value, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) inline=false **)**  
  
	Adds a field to the embed. if `inline` is `true`, the field will displayed on 
	the same line next to the previous field. You can add up to 25 fields.  
________________

- <a name="method-build"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **build** **(**  **)**  
  
	Returns the embed data as a `Dictionary`.  
________________

  
