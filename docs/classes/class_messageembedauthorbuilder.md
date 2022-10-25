  
# MessageEmbedAuthorBuilder
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build embed author information.  
  
## Methods
  
| return type                                                                     | signature                                                                                                                                                |
|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| [MessageEmbedAuthorBuilder](./class_messageembedauthorbuilder.md)               | [set\_url](#method-set-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**                                      |
| [MessageEmbedAuthorBuilder](./class_messageembedauthorbuilder.md)               | [set\_icon\_url](#method-set-icon-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) icon\_url **)**                     |
| [MessageEmbedAuthorBuilder](./class_messageembedauthorbuilder.md)               | [set\_proxy\_icon\_url](#method-set-proxy-icon-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) proxy\_icon\_url **)** |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [build](#method-build) **(**  **)**                                                                                                                      |  
  
## Method Descriptions
  
- <a name="method-MessageEmbedAuthorBuilder"></a>[MessageEmbedAuthorBuilder](./class_messageembedauthorbuilder.md) **MessageEmbedAuthorBuilder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**  
  
	Constructs a new `MessageEmbedAuthorBuilder` instance.
	`name` sets the author's name.  
________________

- <a name="method-set-url"></a>[MessageEmbedAuthorBuilder](./class_messageembedauthorbuilder.md) **set\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**  
  
	Sets a url link to the author.  
________________

- <a name="method-set-icon-url"></a>[MessageEmbedAuthorBuilder](./class_messageembedauthorbuilder.md) **set\_icon\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) icon\_url **)**  
  
	Sets the author's icon.
	`icon_url` only supports http(s) and attachments based URL.  
________________

- <a name="method-set-proxy-icon-url"></a>[MessageEmbedAuthorBuilder](./class_messageembedauthorbuilder.md) **set\_proxy\_icon\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) proxy\_icon\_url **)**  
  
	Sets the author's icon proxy url.  
________________

- <a name="method-build"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **build** **(**  **)**  
  
	Returns the embed author data as a `Dictionary`.  
________________

  
