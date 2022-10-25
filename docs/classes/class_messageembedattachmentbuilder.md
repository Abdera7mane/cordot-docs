  
# MessageEmbedAttachmentBuilder
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build embed attachments.  
  
## Methods
  
| return type                                                                     | signature                                                                                                                               |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| [MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md)       | [set\_proxy\_url](#method-set-proxy-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) proxy\_url **)** |
| [MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md)       | [set\_height](#method-set-height) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) height **)**                  |
| [MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md)       | [set\_width](#method-set-width) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) width **)**                     |
| [MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md)       | [set\_size](#method-set-size) **(** [Vector2](https://docs.godotengine.org/en/3.5/classes/class_vector2.html) size **)**                |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [build](#method-build) **(**  **)**                                                                                                     |  
  
## Method Descriptions
  
- <a name="method-MessageEmbedAttachmentBuilder"></a>[MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) **MessageEmbedAttachmentBuilder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**  
  
	Constructs a new `MessageEmbedAttachmentBuilder` instance.
	`url` only supports http(s) and attachments based URL.  
________________

- <a name="method-set-proxy-url"></a>[MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) **set\_proxy\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) proxy\_url **)**  
  
	Sets the proxy URL.  
________________

- <a name="method-set-height"></a>[MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) **set\_height** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) height **)**  
  
	Sets the image height.  
________________

- <a name="method-set-width"></a>[MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) **set\_width** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) width **)**  
  
	Sets the image width.  
________________

- <a name="method-set-size"></a>[MessageEmbedAttachmentBuilder](./class_messageembedattachmentbuilder.md) **set\_size** **(** [Vector2](https://docs.godotengine.org/en/3.5/classes/class_vector2.html) size **)**  
  
	Sets the image dimensions (width & height).  
________________

- <a name="method-build"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **build** **(**  **)**  
  
	Returns the embed attachment data as a `Dictionary`.  
________________

  
